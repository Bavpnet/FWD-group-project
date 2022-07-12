// eslint-disable-next-line no-undef
context("Home", () => {
  // eslint-disable-next-line no-undef
  beforeEach(() => {
    // eslint-disable-next-line no-undef
    cy.visit("http://localhost:3000");
  });

  // eslint-disable-next-line no-undef
  it("should find the title of the homepage", () => {
    // eslint-disable-next-line no-undef
    cy.get("header");
  });
});
