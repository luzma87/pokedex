import React from 'react'
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
  margin:40px;
  position: relative;
  width: ${width * 2 + 60}px;
  height: ${fullHeight}px;
`;

const MainBodyLeft = styled.div`
  width: ${width}px;
  height: ${fullHeight}px;
  background: ${bodyColor};
  position: absolute;
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

const MainLightOpt2 = styled.div`
  width: 75px;
  height: 75px;
  background: #FFF;
  position: absolute;
  top: 5%;
  left:20px;
  border-radius: 100%;
  border: solid 2px ${screenColor};
  z-index: 12;
  &:before {
    content: '';
    width: 80%;
    height: 80%;
    top: 2%;
    right: 4%;
    position: absolute;
    background: #2AA9FD;
    background:  radial-gradient(circle at 35% 30%,
                      #a2d9fe 2%,
                      #28aaff 18%,
                      #19699e 44%);
    border-radius: 100%;
    border: solid 2px ${screenColor};
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
    z-index: 8;
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
  box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.45);
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
  box-shadow: 1px 1px 3px 0px rgba(0,0,0,0.75);
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
  box-shadow: 1px 1px 4px 0px rgba(0,0,0,0.75);
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
  box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.75);
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
  box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.4);
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

const MainBodyRight = styled.div`
  width: ${width}px;
  height: ${lidSmallestHeight}px;
  background: ${bodyColor};
  position:absolute;
  left: 0;
  bottom: 10px;
  border: solid 2px ${innerBordersColor};
  border-radius: 0 ${radius / 2}px ${radius / 2}px 0;
  z-index: 2;
  &:before {
    content: '';
    width: ${(width * 0.9) * 0.4 - 2}px;
    height: ${lidFullHeight - lidSmallestHeight - 2}px;
    border:solid 2px ${innerBordersColor};
    border-bottom: solid 2px ${bodyColor};
    position: absolute;
    z-index: 4;
    top: -${lidFullHeight - lidSmallestHeight + 2}px;
    left: -2px;
    background: ${bodyColor};
  }
  &:after {
    content: '';
    position: absolute;
    background: ${bodyColor};
    top: -${lidFullHeight - lidSmallestHeight + 2}px;
    left: ${(width * 0.9) * 0.4 - 53}px;
    width: 100px;
    height: ${lidFullHeight - lidSmallestHeight}px;
    transform: skew(30deg);
    border-radius: 0 ${radius - 3}px 0 0;
    z-index:5;
    border: solid 2px ${innerBordersColor};
    border-bottom: solid 2px ${bodyColor};
    border-left: none;
  }
`;

const MainBodyRightBorders = styled.div`
  width: ${width + 4}px;
  height: ${lidSmallestHeight - radius + 12}px;
  background: ${darkBodyColor};
  position:absolute;
  left: ${width + 22}px;
  bottom: 2px;
  border-radius: 0 0 ${radius}px 0;
  &:before {
    content: '';
    width: 25px;
    height: 15px;
    background: ${darkBodyColor};
    position: absolute;
    right: 4px;
    top:-14px;
    transform: skew(45deg);
    border-radius: ${radius}px;
  }
`;

const MainBodyRightInner = styled.div`
  width: ${width - 13}px;
  height: ${lidSmallestHeight - 13}px;
  background: ${bodyColor};
  position:absolute;
  left: 5px;
  bottom: 5px;
  border: solid 2px ${innerBordersColor};
  border-radius: 0 ${radius / 2}px ${radius / 2}px 0;
  z-index: 7;
  &:before {
    content: '';
    width: ${(width * 0.9) * 0.4 - 2}px;
    height: ${lidFullHeight - lidSmallestHeight - 2}px;
    border:solid 2px ${innerBordersColor};
    border-bottom: solid 2px ${bodyColor};
    position: absolute;
    z-index: 4;
    top: -${lidFullHeight - lidSmallestHeight + 2}px;
    left: -2px;
    background: ${bodyColor};
  }
  &:after {
    content: '';
    position: absolute;
    background: ${bodyColor};
    top: -${lidFullHeight - lidSmallestHeight + 2}px;
    left: ${(width * 0.9) * 0.4 - 63}px;
    width: 100px;
    height: ${lidFullHeight - lidSmallestHeight}px;
    transform: skew(30deg);
    border-radius: 0 ${radius - 3}px 0 0;
    z-index:5;
    border: solid 2px ${innerBordersColor};
    border-bottom: solid 2px ${bodyColor};
    border-left: none;
  }
