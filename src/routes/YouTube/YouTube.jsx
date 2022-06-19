import React from 'react'
import { HeaderTop } from '../../components/content'
import { Container } from '../../data/styles'
import { YouTubeCards, YouTubeWrapper,  Cart,
  CardTop,
  CardTopTxt,
  CardBody,
  CardBodyList,
  CardBodyListItem,
  CardPriceDiv,
  CardDolor,
  CardDolorText,
  CardButton,
  CardBtn, } from './youtubeStyles'
import {BsFillCheckCircleFill} from 'react-icons/bs';
import Button from '../../components/UI/Button/Button';
import BlackButton from './../../components/UI/BlackButton/BlackButton';
import { Faq, Invite } from '../../components';

const YouTube = () => {
  return (
    <YouTubeWrapper>
      <Container>
      <HeaderTop
          title="YouTube Premium"
          text="Select the subscription type for a period of "
          span=' 12 months:'
        />
        <YouTubeCards>
        <Cart>
            <CardTop>
              <CardTopTxt>Music</CardTopTxt>
            </CardTop>
            <CardBody>
              <CardBodyList>
                <CardBodyListItem>
                  <BsFillCheckCircleFill />Listen to music without ads, in the background and offline
                </CardBodyListItem>
              </CardBodyList> 
            </CardBody>
            <CardPriceDiv>
              <CardDolor>$</CardDolor><CardDolorText>45</CardDolorText>
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
                  <BsFillCheckCircleFill />YouTube and YouTube Music without ads, in the background and offline
                </CardBodyListItem>
              </CardBodyList>
            </CardBody>
            <CardPriceDiv>
              <CardDolor>$</CardDolor><CardDolorText>60</CardDolorText>
            </CardPriceDiv>
            <CardButton>
              <CardBtn as={BlackButton}>Get Started</CardBtn>
            </CardButton>
          </Cart>
        </YouTubeCards>
        
        <Invite/>
        
        <Faq />
      </Container>
    </YouTubeWrapper>
  )
}

export default YouTube