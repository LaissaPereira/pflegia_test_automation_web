import { BasePage } from "./base";


export class FunnelPage extends BasePage {

    readonly funnelData = this.data.funnel

    expectTitleBeVisible() {
      this.verifyTextIsVisible(this.funnelData.areaTitle)
    }
}    