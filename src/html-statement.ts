import { MovieCollection } from "./models/Movie";
import { Customer } from "./models/Customer"
import { PointsPolicyCollection, PointsPolicyDetails } from "./models/PointsPolicy";
import { CostPolicyCollection, CostPolicyDetails } from "./models/CostPolicy";
import { CategoryCollection, CategoryId } from "./models/Category";

const getCost = (policy: CostPolicyDetails, days: number): number => {
  const { flatFee, daysThreshold, dailyCostAfterThreshold } = policy
  const dailyFee = (days > daysThreshold) ? (days - daysThreshold) * dailyCostAfterThreshold : 0;
  return flatFee + dailyFee;
}

const getPoints  = (policy: PointsPolicyDetails, days: number): number => {
  const { flatPoints, daysThreshold, pointsAfterThreshold } = policy
  const additionalPoints = (days > daysThreshold) ? pointsAfterThreshold : 0;
  return flatPoints + additionalPoints;
}

const sum = (arr: number[]): number => arr.reduce((prev, curr) => prev + curr);

export const statement = (
  customer: Customer,
  movies: MovieCollection,
  categories: CategoryCollection,
  costPolicies: CostPolicyCollection,
  pointsPolicies: PointsPolicyCollection,
  returnHTML: boolean
): string => {
  const { name, rentals } = customer;

  const movieListData: { title: string, cost: number, points: number }[] = rentals.map(({ movieId, days }) => {
    const movie = movies[movieId];
    const category = categories[movie.categoryId];
    const costPolicy = costPolicies[category.costPolicyId]
    const pointsPolicy = pointsPolicies[category.pointsPolicyId]
    return {
      title: movie.title,
      cost: getCost(costPolicy, days),
      points: getPoints (pointsPolicy, days)
    }
  })

  const totalCost = sum(movieListData.map(movie => movie.cost));
  const totalPoints = sum(movieListData.map(movie => movie.points));

  const title = returnHTML
    ? `<h1>Rental Record for <em>${name}</em></h1>\n`
    : `Rental Record for ${name}\n`

  const movieList = returnHTML
    ? `<ul>\n${movieListData.map(({ title, cost }) => `\t<li>${title} - ${cost}</li>\n`)}</ul>\n`
    : `${movieListData.map(({ title, cost }) => `\t${title} \t${cost} \n`)}`

  const totals = returnHTML
    ? `Amount owed is ${totalCost}\n` + `You earned ${totalPoints} frequent renter points\n`
    : `< p > Amount owed is < em > ${totalCost} </></p >\n` + ` < p > You earned < em > ${totalPoints} </> frequent renter points</p >\n`

  return `
  ${title}
  ${movieList}
  ${totals} 
  `;
};
