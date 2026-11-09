describe('in-page navigation', () => {
  beforeEach(() => {
    cy.viewport(1693, 940);
    cy.visit('/docs/examples/patterns/in-page-navigation/full-page?theme=light');
    cy.document().then((document) => document.fonts.ready);
  });

  it('highlights the final heading when scrolling to the bottom of the page', () => {
    cy.scrollTo('bottom');
    cy.get('.p-in-page-navigation__link').last().should('have.class', 'is-active');
  });

  it('updates the active heading when scrolling back up from the bottom', () => {
    cy.scrollTo('bottom');
    cy.get('.p-in-page-navigation__link').last().should('have.class', 'is-active');
    cy.get('h2')
      .eq(1)
      .then(($heading) => {
        cy.scrollTo(0, $heading.offset().top - 200);
        cy.get(`.p-in-page-navigation__link[href="#${$heading.attr('id')}"]`).should('have.class', 'is-active');
      });
  });

  it('uses the final visible navigation item in the horizontal layout', () => {
    cy.viewport(800, 700);
    cy.scrollTo('bottom');
    cy.get('.p-in-page-navigation__link').filter(':visible').last().should('have.class', 'is-active');
  });
});
