import React from 'react';
import {Btn, BtnsWrapper, BtnsWrapperInner} from './contentBtnsStyles';

const ContentBtns = ({active1, active2}) => {
  return (
    <BtnsWrapper>
      <BtnsWrapperInner>
        <Btn className={`${active1}`}>6 months </Btn>
        <Btn className={`${active2}`}>12 months </Btn>
      </BtnsWrapperInner>
    </BtnsWrapper>
  );
};

export default ContentBtns;
