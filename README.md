## Introduction

In this exercise, there is no right or wrong answer, no trick, no gimmick. There's just some working code that needs your attention.

You could probably spend days fine-tuning your solution. _Please, don't._ The purpose is to create a starting point for the conversation we will have in the follow-up session. 2-4 hours will hopefully be enough time. That said, please record the amount of time (approximately) that you spend on the exercise.

Questions are welcome and encouraged! Please email your interviewer if you have any.

## Requirements

- In order to ensure compatibility with the installed dependencies, you are encouraged to use `nvm` ([install](https://github.com/nvm-sh/nvm#node-version-manager---)) to run the project: `nvm use`
- You will need to install the dependencies: `npm install`

## Domain

The domain concerns movie rentals and customer statements. All of the code is in `src/`, and the data is in `src/data/`. Some `npm` scripts are already defined in `package.json`.

## Current State

The program can be run with `npm run statement`.

This should be the output:

```
Rental Record for Joe Schmoe
        The Fellowship of the Ring      3.5
        The Two Towers  15
        The Return of the King  3
Amount owed is 21.5
You earned 4 frequent renter points
```

## Your Tasks

1. The business requires statements in HTML - in addition to their current text output. The desired HTML output is shown below. Please implement `npm run html-statement` that returns this output.
2. The business wants to change the movie classifications. They may, for example, wish to remove "Children's" or add a new classification called "SciFi". Then again, they may simply wish to change the algorithms for calculating frequent renter points. **In other words, the classification / pricing / points system needs to be more flexible.** (This task is intentionally open-ended.)

### HTML Output for Task #1

```
<h1>Rental Record for <em>Joe Schmoe</em></h1>
<ul>
    <li>The Fellowship of the Ring - 3.5</li>
    <li>The Two Towers - 15</li>
    <li>The Return of the King - 3</li>
<ul>
<p>Amount owed is <em>21.5</em></p>
<p>You earned <em>4</em> frequent renter points</p>
```

## Your Deliverables

1. Set up your interviewer as a collaborator on the repo you set up
2. Include a rough estimate of how much time you spent working on the assignment.
3. Also include any additional instructions / requirements for running your solution.
4. Finally, please feel free - though you're not required - to provide some "documentation" to justify any tradeoffs you might have made when writing the code and what implications those tradeoffs may have in the future - especially for the second "task" above.
