import { HomePage } from "../page/home";


describe("Home Page scenarios", () => {

    let homePage: HomePage;

    homePage = new HomePage();

    it("T01 - User should be navigate to the home page and title display", () => {
       
        homePage.userNavigateToHomePage();
        homePage.expectHomeTitleBeVisible();
    })
})