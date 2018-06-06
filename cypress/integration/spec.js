describe('pointer-events bug', () => {
  it('disallows clicking on elements with `pointer-events: none` children', () => {
    cy.window().then(({ document }) => {
      document.body.innerHTML = '<button><span style="pointer-events: none">Some Label</span></button>'
    })
    cy.get('button').contains('Some Label').click()
  })
})
