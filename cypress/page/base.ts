import  * as locators from '../locators/index';
import data from '../fixtures/data.json'


export class BasePage {

    readonly locators = locators
    readonly data = data


    navigateTo(url : string ) {
        cy.visitStagingWithAuth(url)
        cy.acceptCookies()
        
    }

    getElement(locator: string) {
        return cy.get(locator)
    }
    getTextElement(element: string) {
        return cy.contains(element)
    }

    onClick(locator: string) {
        return this.getElement(locator).click()
    }
    onClickByText(element: string) {
        return this.getTextElement(element).click()
    }

    onType(locator: string, value: string) {
        return this.getElement(locator).type(value)
    }

    verifyElementIsVisible(locator: string) {
        return this.getElement(locator).should('be.visible')
    }
    verifyTextIsVisible(element: string) {
        return this.getTextElement(element).should('be.visible')
    }

}
