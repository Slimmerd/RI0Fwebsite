import {useSpring, animated} from "react-spring";
import VisibilitySensor from "react-visibility-sensor";
import React, {useState} from "react";

const FadeInDirection = ({isVisible, children}) => {
    const props = useSpring({

        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.4s ease-out'
    });
    return <animated.div style={props}>{children}</animated.div>;
};

export const FadeInContainer = ({children}) => {
    const [isVisible, setVisibility] = useState(false);

    const onChange = visiblity => {
        visiblity && setVisibility(visiblity);

    };

    return (
        <VisibilitySensor partialVisibility minTopValue={200} onChange={onChange}>
            <FadeInDirection isVisible={isVisible}>{children}</FadeInDirection>
        </VisibilitySensor>
    );
};
