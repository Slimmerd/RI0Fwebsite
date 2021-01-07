import {HardwarePageNaming} from "../../components/HardwarePage/Blocks/Naming_hardwarepage";
import {HardwarePageCardsBlock} from "../../components/HardwarePage/Blocks/CardsBlock_hardwarepage";

const HardwarePage = () => {
    return (
        <div>
            <HardwarePageNaming/>
            <HardwarePageCardsBlock/>
        </div>
    )
}

export default HardwarePage