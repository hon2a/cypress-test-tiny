describe('pointer-events bug', () => {
  it('disallows clicking on elements with `pointer-events: none` children', () => {
    cy.visit('https://ant.design/components/button/')
    cy.get('.main-container .ant-btn').eq(0).click()
  })
})
