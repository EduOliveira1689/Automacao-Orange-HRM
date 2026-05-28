class ProductPage {
  selectorsList() {
    const selectors = {
      productsIcon: "[href='/products']",
      viewCartButton: "[href='/view_cart']",
      addProductToCart: "[data-product-id]",
      removeProductButton: ".cart_quantity_delete",
      continueShoppingButton: ".close-modal",
      modalAddedMessage: ".modal-body",
      viewCartModalButton: "a[href='/view_cart']",
      searchProductField: "[placeholder='Search Product']",
      searchButton: "#submit_search",
    };

    return selectors;
  }

  accessProductsPage() {
    cy.get(this.selectorsList().productsIcon).click();
  }

  addRandomProductToCart() {
    cy.get(this.selectorsList().addProductToCart)
      .filter(":visible")
      .then(($products) => {
        const randomIndex = Math.floor(Math.random() * $products.length);

        cy.wrap($products[randomIndex]).scrollIntoView().click({ force: true });
      });
  }

  addMultipleRandomProducts(quantity = 3) {
    for (let index = 0; index < quantity; index++) {
      this.addRandomProductToCart();

      cy.get(this.selectorsList().continueShoppingButton).click();
    }
  }

  validateProductAdded() {
    cy.get(this.selectorsList().modalAddedMessage).should(
      "contain",
      "Your product has been added to cart",
    );
  }

  accessCart() {
    cy.get(this.selectorsList().viewCartModalButton).first().click();
  }

  clearCart() {
    cy.get("body").then(($body) => {
      if ($body.find(".cart_quantity_delete").length > 0) {
        cy.log("Itens encontrados no carrinho");

        cy.get(this.selectorsList().removeProductButton).each(($button) => {
          cy.wrap($button).click();
        });
      } else {
        cy.log("Carrinho vazio");
      }
    });
  }

  searchProduct(productName) {
    cy.get(this.selectorsList().searchProductField).type(productName);

    cy.get(this.selectorsList().searchButton).click();
  }

  validateSearchedProduct(productName) {
    cy.contains(productName).should("be.visible");
  }
}

export default ProductPage;
