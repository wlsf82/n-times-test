# n-times-test
Sample project to demonstrate different ways to run the same test N times.

## Installation

Run `npm install` to install the dev dependencies.

## Running the sample tests

Run `npm t` to run the tests in headless mode.

After running them, you should see a result like this.

```sh
Running:  sample.spec.js                                                                  (1 of 1)


  Run the same test N times
    Vanilla
      ✓ runs using .map
      ✓ runs using .map
      ✓ runs using .map
      ✓ runs using .forEach
      ✓ runs using .forEach
      ✓ runs using .forEach
    Lodash
      ✓ runs
      ✓ runs
      ✓ runs
    Cypress._
      ✓ runs
      ✓ runs
      ✓ runs


  12 passing (172ms)
```

You can also run the tests in interactive mode, by running `npm run cy:open`, and then clicking the <kbd>> Run 1 integration spec</kbd> button.

___

Made with 💚 by [Walmyr](https://walmyr.dev).
