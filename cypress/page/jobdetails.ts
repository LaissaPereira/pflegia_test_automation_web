import { BasePage } from "./base";


export class JobDetailsPage extends BasePage {

    readonly jobDetailsLocators = this.locators.jobDetailsLocators

    expectTitleBeVisible() {
        this.verifyElementIsVisible(this.jobDetailsLocators.title)
    }
}    