import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const getSmallLightGradient = (color) => {
  let init = 'hotpink';
  let end = 'pink';
  switch (color) {
    case 'red':
      init = '#DC0A2D';
      end = '#97061D';
      break;
    case 'yellow':
      init = '#FCDE2A';
      end = '#B29908';
      break;
    case 'green':
      init = '#5dac6a';
      end = '#35643e';
      break;
    default:
      init = 'hotpink';
      end = 'pink';
  }
  return `radial-gradient(circle at 48% 48%, ${init} 35%, ${end} 55%)`
}
const getSmallLightBg = (color) => {
  switch (color) {
    case 'red': return 'rgb(220,10,45)';
    case 'yellow': return 'rgb(220,10,45)';
    default: return 'hotpink';
  }
}
const getSmallLightHighlight = (color) => {
  switch (color) {
    case 'red': return '#FB5474';
    case 'yellow': return '#FFF571';
    case 'green': return '#cbf6d0';
    default: return 'pink';
  }
}

const fullHeight = 800;
const lidFullHeight = fullHeight * 0.85;
const lidSmallestHeight = lidFullHeight * 0.88;
const width = 400;
const radius = 16;
const lightBodyColor = '#e8657a';
const bodyColor = '#DC0A2D';
const darkBodyColor = '#ad162f';
const innerBordersColor = '#960c23';
const screenColor = '#232323';
const screenBorderColor = '#dedede';

const Container = styled.div`
  padding:40px;
`;

const MainBody = styled.div`
  width: ${width}px;
  height: ${fullHeight}px;
  background: ${bodyColor};
  position: relative;
  border-radius: ${radius}px;
  z-index: 1;
  &:before {
    content: '';
    width: ${radius}px;
    height: ${fullHeight - 5}px;
    top: ${radius / 2}px;
    right: -${radius - 10}px;
    background: ${darkBodyColor};
    position: absolute;
    transform: skew(0deg, 45deg);
    border-radius: ${radius}px;
  }
  &:after {
    content: '';
    width: ${width - radius}px;
    height: ${radius}px;
    top: ${fullHeight - 10}px;
    left: 6px;
    position: absolute;
    transform: skew(45deg, 0deg);
    background: ${darkBodyColor};
    border-radius: ${radius}px;
  }
`;

const MainBodyBorders = styled.div`
  border: solid 2px ${innerBordersColor};
  width: ${width - 10}px;
  height: ${fullHeight - 10}px;
  border-radius: ${radius}px 4px ${radius}px 4px;
  left: 0;
  position: absolute;
  z-index: 2;
`;

const MainLight = styled.div`
  width: 75px;
  height: 75px;
  background: #FFF;
  position: absolute;
  top: 5%;
  left:20px;
  border-radius: 100%;
  border: solid 2px ${screenColor};
  &:before {
    content: '';
    width: 80%;
    height: 80%;
    top: 2%;
    right: 4%;
    position: absolute;
    background: #2AA9FD;
    border-radius: 100%;
    border: solid 2px ${screenColor};
    z-index:3;
  }
`;

const MainLight2 = styled.div`
  width: 73%;
  height: 73%;
  bottom:9px;
  right:4px;
  background:  radial-gradient(at 35% 35%, rgba(162,217,255,1) 15%, rgba(42,169,255,1) 15%);
  background: #19699E;
  position: absolute;
  border-radius: 100%;
  z-index: 3;
  &:before {
    content: '';
    width: 50%;
    height: 50%;
    top: 2%;
    left: 4%;
    position: absolute;
    background:  radial-gradient(at 35% 35%, rgba(162,217,255,1) 15%, rgba(42,169,255,1) 15%);
    border-radius: 100%;
    z-index:3;
  }
`;

const LightsTrio = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: 3%;
  left: 115px;
`;

const SmallLight = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 100%;
  background: ${(props) => getSmallLightBg(props.color)};
  background: ${(props) => getSmallLightGradient(props.color)};
  border: solid 1px #000;
  margin-right: 10px;
  position: relative;
  box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.3);
  &:after{
  content: '';
    width: 2px;
    height: 2px;
    background: ${(props) => getSmallLightHighlight(props.color)};
    position: absolute;
    border-radius: 100%;
    top: 25%;
    left: 25%;
    z-index: 3;
  }
`;

