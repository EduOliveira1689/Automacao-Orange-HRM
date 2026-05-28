import loginData from "../../fixtures/users/loginData.json";
import LoginPage from "../../pages/loginPage";
import ProductPage from "../../pages/productPage";

const loginPage = new LoginPage();
const productPage = new ProductPage();

describe("Product Tests", () => {
  beforeEach(() => {
    loginPage.accessLoginPage();

    loginPage.loginWithUser(
      loginData.userSuccess.username,
      loginData.userSuccess.password,
    );

    loginPage.validateValidAccess();
  });

  it("Adicionar item no carrinho", () => {
    productPage.accessProductsPage();

    productPage.addRandomProductToCart();

    productPage.validateProductAdded();
  });

  it("Adicionar múltiplos itens no carrinho", () => {
    productPage.accessProductsPage();

    productPage.addMultipleRandomProducts(3);

    productPage.accessCart();
  });

  it("Adicionar e remover item do carrinho", () => {
    productPage.accessProductsPage();

    productPage.addRandomProductToCart();

    productPage.validateProductAdded();

    productPage.accessCart();

    productPage.clearCart();
  });

  it("Buscar produto", () => {
    productPage.accessProductsPage();

    productPage.searchProduct("Blue Top");

    productPage.validateSearchedProduct("Blue Top");
  });
});
