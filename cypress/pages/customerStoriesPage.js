class CusomerStories {

    getCostomerHeader() {
        return cy.get('h1 span.c-PJLV').contains('Customer Stories')

    }
}
export default new CusomerStories()