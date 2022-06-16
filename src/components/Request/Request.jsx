import React from 'react';
import {Req, ReqBox, ReqBtn, ReqLeft, ReqRight, ReqTitle, ReqTxt} from './requestStyles';
import WhiteButton from './../UI/WhiteButton/WhiteButton';

const Request = () => {
  return (
    <Req>
      <ReqBox>
        <ReqLeft>
          <ReqTitle>Request for an additional subscription that was not found here</ReqTitle>
          <ReqTxt>Disney, Amazon Prime, Microsoft Office, Microsoft Windows</ReqTxt>
        </ReqLeft>
        <ReqRight><WhiteButton>Request</WhiteButton></ReqRight>
      </ReqBox>
    </Req>
  );
};

export default Request;
