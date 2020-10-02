describe('Página de productos', () => {
    beforeEach(() => {
      cy.visit('/')
    }),
  
    it('Buscar productos por nombre', () => {
      cy
      .wait(3000)
      .get('.card').should('have.length', 14)
      .get('.input').type('Casa')
      .get('.card').should('have.length', 1)
      .log('Busca producto por su nombre')
      .end()
    }),
    it('Agregar producto, comprobar que éste sea visible y poder eliminarlo del modal', () => {
      cy
      .wait(3000)
      .get(':nth-child(1) > .card > .card-content > .content > .button').click()
      .get(':nth-child(2) > .card > .card-content > .content > .button').click()
      .get(':nth-child(3) > .card > .card-content > .content > .button').click()
      .log('Se añaden productos al carro de compras')
      .get('.navbar-end > :nth-child(1)').click()
      .get('.modal-card').should('to.be.visible')
      .log('El carro de compras es visible')
      .get('.modal-card').find('.title.is-5')
      .get(':nth-child(1) > .card > .card-content > .media > .button').click()
      .log('Se elimina producto')
    })
  })