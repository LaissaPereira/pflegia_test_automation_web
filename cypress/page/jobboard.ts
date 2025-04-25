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
        this.verifyElementIsVisible(this.jobBoardLocators.listEmpty)
    }

    expectJobBoardListVisible() {
        this.verifyElementIsVisible(this.jobBoardLocators.listJobCard)
    }
    expectPostalCodeFilterVisible() {
        this.verifyElementIsVisible(this.jobBoardLocators.postalTagfilter)
    }

    expectDesiredPositionFilterVisible() {
        this.verifyElementIsVisible(this.jobBoardLocators.postionTagfilter)
    }
    expectFacilityTypeFilterVisible() {
        this.verifyElementIsVisible(this.jobBoardLocators.facilityTagFilter)
    }

    expectRedirectJobDetailBeVisible() {
        this.verifyElementIsVisible(this.jobBoardLocators.jobDetails);
    }


}