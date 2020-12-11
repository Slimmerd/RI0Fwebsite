import {useSpring, animated} from "react-spring";
import VisibilitySensor from "react-visibility-sensor";
import React, {useState} from "react";

const FadeInDirection = ({isVisible, children,side}) => {
    const props = useSpring({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateX(0px)" : ( side ? "translateX(100px)" : "translateX(-100px)"),
        transition: 'opacity 0.3s linear, transform 0.3s ease-out'
    });
    return <animated.div style={props}>{children}</animated.div>;
};

export const CardFadeInContainer = ({children,side}) => {
    const [isVisible, setVisibility] = useState(false);

    const onChange = visiblity => {
        visiblity && setVisibility(visiblity);
    };

    return (
        <VisibilitySensor partialVisibility minTopValue={200} onChange={onChange}>
            <FadeInDirection isVisible={isVisible} side={side}>{children}</FadeInDirection>
        </VisibilitySensor>
    );
};
