import {DonatePageNaming} from "../../components/DonatePage/Blocks/Naming_donatepage";
import {DonatePageMethods} from "../../components/DonatePage/Blocks/Methods_donatepage";
import {DonatePageMainSponsors} from "../../components/DonatePage/Blocks/MainSponsors_donatepage";
import {DonatePageSecondarySponsors} from "../../components/DonatePage/Blocks/SecondarySponsors_donatepage";

const DonatePage = () => {
    return (
        <div>
            <DonatePageNaming/>
            <DonatePageMethods/>
            <DonatePageMainSponsors/>
            <DonatePageSecondarySponsors/>
        </div>
    )
}

export default DonatePage