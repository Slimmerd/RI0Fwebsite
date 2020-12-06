import React from 'react'
import styled from "styled-components";
import {FadeInContainer} from "../../../utils/FadeInAnimation";
import { useSpring, animated } from 'react-spring'

const MainDiv = styled.div`
    height: 650px;
    
    display: flex;
    align-items: center;
    
    .block{
      background: #2C3E50;
      border-radius: 15px;
      box-shadow: 31.2195px 25.0069px 80px rgba(0, 0, 0, 0.07), 20.2349px 16.2081px 46.8519px rgba(0, 0, 0, 0.0531481), 12.0253px 9.63227px 25.4815px rgba(0, 0, 0, 0.0425185), 6.2439px 5.00137px 13px rgba(0, 0, 0, 0.035), 2.54381px 2.0376px 6.51852px rgba(0, 0, 0, 0.0274815), 0.578139px 0.46309px 3.14815px rgba(0, 0, 0, 0.0168519);
    }
    
    .text{
    font-family: Oswald, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 96px;
  line-height: 142px;

  color: #FFFFFF;
    }
`
const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.05]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export const OnlineLogPageStub = () => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 10, tension: 350, friction: 40 } }))
    return (
        <MainDiv>
            <div className={'container'}>
                <FadeInContainer>
                    <animated.div
                        className="card"
                        onMouseMove={({clientX: x, clientY: y}) => set({xys: calc(x, y)})}
                        onMouseLeave={() => set({xys: [0, 0, 1]})}
                        style={{transform: props.xys.interpolate(trans)}}
                    >   <div className={'block'}>
                        <div className={'text'}>Будет опубликован позже</div></div></animated.div>
                </FadeInContainer>
            </div>
        </MainDiv>
    )
}