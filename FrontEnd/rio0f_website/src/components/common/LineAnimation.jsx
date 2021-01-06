import VisibilitySensor from "react-visibility-sensor";
import React, {useState} from "react";
import {Spring} from "react-spring/renderprops.cjs";

export const LineSContainer = ({svg,path}) => {
    const [isVisible, setVisibility] = useState(false);

    const onChange =() => {
        setVisibility(isVisible);
    };

    return(
        <VisibilitySensor isVisible={isVisible} partialVisibility={'bottom'} offset={{bottom:180}} onChange={onChange}>
            {({ isVisible }) => (
                <svg {...svg}>
                    <Spring
                        from={isVisible ? { x: 1000} : ''}
                        to={ isVisible ? { x: 0 } : ''}
                        config={{tension: 10, friction: 20}}>
                        {props => (
                            <path {...path} strokeDasharray="1000" strokeDashoffset={props.x}/>
                        )}
                    </Spring>
                </svg>)}
        </VisibilitySensor>
    )
}
