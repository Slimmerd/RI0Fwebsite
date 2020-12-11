import {DonatePageNaming} from "./Blocks/Naming_donatepage";
import {DonatePageMethods} from "./Blocks/Methods_donatepage";
import {DonatePageMainSponsors} from "./Blocks/MainSponsors_donatepage";
import {DonatePageSecondarySponsors} from "./Blocks/SecondarySponsors_donatepage";
import React from 'react'

export const DonatePage = () =>{
    return(
        <div>
          <DonatePageNaming/>
          <DonatePageMethods/>
          <DonatePageMainSponsors/>
          <DonatePageSecondarySponsors/>
        </div>
    )
}