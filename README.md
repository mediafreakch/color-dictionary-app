This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Color Dictionary App

## Task given

Our customer needs to manage transformation dictionaries.
In this specific case dictionaries are used to normalise values in dataset columns.
Consider the following example of a small dataset of products:

Original Dataset:

| Product           | Color          | Price   |
| ----------------- | -------------- | ------- |
| Apple iPhone 6s   | Anthracite     | CHF 769 |
| Samsung Galaxy S8 | Midnight Black | CHF 569 |
| Huawei P9         | Mystic Silver  | CHF 272 |

Transformed Dataset:

| Product           | Color     | Price   |
| ----------------- | --------- | ------- |
| Apple iPhone 6s   | Dark Grey | CHF 769 |
| Samsung Galaxy S8 | Black     | CHF 569 |
| Huawei P9         | Silver    | CHF 272 |

In order to transform the dataset into the desired format we need to create a dictionary like
this one below:

| From           | To        |
| -------------- | --------- |
| Anthrazite     | Dark Grey |
| Midnight Black | Black     |
| Mystic Silver  | Silver    |

**Validations**

The created dictionary should not contain any:

- Clones: N identical rows in the dictionary.
- Forks: N rows in the dictionary with the same ‘Form’ but with different ‘To’’ .

**Functional Requirements**

- Creating and deleting dictionaries
- Showing available dictionaries in an overview
- Editing dictionaries (adding, updating and removing rows)
- Validating the entire dictionary regarding consistency (see above)
- Validations should be shown as some kind of problem markers. (see Validations here
  below)

**Technical Requirements**

- Single page web application using React
- Mobx or Redux or another state management library.
- Typescript
- Unit tests
- CSS

If any of the above items are not clear please state your interpretation and proceed with
completing the exercise using that interpretation

## Interpretations and disclaimers

- I assumed it's valid to have a mapping like the following:

  | From           | To        |
  | -------------- | --------- |
  | Anthrazite     | Dark Grey |
  | Midnight Black | Dark Grey |

- Due to time restrictions, I only added 3 tests: `form.test.tsx`, `index.test.tsx` and `page.test.tsx`. But they give a glimpse on how I would approach testing
- `hooks/useForm.js` is in plain Javascript. It's third party code that I didn't transform to Typescript due to time contraints. That's also why you'll find a lot of `@ts-ignore` in `form.tsx`
- `utils/test-utils.jsx` is plain JSX too. Not transformed to Typescript due to time contraints
- For the purpose of the excercise, I preload products and one color mapping into the store already

## Available Scripts

In the project directory, you can run:

### `npm install`

First and foremost to install all dependencies to run the app.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
