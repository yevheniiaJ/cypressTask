
class SignUpPage {

    getSignUpHeader() {
        return cy.get('h1.c-PJLV.c-rMlRu.c-frvnKx')
    }

    getCompanyEmail() {
        return cy.get('#email')
    }

    getFirstName() {
        return cy.get('#first_name')
    }

    getLastName() {
        return cy.get('#last_name')
    }

    getPassword() {
        return cy.get('#password')
    }

    getTermsCheckbox() {
        return cy.get('#terms_and_conditions')
    }

    getSubsCheckbox() {
        return cy.get('#subscription_opt_in')
    }

    signUpBtn() {
        return cy.get('button[type="submit"]').first()
    }

    getError() {
        return cy.get('svg[aria-describedby="error"]')
    }

}
export default new SignUpPage()