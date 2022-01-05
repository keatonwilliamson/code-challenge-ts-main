#!/usr/bin/env node

import { Customer } from "./models/Customer";
import { MovieCollection } from "./models/Movie";

import { Command } from "commander";
import { statement } from "./statement";
import { CategoryCollection } from "./models/Category";
import { CostPolicyCollection } from "./models/CostPolicy";
import { PointsPolicyCollection } from "./models/PointsPolicy";

const program: Command = require("commander");
const version: string = require("../package.json").version;

const customer: Customer = require("./data/customer.json");
const movies: MovieCollection = require("./data/movies.json");
const categories: CategoryCollection = require("./data/category.json");
const costPolicies: CostPolicyCollection = require("./data/costpolicy.json");
const pointsPolicies: PointsPolicyCollection = require("./data/pointspolicy.json");

const statementAsHTML = (asHTML: boolean) => {
  return statement(customer, movies, categories, costPolicies, pointsPolicies, asHTML);
}

program
  .version(version)
  .description("A CLI for generating customer statements");

program
  .command("statement")
  .description("Prints out a plain-text statement for the customer")
  .action(() => console.log(statementAsHTML(false)));

program
  .command("html-statement")
  .description("Prints out an HTML statement for the customer")
  .action(() => console.log(statementAsHTML(true)));


program.parse(process.argv);
