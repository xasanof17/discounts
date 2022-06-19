import React from 'react'
import { Link } from 'react-router-dom'
import images from '../../data/images'
import { Container } from '../../data/styles'
import { FooterBlock, FooterBlockFr, FooterBlockLink, FooterBottom, FooterBottomLink, FooterBottomTxt, FooterContent, FooterInner, FooterList, FooterListItem, FooterListItemLink, FooterLogo, FooterLogoImg, FooterTitle, FooterTxt, FooterWrapper } from './footerStyles';
import { RiWhatsappFill, RiTelegramFill } from 'react-icons/ri';
import { FiChevronDown } from 'react-icons/fi';

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterContent>
          <FooterInner>
            <FooterLogo as={Link} to='/'>
              <FooterLogoImg src={images.footerLogo} alt='logo' />
              <span>DiscountsOnServices</span>
            </FooterLogo>
            <FooterTxt>It's simple, fast and economical</FooterTxt>
          </FooterInner>
          <FooterInner>
            <FooterTitle>Subscriptions</FooterTitle>
            <FooterList>
              <FooterListItem><FooterListItemLink as={Link} to='netflix'>Netflix</FooterListItemLink></FooterListItem>
              <FooterListItem><FooterListItemLink as={Link} to='youtube'>YouTube Premium</FooterListItemLink></FooterListItem>
              <FooterListItem><FooterListItemLink as={Link} to='spotify'>Spotify</FooterListItemLink></FooterListItem>
            </FooterList>
          </FooterInner>
          <FooterInner>
            <FooterTitle>Site navigation</FooterTitle>
            <FooterList>
              <FooterListItem>
                <FooterListItemLink as={Link} to='/about'>
                  About
                </FooterListItemLink>
              </FooterListItem>
              <FooterListItem>
                <FooterListItemLink as={Link} to='/faq'>
                  FAQ
                </FooterListItemLink>
              </FooterListItem>
              <FooterListItem>
                <FooterListItemLink as={Link} to='/faq'>
                  Support
                </FooterListItemLink>
              </FooterListItem>
            </FooterList>
          </FooterInner>
          <FooterInner>
            <FooterBlock>
              <FooterBlockFr>
                <FooterBlockLink><RiWhatsappFill /></FooterBlockLink>
                <FooterBlockLink><RiTelegramFill /></FooterBlockLink>
              </FooterBlockFr>
              <FooterBlockLink>En <FiChevronDown className='down'/></FooterBlockLink>
            </FooterBlock>
          </FooterInner>
        </FooterContent>
        <FooterBottom>
        <FooterBottomLink>Privacy Policy</FooterBottomLink>
        <FooterBottomTxt>Copyright 2022 &copy; All Rights Reserved</FooterBottomTxt>
        <FooterBottomTxt>Developed by Javohir</FooterBottomTxt>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  )
}

export default Footer