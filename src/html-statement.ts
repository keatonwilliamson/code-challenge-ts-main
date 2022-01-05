import { MovieCode } from "./models/Movie";
import { Customer } from "./models/Customer"


let rentalCallback = (days: number)

export const statement = (customer: Customer, movies: any, html: boolean): string => {
  let totalAmount = 0;
  let frequentRenterPoints = 0;
  // let result = `Rental Record for ${customer.name}\n` `<h1>Rental Record for <em>Joe Schmoe</em></h1>${customer.name}\n`
  let title = html
    ? `<h1>Rental Record for <em>${customer.name}</em></h1>`
    : `Rental Record for ${customer.name}`

  // { "movieID": "F001", "days": 3 },
  // { "movieID": "F002", "days": 5 },
  // { "movieID": "F003", "days": 4 }
  let yeah: { title: string, amount: number }[] = customer.rentals.map(r => {
    return { title: movies[r.movieID] }
  })

  {
    baseAmount: number,
      daysApplicationThreshold: Number,
        daysOffset: Number,
          daysMultiplier: number
  }


  for (let r of customer.rentals) {
    let movie = movies[r.movieID];
    let thisAmount = 0;

    switch (movie.code) {
      case MovieCode.REGULAR:
        thisAmount = 2;
        if (r.days > 2) {
          thisAmount += (r.days - 2) * 1.5;
        }
        break;
      case MovieCode.NEW:
        thisAmount = r.days * 3;
        break;
      case MovieCode.CHILDRENS:
        thisAmount = 1.5;
        if (r.days > 3) {
          thisAmount += (r.days - 3) * 1.5;
        }
        break;
    }

    frequentRenterPoints++;
    if (movie.code === MovieCode.NEW && r.days > 2) frequentRenterPoints++;

    result += `\t${movie.title}\t${thisAmount}\n`;
    totalAmount += thisAmount;
  }


  result += `Amount owed is ${totalAmount}\n`;
  result += `You earned ${frequentRenterPoints} frequent renter points\n`;

  return result;
};
