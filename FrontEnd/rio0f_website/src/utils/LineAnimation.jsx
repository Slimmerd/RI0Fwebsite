import {useSpring, animated} from "react-spring";
import VisibilitySensor from "react-visibility-sensor";
import React, {useState} from "react";
import {Spring} from "react-spring/renderprops";

const FadeInDirection = ({isVisible, children}) => {
    const props = useSpring({
        // opacity: isVisible ? 1 : 0,
        // transition: 'opacity 0.5s linear',

       // animation: isVisible ? 'dash 3s ease-in 1s forward' : ''

    });
    return <Spring
        from={{ x: 100 }}
        to={{ x: 0 }}>{props => (children )}</Spring>;
};

export const LineContainer = ({children}) => {
    const [isVisible, setVisibility] = useState(false);

    const onChange = visiblity => {
        visiblity && setVisibility(visiblity);
        console.log(visiblity)

    };

    return (
        <VisibilitySensor partialVisibility minTopValue={200} onChange={onChange}>
            <FadeInDirection isVisible={isVisible}>{children}</FadeInDirection>
        </VisibilitySensor>
    );
};
