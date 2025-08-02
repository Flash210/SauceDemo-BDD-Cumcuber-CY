
import { LoginLocators } from '../locators/login/login_locators';

export class LoginPage {
    visit() {
        cy.visit('/');
    }

    enterUsername(username: string) {
        !username
            ? cy.get(LoginLocators.usernameField).clear()
            : cy.get(LoginLocators.usernameField).clear().type(username);
    }

    enterPassword(password: string) {
        !password
            ? cy.get(LoginLocators.passwordField).clear()
            : cy.get(LoginLocators.passwordField).clear().type(password);
    }

    clickLogin() {
        cy.get(LoginLocators.loginButton).click();
    }

    login(username: string, password: string) {
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLogin();
    }

    assertErrorMessage(expectedMessage: string) {
        cy.get(LoginLocators.errorMessage)
            .should('be.visible')
            .and('have.text', expectedMessage);
    }

    assertInventoryPageVisible() {
        cy.url().should('include', '/inventory.html');
        cy.get(LoginLocators.inventoryList).should('be.visible');
    }
}
