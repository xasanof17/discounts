import React from 'react';
import {FaqAccordion, FaqAccTitle, FaqBottom, FaqBottomTxt, FaqBtn, FaqButton, FaqContent, FaqSec, FaqTitle, FaqTop} from './faqStyles';
import {HiChevronDown} from 'react-icons/hi';
import BlackButton from '../UI/BlackButton/BlackButton';

const Faq = () => {
    const [show, setShow] = React.useState(false)
    const Show = () =>{
        setTimeout(() => {
            setShow((prevState) => !prevState);
        }, 200);
    }
  return (
    <FaqSec>
      <FaqTitle>faq</FaqTitle>
      <FaqContent>
        <FaqAccordion>
          <FaqTop>
          <FaqAccTitle>The set time has passed, but the invoice has not yet arrived, what should I do?</FaqAccTitle>
          <FaqBtn onClick={Show} className={show? 'active' : ''}><HiChevronDown /></FaqBtn>
          </FaqTop>
          <FaqBottom className={show? 'active' : ''}>
          <FaqBottomTxt>The set time has passed, but the invoice has not yet arrived, what should I do?</FaqBottomTxt>
          </FaqBottom>
        </FaqAccordion>
        <FaqAccordion>
          <FaqTop>
          <FaqAccTitle>Can I change my Netflix account email and password after purchase?</FaqAccTitle>
          <FaqBtn onClick={Show} className={show? 'active' : ''}><HiChevronDown /></FaqBtn>
          </FaqTop>
          <FaqBottom className={show? 'active' : ''}>
          <FaqBottomTxt>Can I change my Netflix account email and password after purchase?</FaqBottomTxt>
          </FaqBottom>
        </FaqAccordion>
        <FaqAccordion>
          <FaqTop>
          <FaqAccTitle>Can I add a phone number for password recovery?</FaqAccTitle>
          <FaqBtn onClick={Show} className={show? 'active' : ''}><HiChevronDown /></FaqBtn>
          </FaqTop>
          <FaqBottom className={show? 'active' : ''}>
          <FaqBottomTxt>Can I add a phone number for password recovery?</FaqBottomTxt>
          </FaqBottom>
        </FaqAccordion>
        <FaqAccordion>
          <FaqTop>
          <FaqAccTitle>How soon will I receive the account information I ordered?</FaqAccTitle>
          <FaqBtn onClick={Show} className={show? 'active' : ''}><HiChevronDown /></FaqBtn>
          </FaqTop>
          <FaqBottom className={show? 'active' : ''}>
          <FaqBottomTxt>How soon will I receive the account information I ordered?</FaqBottomTxt>
          </FaqBottom>
        </FaqAccordion>
        <FaqAccordion>
          <FaqTop>
          <FaqAccTitle>How to pay?</FaqAccTitle>
          <FaqBtn onClick={Show} className={show? 'active' : ''}><HiChevronDown /></FaqBtn>
          </FaqTop>
          <FaqBottom className={show? 'active' : ''}>
          <FaqBottomTxt>Payment options we currently have: PayPal, Bitcoin.</FaqBottomTxt>
          </FaqBottom>
        </FaqAccordion>
      </FaqContent>
      <FaqButton>
      <BlackButton>Support</BlackButton>
      </FaqButton>
    </FaqSec>
  );
};

export default Faq;
