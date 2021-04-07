describe('Run the same test N times', () => {
  context('Vanilla', () => {
    Array(3).fill().map(() => {
      it('runs using .map', () => {})
    })

    Array(3).fill().forEach(() => {
      it('runs using .forEach', () => {})
    })
  })

  context('Lodash', () => {
    const _ = require('lodash')

    _.times(3, () => {
      it('runs', () => {})
    })
  })

  context('Cypress._', () => {
    Cypress._.times(3, () => {
      it('runs', () => {})
    })
  })
})
