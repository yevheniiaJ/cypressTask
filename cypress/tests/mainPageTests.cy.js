import MainPage from '../pages/mainPage.js'
import CusomerStories from '../pages/customerStoriesPage.js'
import SignUpPage from '../pages/signUpPage.js'

describe('Main page tests', () => {

    beforeEach(() => {
        cy.clearCookies(
            cy.clearLocalStorage()
        )
    })

    it('TC #1. Verify sign up flow with invalid data', () => {
        MainPage.open()
        MainPage.signUpBtn().click({ waitForAnimations: false })
        SignUpPage.getCompanyEmail().type('test@gmail.com')
        SignUpPage.getFirstName().type('Anna')
        SignUpPage.getLastName().type('Novicka')
        SignUpPage.getPassword().type('Qwerty12345!')
        SignUpPage.getTermsCheckbox().click()
        SignUpPage.getSubsCheckbox().click()
        SignUpPage.signUpBtn().scrollIntoView().click({ force: true })
        SignUpPage.getError().should('be.visible')
    })
    it('TC #2. Verify LinkedIn link is correct and visible', () => {
        MainPage.open()

        MainPage.getLinkedin()
            .scrollIntoView()
            .should('be.visible')
            .should('have.attr', 'href')
            .and('include', 'https://www.linkedin.com/company/telnyx/')
            .and('match', /^https:\/\/www\.linkedin\.com\/company\/telnyx\/?$/)
            .and('not.be.empty')
        MainPage.getLinkedin()
            .should('have.attr', 'target', '_blank')
    })

    it('TC #3. Verify navigation to Twitter page', () => {
        MainPage.open()
        MainPage.getTwitter()
            .scrollIntoView()
            .should('be.visible')
            .click({ force: true })
        cy.request('https://x.com/telnyx').then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('TC #4. Verify Facebook link is visible and correct', () => {
        MainPage.open()
        MainPage.getFacebook()
            .should('exist')
            .scrollIntoView()
            .should('be.visible')
            .should('have.attr', 'href')
            .and('match', /^https:\/\/(www\.)?facebook\.com\/Telnyx\/?$/)
            .and('not.be.empty')
        MainPage.getFacebook()
            .should('have.attr', 'target', '_blank')
    })



    it('TC #5. Verify logo returns to the main page', () => {
        MainPage.open()
        MainPage.signUpBtn().click({ force: true })
        cy.location('pathname', { timeout: 20000 }).should('include', '/sign-up')
        SignUpPage.getSignUpHeader().should('be.visible')
        MainPage.getLogo().click()
        cy.url().should('eq', 'https://telnyx.com/')
    })

    it('TC #6. Verify switching between tabs in the Conversational AI block', () => {
        MainPage.open()
        MainPage.getTextToSpeechTab()
            .scrollIntoView()
            .click({ force: true })
        MainPage.getTextToSpeechContent().should('be.visible')
        MainPage.getSpeechToTextTab().click({ force: true })
        MainPage.getSpeechToText().should('be.visible')
        MainPage.getHdVoiceTab().click({ force: true })
        MainPage.getHdVoiceText().should('be.visible')
    })

    it('TC #7. Verify switcher in the CHD Voice AI block', () => {
        MainPage.open()
        MainPage.getNaturalHdBtn()
            .scrollIntoView()
            .should('be.disabled')
        MainPage.getStandartCodecBtn()
            .click({ force: true })
        MainPage.getStandartCodecBtn()
            .should('be.disabled')
        MainPage.getNaturalHdBtn()
            .click({ force: true })
        MainPage.getNaturalHdBtn().wait(5000)
            .should('be.disabled')
    })

    it('TC #8. Verify navigation to the Sign up page by clicking the "Sign up for free" button', () => {
        MainPage.open()
        MainPage.getSignUpForFreeBtn()
            .scrollIntoView()
            .click({ force: true })
        SignUpPage.getSignUpHeader().should('be.visible')

    })

    it('TC #9. Verify navigation to the Explore Stories page', () => {
        MainPage.open()
        MainPage.getExplorestoriesBtn()
            .scrollIntoView()
            .click({ force: true })
        CusomerStories.getCostomerHeader().should('be.visible')

    })

    it('TC #10. Verify Joining Slack communnity functionality', () => {
        MainPage.open()
        MainPage.getJoinCommunity()
            .scrollIntoView()
            .should('be.visible')
            .invoke('removeAttr', 'target')
            .click({ force: true })
        cy.url()
            .should('include', 'https://joinslack.telnyx.com/')

    })
})