`;

const MainBodyRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 12%;
  height: 75%;
`;

const ScreenRight = styled.input`
  margin-left: 5%;
  width: 90%;
  height: 80px;
  border-radius: ${radius / 2}px;
  border: solid 2px #000;
  background: ${screenColor};
  box-shadow: inset 1px 1px 0px 0px rgba(0,0,0,0.5);
  color: #37ff00;
`;

const KeyPad = styled.div`
  background: orange;
  display: grid;
  border-radius: ${radius / 2}px;
  grid-template-columns: repeat(5, 1fr);

  width: 90%;
  margin-left: 5%;
  height: 60px;
`;

const KeyPadButton = styled.div`
  background: #28aafe;
  border: solid 1px ${screenColor};
  box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  &:nth-child(1) {
    border-radius: ${radius / 2}px 0 0 0;
  }
  &:nth-child(5) {
    border-radius: 0 ${radius / 2}px 0 0;
  }
  &:nth-child(6) {
    border-radius: 0 0 0 ${radius / 2}px;
  }
  &:nth-child(10) {
    border-radius: 0 0 ${radius / 2}px 0;
  }
`;

const LongButtonsRight = styled.div`
  display: flex;
  width: 90%;
  margin-left: 5%;
  justify-content: flex-end;
`;

const MoreButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin-left: 5%;
`;

const WhiteButtons = styled.div`
  display: flex;
  border-radius: ${radius / 4}px;
  box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.75);
  background: green;
`;

const WhiteButton = styled.div`
  width: 50px;
  height: 40px;
  background: ${screenBorderColor};
  border: solid 1px ${screenColor};
  &:first-child {
    border-radius: ${radius / 4}px 0 0 ${radius / 4}px;
  }
  &:last-child {
    border-radius: 0 ${radius / 4}px ${radius / 4}px 0;
    border-left: none;
  }
`;

const YellowButton = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background: #a08b0a;
  background:  radial-gradient(circle at 35% 40%,
                      #fff5bf 2%,
                      #fedf19 18%,
                      #a08b0a 44%);
  border: 1px solid ${screenColor};
  box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.5);
`;

const LastButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin-left: 5%;
`;

const LongRectButton = styled.div`
  background: ${screenColor};
  width: 46%;
  height: 50px;
  border-radius: ${radius / 2}px;
  border: solid 1px black;
  box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.5);
`;


const Pokedex = () => {
  return (
    <Container>
      <MainBodyLeft>
        <MainBodyBorders>
          <MainLight>
            <MainLight2 />
          </MainLight>
          <MainLightOpt2 />
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
      </MainBodyLeft>
      <MainBodyRightBorders>
        <MainBodyRight>
          <MainBodyRightInner>
            <MainBodyRightContainer>
              <ScreenRight />
              <KeyPad>
                <KeyPadButton>abc</KeyPadButton>
                <KeyPadButton>def</KeyPadButton>
                <KeyPadButton>ghi</KeyPadButton>
                <KeyPadButton>jkl</KeyPadButton>
                <KeyPadButton>mno</KeyPadButton>
                <KeyPadButton>pqrs</KeyPadButton>
                <KeyPadButton>tuv</KeyPadButton>
                <KeyPadButton>wxyz</KeyPadButton>
                <KeyPadButton>_</KeyPadButton>
                <KeyPadButton>.,?</KeyPadButton>
              </KeyPad>
              <LongButtonsRight>
                <LongButton color={screenColor} />
                <LongButton color={screenColor} />
              </LongButtonsRight>
              <MoreButtons>
                <WhiteButtons>
                  <WhiteButton />
                  <WhiteButton />
                </WhiteButtons>
                <YellowButton />
              </MoreButtons>
              <LastButtons>
                <LongRectButton />
                <LongRectButton />
              </LastButtons>
            </MainBodyRightContainer>
          </MainBodyRightInner>
        </MainBodyRight>
      </MainBodyRightBorders>
    </Container>
  )
}

Pokedex.propTypes = {

}

export default Pokedex
