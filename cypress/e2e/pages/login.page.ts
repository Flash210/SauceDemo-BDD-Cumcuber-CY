class LoginPage {
    elements = {
        usernameInput: () => cy.get('[data-test="username"]'),
        passwordInput: () => cy.get('[data-test="password"]'),
        loginButton: () => cy.get('[data-test="login-button"]'),
        errorMessage: () => cy.get('[data-test="error"]')
    };

    visit() {
        cy.visit('/');
    }

    enterUsername(username: string) {
        this.elements.usernameInput().type(username);
    }

    enterPassword(password: string) {
        this.elements.passwordInput().type(password);
    }

    clickLogin() {
        this.elements.loginButton().click();
    }

    shouldShowError(message: string) {
        this.elements.errorMessage()
            .should('be.visible')
            .and('have.text', message);
    }

    shouldBeOnInventoryPage() {
        cy.url().should('include', '/inventory.html');
        cy.get('.inventory_list').should('be.visible');
    }
}

export default new LoginPage();