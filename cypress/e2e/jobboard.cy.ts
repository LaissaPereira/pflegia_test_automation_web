import {JobBoardPage} from '../page/jobboard';
import { JobDetailsPage } from '../page/jobdetails';
import { FunnelPage } from '../page/funnel';


describe("End to end test flow job Board and search job scenarios", () => {


    let jobBoardPage: JobBoardPage;
    let jobDetailsPage: JobDetailsPage;
    let funnelPage: FunnelPage;

    

    jobBoardPage = new JobBoardPage();
    jobDetailsPage = new JobDetailsPage();
    funnelPage = new FunnelPage();

    it("T01 - User should be navigate to the job board page and title display", () => {
       
        jobBoardPage.userNavigateToJobBoardPage();
        jobBoardPage.expectJobBoardEmptyListVisible();
    }),

    it("T02 - User should be search a job adding postcode and desired position required field and display the list of the jobs", () => {
       
        jobBoardPage.userNavigateToJobBoardPage();
        jobBoardPage. userAddPostalCode();
        jobBoardPage.expectPostalCodeFilterVisible();
        jobBoardPage.userAddDesiredPositionInput()
        jobBoardPage.expectDesiredPositionFilterVisible();     
    }),


     it("T04 - User should be search a job postal code, desired position and  and display list of jobs, click on details of job and redirect to detail page", () => {
       
        jobBoardPage.userNavigateToJobBoardPage();
        jobBoardPage. userAddPostalCode();
        jobBoardPage.expectPostalCodeFilterVisible();
        jobBoardPage.userAddDesiredPositionInput()
        jobBoardPage.expectDesiredPositionFilterVisible()
        jobBoardPage.userSelectedFacilityType();
        jobBoardPage.expectFacilityTypeFilterVisible();
        jobBoardPage.expectJobBoardListVisible()



    }),

    it("T06 - User should be search a job and display  and click on more details of job and redirect to funnel", () => { 


        jobBoardPage.userNavigateToJobBoardPage();
        jobBoardPage. userAddPostalCode();
        jobBoardPage.userAddDesiredPositionInput();
        //jobBoardPage.userSelectedFacilityType();
        //jobBoardPage.expectJobBoardListVisible()
        jobBoardPage.userClickOnLearnMoreJob()
        jobDetailsPage.expectTitleBeVisible()
    }),

    it("T07 - User should be search a job and display  and click on interested job and redirect to funnel", () => {

        jobBoardPage.userNavigateToJobBoardPage();
        jobBoardPage.userAddPostalCode();
        jobBoardPage.userAddDesiredPositionInput()
    
        jobBoardPage.userClickOnInterestedJob()
        funnelPage.expectTitleBeVisible();
    })


});