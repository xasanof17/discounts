import React from 'react';
import {Container} from '../../data/styles';
import {Faq, Invite} from '../../components';
import {
  Cart,
  CardTop,
  CardTopTxt,
  CardBody,
  CardBodyList,
  CardBodyListItem,
  CardPriceDiv,
  CardDolor,
  CardDolorText,
  CardButton,
  CardBtn,
  SpotifyWrapper,
  SpotifyCards,
} from './spotifyStyles';
import {HeaderTop, ContentBtns} from '../../components/content';
import {BsFillCheckCircleFill} from 'react-icons/bs';
import Button from '../../components/UI/Button/Button';
import BlackButton from './../../components/UI/BlackButton/BlackButton';
const Spotify = () => {
  return (
    <SpotifyWrapper>
      <Container>
        <HeaderTop
          title="Choose a Spotify Plan"
          text="Select the subscription type for a period of "
          span='12 months:'
        />
        <ContentBtns active1="active" />
        <SpotifyCards>
          <Cart>
            <CardTop>
              <CardTopTxt>Individual</CardTopTxt>
            </CardTop>
            <CardBody>
              <CardBodyList>
                <CardBodyListItem>
                  <BsFillCheckCircleFill />Ad-free music listening
                </CardBodyListItem>
                <CardBodyListItem>
                  <BsFillCheckCircleFill />Play anywhere - even offline
                </CardBodyListItem>
                <CardBodyListItem>
                  <BsFillCheckCircleFill />On-demand playback
                </CardBodyListItem>
              </CardBodyList>
            </CardBody>
            <CardPriceDiv>
              <CardDolor>$</CardDolor><CardDolorText>47</CardDolorText>
            </CardPriceDiv>
            <CardButton>
              <CardBtn as={BlackButton}>Get Started</CardBtn>
            </CardButton>
          </Cart>
          <Cart>
            <CardTop>
              <CardTopTxt>Duo</CardTopTxt>
            </CardTop>
            <CardBody>
              <CardBodyList>
                <CardBodyListItem>
                  <BsFillCheckCircleFill />2 Premium accounts for a couple under one roof
                </CardBodyListItem>
                <CardBodyListItem>
                  <BsFillCheckCircleFill />Ad-free music listening, play offline, on-demand playback
                </CardBodyListItem>
              </CardBodyList>
            </CardBody>
            <CardPriceDiv>
              <CardDolor>$</CardDolor><CardDolorText>57</CardDolorText>
            </CardPriceDiv>
            <CardButton>
              <CardBtn as={Button}>Get Started</CardBtn>
            </CardButton>
          </Cart>
          <Cart>
            <CardTop>
              <CardTopTxt>Family</CardTopTxt>
            </CardTop>
            <CardBody>
              <CardBodyList>
                <CardBodyListItem>
                  <BsFillCheckCircleFill />6 Premium accounts for family members living under one roof
                </CardBodyListItem>
                <CardBodyListItem>
                  <BsFillCheckCircleFill />Block explicit music
                </CardBodyListItem>
                <CardBodyListItem>
                  <BsFillCheckCircleFill />Ad-free music listening, play offline, on-demand playback
                </CardBodyListItem>
              </CardBodyList>
            </CardBody>
            <CardPriceDiv>
              <CardDolor>$</CardDolor><CardDolorText>77</CardDolorText>
            </CardPriceDiv>
            <CardButton>
              <CardBtn as={BlackButton}>Get Started</CardBtn>
            </CardButton>
          </Cart>   
        </SpotifyCards>

        <Invite />

        <Faq />
      </Container>
    </SpotifyWrapper>
  );
};

export default Spotify;
