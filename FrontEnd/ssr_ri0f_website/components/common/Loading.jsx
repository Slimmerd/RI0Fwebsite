import React from 'react';
import styled from "styled-components";

const LoadingStyle = styled.div`
  height: 100vh;
  background: #121212;
  display: flex;
  align-items: center;

  .loader {
    animation-name: spin;
    transform-origin: 50% 50%;
    animation-duration: 1.2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg)
    }
  }

  @media (max-width: 576px), (max-height: 576px) {
    svg {
      width: 256px;
      height: 256px;
    }
  }
`

const Loading = () => {
    return (
        <LoadingStyle>
            <div className={'container'}>
                <svg width="384" height="384" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M262.047 275.109H222.391V354H186.812V149.25H258.812C282.438 149.25 300.672 154.547 313.516 165.141C326.359 175.734 332.781 191.062 332.781 211.125C332.781 224.812 329.453 236.297 322.797 245.578C316.234 254.766 307.047 261.844 295.234 266.812L341.219 352.172V354H303.109L262.047 275.109ZM222.391 246.562H258.953C270.953 246.562 280.328 243.562 287.078 237.562C293.828 231.469 297.203 223.172 297.203 212.672C297.203 201.703 294.062 193.219 287.781 187.219C281.594 181.219 272.312 178.125 259.938 177.938H222.391V246.562Z"
                        fill="#ECF0F1"/>
                    <path
                        className={'loader'}
                        d="M256 512C222.382 512 189.092 505.378 158.033 492.513C126.974 479.648 98.7524 460.791 74.9807 437.019C51.2089 413.248 32.352 385.026 19.4868 353.967C6.62163 322.908 -2.93901e-06 289.618 0 256L25.6 256C25.6 286.257 31.5595 316.217 43.1382 344.17C54.7168 372.124 71.688 397.523 93.0826 418.917C114.477 440.312 139.876 457.283 167.83 468.862C195.783 480.441 225.743 486.4 256 486.4L256 512Z"
                        fill="#ECF0F1">
                    </path>

                </svg>
            </div>
        </LoadingStyle>
    );
};

export default Loading;