const MainContentOuter = styled.div`
  width: ${width - 28}px;
  height: ${lidSmallestHeight}px;
  position: absolute;
  bottom: 0;
  left: 0;
  border-top: solid 2px ${innerBordersColor};
  &:before {
    content: '';
    width: ${(width * 0.9) * 0.4 - 2}px;
    height: ${lidFullHeight - lidSmallestHeight - 2}px;
    border:solid 2px ${innerBordersColor};
    border-bottom: solid 2px ${bodyColor};
    position: absolute;
    z-index: 4;
    top: -${lidFullHeight - lidSmallestHeight + 2}px;
    right: -1px;
  }
  &:after {
    content: '';
    position: absolute;
    background: ${bodyColor};
    top: -${lidFullHeight - lidSmallestHeight + 2}px;
    right: ${(width * 0.9) * 0.4 - 53}px;
    width: 100px;
    height: ${lidFullHeight - lidSmallestHeight}px;
    transform: skew(-30deg);
    border-radius: ${radius - 3}px 0 0 0;
    z-index:5;
    border: solid 2px ${innerBordersColor};
    border-bottom: solid 2px ${bodyColor};
    border-right: none;
  }
`;

const MainContentInner = styled.div`
  width: ${width - 28 - 10}px;
  height: ${lidSmallestHeight - 10}px;
  position: absolute;
  top: 5px;
  left: 5px;
  border: solid 2px ${innerBordersColor};
  border-radius: ${radius / 2}px;
  z-index: 6;
  &:before {
    content: '';
    width: ${(width * 0.9) * 0.4 - 12}px;
    height: ${lidFullHeight - lidSmallestHeight - 2}px;
    border:solid 2px ${innerBordersColor};
    border-bottom: solid 5px ${bodyColor};
    border-radius: 0 ${radius / 2}px 0 0 ;
    position: absolute;
    z-index: 4;
    top: -${lidFullHeight - lidSmallestHeight + 2}px;
    right: -2px;
  }
  &:after {
    content: '';
    position: absolute;
    background: ${bodyColor};
    top: -${lidFullHeight - lidSmallestHeight + 2}px;
    right: ${(width * 0.9) * 0.4 - 53}px;
    width: 88px;
    height: ${lidFullHeight - lidSmallestHeight + 2}px;
    transform: skew(-30deg);
    border-radius: ${radius - 3}px 0 0 0;
    z-index:5;
    border: solid 2px ${innerBordersColor};
    border-bottom: solid 2px ${bodyColor};
    border-right: none;
  }
`;

const Hinges = styled.div`
  border: solid 2px ${innerBordersColor};
  position: absolute;
  right:-35px;
  bottom:${-radius - 4}px;
  width: 50px;
  height: ${lidFullHeight + radius + 4 + 16}px;
  background: ${darkBodyColor};
  background: linear-gradient(90deg,
                    ${bodyColor} 20%, ${lightBodyColor} 20%,
                    ${lightBodyColor} 40%, ${bodyColor} 40%,
                    ${bodyColor} 75%, ${darkBodyColor} 75%);
  border-radius: 30px;
  &:before {
    content: '';
    position: absolute;
    bottom: -4px;
    right: -2px;
    width: 100%;
    height: 30px;
    background: ${darkBodyColor};
    border-radius: 100%;
    border: solid 2px ${innerBordersColor};
  }
`;

const ScreenBorder = styled.div`
  position:absolute;
  background: ${screenBorderColor};
  width: 90%;
  height: 70%;
  top: 5%;
  left: 5%;
  border: solid 2px ${innerBordersColor};
  border-radius: ${radius / 2}px ${radius / 2}px ${radius / 2}px ${radius * 4}px;
  &:before {
    content: '';
    position: absolute;
    width: 85%;
    height: 99.8%;
    right: 0.2%;
    bottom: 0.2%;
    border-bottom: solid 1px ${innerBordersColor};
    border-right: solid 1px ${innerBordersColor};
    border-radius: 0 0 ${radius / 2}px;
  }
`;

