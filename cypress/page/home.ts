import { BasePage } from './base'


export class HomePage extends BasePage {

    readonly homeLocators = this.locators.homeLocators
    readonly homeData = this.data.home

    userNavigateToHomePage(){
        return this.navigateTo(this.homeLocators.route)
    }
    
    expectHomeTitleBeVisible() {
        return this.verifyElementIsVisible(this.homeLocators.title)
    }

}