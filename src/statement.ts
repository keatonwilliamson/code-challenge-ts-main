import { MovieCollection } from "./models/Movie";
import { Customer } from "./models/Customer"
import { PointsPolicyCollection } from "./models/PointsPolicy";
import { CostPolicyCollection } from "./models/CostPolicy";
import { CategoryCollection } from "./models/Category";
import { getCost, getPoints, sum } from "./helpers";


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
      points: getPoints(pointsPolicy, days)
    }
  })

  const totalCost = sum(movieListData.map(movie => movie.cost));
  const totalPoints = sum(movieListData.map(movie => movie.points));

  const title = returnHTML
    ? `<h1>Rental Record for <em>${name}</em></h1>\n`
    : `Rental Record for ${name}\n`

  const movieList = returnHTML
    ? `<ul>\n${movieListData.map(({ title, cost }) => `    <li>${title} - ${cost}</li>\n`).join("")}</ul>\n`
    : `${movieListData.map(({ title, cost }) => `\t${title} \t${cost} \n`).join("")}`

  const totals = returnHTML
    ? `<p>Amount owed is <em>${totalCost}</em></p>\n` + `<p>You earned <em>${totalPoints}</em> frequent renter points</p>\n`
    : `Amount owed is ${totalCost}\n` + `You earned ${totalPoints} frequent renter points\n`

  return `${title}${movieList}${totals}`;
};