const ScreenMain = styled.div`
  position: absolute;
  background: ${screenColor};
  width: 80%;
  height: 80%;
  left: 11%;
  top: 10%;
  border-radius: ${radius / 2}px;
`;

const SmallScreenButtons = styled.div`
  position: absolute;
  left: 43%;
  top: 2.5%;
  display: flex;
  justify-content: space-between;
  padding: 4px;
`;

const SmallScreenButton = styled.div`
  background: red;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  border: solid 1px ${innerBordersColor};
  &:first-child {
    margin-right: 30px;
  }
`;

const BottomScreenButtons = styled.div`
  position: absolute;
  bottom: 2.2%;
  left: 15%;
  width: 76%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BottomScreenButton = styled.div`
  background: red;
  border-radius: 100%;
  width: 23px;
  height: 23px;
  border: solid 2px ${innerBordersColor};
`;

const Speaker = styled.div`
  width: 23px;
  height: 20px;
  background: ${darkBodyColor};
  background: linear-gradient(0,
                ${screenColor} 5%, transparent 5%,
                transparent 35%, ${screenColor} 35%,
                ${screenColor} 40%, transparent 40%,
                transparent 65%, ${screenColor} 65%,
                ${screenColor} 70%, transparent 70%,
                transparent 95%, ${screenColor} 95%,
                ${screenColor} 100%);
`;

const BottomButtons = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 20%;
`;

const RoundButton = styled.div`
  width: 35px;
  height: 35px;
  background: ${screenColor};
  border-radius: 100%;
  border: solid 2px #000;
  box-shadow: 1px 1px 1px 0px rgba(0,0,0,0.3);
`;

const CenterButtons = styled.div`
  display: flex;
  flex-direction: column;
`;

const LongButtons = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const LongButton = styled.div`
  width: 40px;
  height: 8px;
  background: ${(props) => props.color};
  border-radius: 10px;
  border: solid 1px ${screenColor};
  box-shadow: 1px 1px 1px 0px rgba(0,0,0,0.3);
  &:first-child {
    margin-right: 15px;
  }
`;

const BigButton = styled.div`
  background: #52ae5f;
  width: 90%;
  height: 50px;
  border: solid 1px ${screenColor};
  border-radius: ${radius / 2}px;
  box-shadow: inset 1px 1px 0px 0px rgba(0,0,0,0.5);
`;

const DPadContainer = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
`;

const DPad = styled.div`
  width: 60px;
  height: 18px;
  background: ${screenColor};
  position: absolute;
  top: 21px;
  border-radius: 6px;
  box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.3);
  &:before {
    content: '';
    position:absolute;
    width: 18px;
    height: 60px;
    background: ${screenColor};
    left: 21px;
    top: -21px;
    border-radius: 6px;
    box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.3);
  }
  &:after {
    content: '';
    width: 60px;
    height: 18px;
    background: ${screenColor};
    position: absolute;
    top: 0px;
    border-radius: 6px;
  }
`;

const Pokedex = props => {
  return (
    <Container>
      <MainBody>
        <MainBodyBorders>
          <MainLight>
            <MainLight2 />
          </MainLight>
          <LightsTrio>
            <SmallLight color="red" />
            <SmallLight color="yellow" />
            <SmallLight color="green" />
          </LightsTrio>
          <MainContentOuter>
            <MainContentInner>
              <ScreenBorder>
                <SmallScreenButtons>
                  <SmallScreenButton />
                  <SmallScreenButton />
                </SmallScreenButtons>
                <BottomScreenButtons>
                  <BottomScreenButton />
                  <Speaker />
                </BottomScreenButtons>
                <ScreenMain>
                </ScreenMain>
              </ScreenBorder>
              <BottomButtons>
                <RoundButton />
                <CenterButtons>
                  <LongButtons>
                    <LongButton color="red" />
                    <LongButton color="blue" />
                  </LongButtons>
                  <BigButton />
                </CenterButtons>
                <DPadContainer>
                  <DPad />
                </DPadContainer>
              </BottomButtons>
            </MainContentInner>
          </MainContentOuter>
          <Hinges />
        </MainBodyBorders>
      </MainBody>
    </Container>
  )
}

Pokedex.propTypes = {

}

export default Pokedex
