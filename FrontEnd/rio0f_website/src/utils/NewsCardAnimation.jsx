import {useSpring, animated} from "react-spring";
import VisibilitySensor from "react-visibility-sensor";
import React, {useState} from "react";
import {Spring, Trail} from "react-spring/renderprops";

export const NewsAnimContainer = ({items}) => {
    const [isVisible, setVisibility] = useState(false);

    const onChange = visiblity => {
        visiblity && setVisibility(visiblity);

    };

    return (
        <VisibilitySensor partialVisibility minTopValue={200} onChange={onChange}>
            {({isVisible}) => (
                <Trail
                    items={items}
                    from={{opacity: 0}}
                    to={isVisible ? {opacity: 1} : ''}
                    config={{tension: 50, friction: 15}}>
                    {item => ({opacity}) => (
                        <animated.div
                            className="box"
                            style={{opacity}}>
                            {item}
                        </animated.div>
                    )}
                </Trail>)}
        </VisibilitySensor>
    );
};

