import {animated} from "react-spring";
import VisibilitySensor from "react-visibility-sensor";
import React, {useState} from "react";
import {Trail} from "react-spring/renderprops";

export const NewsAnimContainer = ({items}) => {
    const [isVisible, setVisibility] = useState(false);

    const onChange = visiblity => {
        visiblity && setVisibility(visiblity);

    };

    return (
        <VisibilitySensor once partialVisibility minTopValue={150} isVisible={isVisible} onChange={onChange}>
            {({isVisible}) => (
                <Trail
                    items={items}
                    keys={items.map((_, i) => i)}
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

