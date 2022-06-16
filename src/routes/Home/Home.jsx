import React from 'react';
import WhiteButton from '../../components/UI/WhiteButton/WhiteButton';
import images from '../../data/images';
import {Container} from '../../data/styles';
import Button from '../../components/UI/Button/Button';
import {
  HomeAbout,
  HomeAboutBox,
  HomeAboutLeft,
  HomeAboutLeftImg,
  HomeAboutLeftText,
  HomeAboutRight,
  HomeAboutRightImg,
  HomeAboutTitle,
  HomeCard,
  HomeCardLeft,
  HomeCardRight,
  HomeCardRightImg,
  HomeCards,
  HomeCardsTitle,
  HomeCardTitle,
  HomeCardTxt,
  HomeContent,
  HomeImg,
  HomeLeft,
  HomeLeftText,
  HomeRight,
  HomeTitle,
  HomeTxt,
  HomeWorkCard,
  HomeWorkCardImg,
  HomeWorkCardTitle,
  HomeWorkCardTxt,
  HomeWorks,
  HomeWorksContent,
  HomeWorkTitle,
  HomeWrapper,
} from './homeStyles';
import {Faq, Invite,Request} from '../../components';
// Buttonga useNavigate ishlatip yo'lni o'zgartiramiz!! youtubda bor

const Home = () => {
  return (
    <HomeWrapper>
      <Container>
        <HomeContent>
          <HomeLeft>
            <HomeTitle>
              Start enjoying a benefit
              of up to 50%
            </HomeTitle>
            <HomeTxt>
              You have always wanted to get the same product at a special price for you, without haggling - and it is yours.
            </HomeTxt>
            <WhiteButton>Start using</WhiteButton>
          </HomeLeft>
          <HomeRight><HomeImg src={images.header} /></HomeRight>
        </HomeContent>
        <HomeCards>
          <HomeCardsTitle>
            Choose a subscription
          </HomeCardsTitle>
          <HomeCard>
            <HomeCardLeft>
              <HomeCardTitle>
                Netflix subscription rates
              </HomeCardTitle>
              <HomeCardTxt>
                The constant contributes to the task of the same and thus the intended features and the set relation to the check and set also.
              </HomeCardTxt>
              <Button>Learn more</Button>
            </HomeCardLeft>
            <HomeCardRight>
              <HomeCardRightImg
                className="netflix"
                src={images.netflixlogo}
                alt="netflix"
              />
            </HomeCardRight>
          </HomeCard>
          <HomeCard>
            <HomeCardLeft>
              <HomeCardTitle>
                Spotify Premium
              </HomeCardTitle>
              <HomeCardTxt>
                The constant contributes to the task of the same and thus the intended features and the set relation to the check and set also.
              </HomeCardTxt>
              <Button>Learn more</Button>
            </HomeCardLeft>
            <HomeCardRight className="spotify">
              <HomeCardRightImg
                className="spotify"
                src={images.spotifylogo}
                alt="netflix"
              />
            </HomeCardRight>
          </HomeCard>
          <HomeCard>
            <HomeCardLeft>
              <HomeCardTitle>
                YouTube Premium
              </HomeCardTitle>
              <HomeCardTxt>
                The constant contributes to the task of the same and thus the intended features and the set relation to the check and set also.
              </HomeCardTxt>
              <Button>Learn more</Button>
            </HomeCardLeft>
            <HomeCardRight className="youtube">
              <HomeCardRightImg
                className="youtube"
                src={images.youtubelogo}
                alt="netflix"
              />
            </HomeCardRight>
          </HomeCard>
        </HomeCards>
        <HomeWorks>
          <HomeWorkTitle>How it works?</HomeWorkTitle>
          <HomeWorksContent>
            <HomeWorkCard>
              <HomeWorkCardImg src={images.step1} />
              <HomeWorkCardTitle>Step 1</HomeWorkCardTitle>
              <HomeWorkCardTxt>Enter your account information</HomeWorkCardTxt>
            </HomeWorkCard>
            <HomeWorkCard>
              <HomeWorkCardImg src={images.step2} />
              <HomeWorkCardTitle>Step 2</HomeWorkCardTitle>
              <HomeWorkCardTxt>
                Select the desired subscription and plan
              </HomeWorkCardTxt>
            </HomeWorkCard>
            <HomeWorkCard>
              <HomeWorkCardImg src={images.step3} />
              <HomeWorkCardTitle>Step 3</HomeWorkCardTitle>
              <HomeWorkCardTxt>Pay your bill with PayPal</HomeWorkCardTxt>
            </HomeWorkCard>
          </HomeWorksContent>
        </HomeWorks>
        <Invite />
        <HomeAbout>
          <HomeAboutTitle>About us</HomeAboutTitle>
          <HomeAboutBox>
            <HomeAboutLeft>
              <HomeAboutLeftImg src={images.logo} alt="logo" />
              <HomeAboutLeftText>
                We offer you a subscription to various media services at the best price.
              </HomeAboutLeftText>
              <HomeAboutLeftText className='first'>
                We have partnered with several companies to help you find the best prices for your media subscriptions and provide you with the best prices for the Premium subscriptions you want.
              </HomeAboutLeftText>
              <HomeLeftText>It's simple, fast and economical.</HomeLeftText>
            </HomeAboutLeft>
            <HomeAboutRight>
              <HomeAboutRightImg src={images.about} alt="girl" />
            </HomeAboutRight>
          </HomeAboutBox>
        </HomeAbout>
        <Faq />
        <Request />
      </Container>
    </HomeWrapper>
  );
};

export default Home;
