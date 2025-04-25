import { BasePage} from "./base";



export class JobBoardPage extends BasePage {

    readonly jobBoardLocators = this.locators.jobBoardLocators
    readonly jobBoardData = this.data.jobBoard

    userNavigateToJobBoardPage() {
        this.navigateTo(this.jobBoardLocators.route)  
        
    } 
       
    userAddPostalCode() {
        this.onType(this.jobBoardLocators.postalCodeInput, this.jobBoardData.postalCode)
        this.onClick(this.jobBoardLocators.postalCodeDropDown)
    }


    userAddDesiredPositionInput() {
        this.onType(this.jobBoardLocators.dropDownPostion, this.jobBoardData.workAreaText)
        this.onClick(this.jobBoardLocators.dropDownPositionValue);
       
    }

    userSelectedFacilityType() {
        this.onClick(this.jobBoardLocators.dropDownFacility);
        this.onClick(this.jobBoardLocators.dropdownFacilityOption);
        
    }

    userClickOnLearnMoreJob() {
        this.onClick(this.jobBoardLocators.moreDetailsButton)
    }

    userClickOnInterestedJob() {
        this.onClick(this.jobBoardLocators.interestJobButton)
    }

    expectJobBoardEmptyListVisible() {
        return this.verifyElementIsVisible(this.jobBoardLocators.listEmpty)
    }

    expectJobBoardListVisible() {
        return this.verifyElementIsVisible(this.jobBoardLocators.listJobCard)
    }
    expectPostalCodeFilterVisible() {
        return this.verifyElementIsVisible(this.jobBoardLocators.postalTagfilter)
    }

    expectDesiredPositionFilterVisible() {
        return this.verifyElementIsVisible(this.jobBoardLocators.postionTagfilter)
    }
    expectFacilityTypeFilterVisible() {
        return this.verifyElementIsVisible(this.jobBoardLocators.facilityTagFilter)
    }

    expectRedirectJobDetailBeVisible() {
        this.verifyElementIsVisible(this.jobBoardLocators.jobDetails);
    }

    


}