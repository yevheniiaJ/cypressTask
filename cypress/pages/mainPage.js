class MainPage {
    open() {
        cy.visit('', {
            failOnStatusCode: false,
            timeout: 120000,
            onBeforeLoad: (win) => {
                Object.defineProperty(win.navigator, 'webdriver', { get: () => false })
            }
        })

    }

    getLinkedin() {
        return cy.get('a[href="https://www.linkedin.com/company/telnyx"]')
    }

    getTwitter() {
        return cy.get('a[href="https://x.com/telnyx"]')
    }

    getFacebook() {
        return cy.get('a[href="https://www.facebook.com/Telnyx/"]')
    }


    getContactUs() {
        return cy.get('a[href="https://telnyx.com/contact-us"]')
    }

    getLogo() {
        return cy.get('img[alt="Telnyx Logo"]')
    }

    getChatIcon() {
        return cy.get('button[class*="rounded-full"]')
    }

    getChatTitle() {
        return cy.get('.pt-1')
    }

    signUpBtn() {
        return cy.get('a[href="/sign-up"]').first()
    }

    getHdVoiceText() {
        return cy.get('div.typography-h2-category-mobile').contains('HD VOICE AI')
    }

    getTextToSpeechTab() {
        return cy.contains('span', 'Text to speech')

    }

    getTextToSpeechContent() {
        return cy.contains('h2', 'Effortless text-to-speech')

    }

    getSpeechToTextTab() {
        return cy.contains('span', 'Speech to text')

    }

    getSpeechToText() {
        return cy.contains('h2', 'Real-time transcription')
    }

    getHdVoiceTab() {
        return cy.contains('button', 'HD Voice AI')
    }

    getStandartCodecBtn() {
        return cy.contains('button', 'Standard codec')
    }

    getNaturalHdBtn() {
        return cy.contains('button', 'HD+ NaturalHD voices')
    }

    getSignUpForFreeBtn() {
        return cy.get('span[data-content="SIGN UP FOR FREE"]')
    }

    getExplorestoriesBtn() {
        return cy.get('span[data-content="EXPLORE STORIES"]')

    }

    getJoinCommunity() {
        return cy.get('a[href="https://joinslack.telnyx.com/"]').last()
    }
}
export default new MainPage()