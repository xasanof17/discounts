import React from 'react';
import {
  InviteBox,
  InviteBoxBtn,
  InviteBoxlink,
  InviteBoxText,
  InviteLeft,
  InviteRight,
  InviteTitle,
  InviteTxt,
  InviteWrapper,
} from './inviteStyles';
import {MdOutlineContentCopy} from 'react-icons/md';
import {BsFillCheckCircleFill} from 'react-icons/bs';

const Invite = () => {
  return (
    <InviteWrapper>
      <InviteLeft>
        <InviteTitle>Invite friends</InviteTitle>
        <InviteTxt>
          Starting today up to 50% for NETFLIX, YOUTUBE, SPOTIFY subscriptions with a secure payment from PAYPAL
        </InviteTxt>
      </InviteLeft>
      <InviteRight>
        <InviteBox>
          <InviteBoxText>Click on the link</InviteBoxText>
          <div className="bottom">
            <InviteBoxlink href="/" target="_blank">
              Discounts On Services
            </InviteBoxlink>
            <InviteBoxBtn>
              <MdOutlineContentCopy />
              {/* <BsFillCheckCircleFill /> */}
            </InviteBoxBtn>
          </div>
        </InviteBox>
      </InviteRight>
    </InviteWrapper>
  );
};

export default Invite;
