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
  NetflixCards,
  NetflixWrapper,
  CardButton,
  CardBtn,
} from './netflixStyles';
import {HeaderTop, ContentBtns} from '../../components/content';
import {BsFillCheckCircleFill} from 'react-icons/bs';
import Button from '../../components/UI/Button/Button';
import BlackButton from './../../components/UI/BlackButton/BlackButton';
const Netflix = () => {
  return (
    <NetflixWrapper>
      <Container>
        <HeaderTop
          title="Choose a Netflix Plan"
          text="Listen without limits at a bargain price"
        />
        <ContentBtns active1="active" />
        <NetflixCards>
          <Cart>
            <CardTop>
              <CardTopTxt>Basic</CardTopTxt>
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
                  <BsFillCheckCircleFill />Play anywhere - even offline
                </CardBodyListItem>
              </CardBodyList>
            </CardBody>
            <CardPriceDiv>
              <CardDolor>$</CardDolor><CardDolorText>45</CardDolorText>
            </CardPriceDiv>
            <CardButton>
              <CardBtn as={BlackButton}>Get Started</CardBtn>
            </CardButton>
          </Cart>
          <Cart>
            <CardTop>
              <CardTopTxt>Standart</CardTopTxt>
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
              <CardDolor>$</CardDolor><CardDolorText>60</CardDolorText>
            </CardPriceDiv>
            <CardButton>
              <CardBtn as={Button}>Get Started</CardBtn>
            </CardButton>
          </Cart>
          <Cart>
            <CardTop>
              <CardTopTxt>Premium</CardTopTxt>
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
              <CardDolor>$</CardDolor><CardDolorText>45</CardDolorText>
            </CardPriceDiv>
            <CardButton>
              <CardBtn as={BlackButton}>Get Started</CardBtn>
            </CardButton>
          </Cart>
        </NetflixCards>

        <Invite />

        <Faq />
      </Container>
    </NetflixWrapper>
  );
};

export default Netflix;
