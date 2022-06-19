import React from 'react';
import {Title, TitleBox, Txt, TxtSpan} from './HeaderContentStyles';

const HeaderContent = ({title, text, span}) => {
  return (
    <TitleBox>
      <Title>{title}</Title>
      <Txt>{text} <TxtSpan>{span}</TxtSpan></Txt>
    </TitleBox>
  );
};

export default HeaderContent;
