import React from 'react';
import {
  NavbarWrapper,
  NavBlock,
  NavBlockLink,
  NavContent,
  NavItem,
  NavList,
  NavLogo,
  NavLogoImg,
  NavLogoWrapper,
  Navlink,
  DropDownBlock,
  DropDownList,
  DropDownItem,
  DropDownLink,
  // LangBox,
  NavSelect,
  SmallScreen,
  SmallList,
  SmallItem,
  SmallLink,
  SmallScreenOverlay,
  SmallBtns,
  SmallBtn,
} from './navbarStyles';
import {Container} from './../../data/styles';
import images from './../../data/images';
import {RiWhatsappFill, RiTelegramFill} from 'react-icons/ri';
import {FiChevronDown} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import Button from '../UI/Button/Button';
import {useState} from 'react';
import {AiOutlineMenu, AiFillCloseCircle} from 'react-icons/ai';
import {RiHome8Fill} from 'react-icons/ri';
import {MdHelp} from 'react-icons/md';
import {BsFillGrid1X2Fill} from 'react-icons/bs';
import {FaHandsHelping} from 'react-icons/fa';
const Navbar = () => {
  const [show, setShow] = useState (false);
  const [toggle, setToggle] = useState (false);

  const Show = () => {
    setShow (prevState => !prevState);
  };

  return (
    <NavbarWrapper>
      <Container>
        <NavContent>
          <NavLogoWrapper>
            <NavLogo as={Link} to="/">
              <NavLogoImg src={images.logo} alt="" />
              <span>
                DiscountsOnServices
              </span>
            </NavLogo>
          </NavLogoWrapper>
          <NavList>
            <NavItem>
              <Navlink onClick={() => Show ()} className={show ? 'active' : ''}>
                Subscriptions
                <FiChevronDown />
              </Navlink>
              <DropDownBlock className={show ? 'active' : ''}>
                <DropDownList>
                  <DropDownItem>
                    <DropDownLink as={Link} to="/netflix">Netflix</DropDownLink>
                  </DropDownItem>
                  <DropDownItem>
                    <DropDownLink as={Link} to="/youtube">
                      YouTube Premium
                    </DropDownLink>
                  </DropDownItem>
                  <DropDownItem>
                    <DropDownLink as={Link} to="/spotify">Spotify</DropDownLink>
                  </DropDownItem>
                </DropDownList>
              </DropDownBlock>
            </NavItem>
            <NavItem>
              <Navlink as={Link} to="/faq">
                FAQ
              </Navlink>
            </NavItem>
            <NavItem>
              <Navlink as={Link} to="/">
                Support
              </Navlink>
            </NavItem>
            <NavItem>
              <Navlink as={Link} to="/">
                About
              </Navlink>
            </NavItem>
          </NavList>
          <NavBlock>
            <NavBlockLink href="/">
              <RiWhatsappFill />
            </NavBlockLink>
            <NavBlockLink href="/">
              <RiTelegramFill />
            </NavBlockLink>
            <NavSelect>
              <option value="">English</option>
              <option value="">Uzbek</option>
              <option value="">Russian</option>
            </NavSelect>
            <Button>Log in</Button>
          </NavBlock>
          <SmallScreen>
            <AiOutlineMenu
              className="menu-btn"
              onClick={() => setToggle (true)}
            />
            {toggle &&
              <SmallScreenOverlay>
                <AiFillCloseCircle
                  className="menu-btn close"
                  onClick={() => setToggle (false)}
                />
                <SmallList>
                  <SmallItem as={Link} to="/">
                    <RiHome8Fill /><SmallLink>Home</SmallLink>
                  </SmallItem>
                  <SmallItem as={Link} to="*">
                    <BsFillGrid1X2Fill />
                    <SmallLink>About</SmallLink>
                  </SmallItem>
                  <SmallItem as={Link} to="/faq">
                    <MdHelp /><SmallLink>FAQ</SmallLink>
                  </SmallItem>
                  <SmallItem as={Link} to="/">
                    <FaHandsHelping />
                    <SmallLink>Support</SmallLink>
                  </SmallItem>
                </SmallList>
                <SmallList>
                  <SmallItem as={Link} to="/netflix">
                    <SmallLink>Netflix</SmallLink>
                  </SmallItem>
                  <SmallItem as={Link} to="/youtube">
                    <SmallLink>YouTube</SmallLink>
                  </SmallItem>
                  <SmallItem as={Link} to="/spotify">
                    <SmallLink>Spotify</SmallLink>
                  </SmallItem>
                </SmallList>
                <SmallBtns>
                  <SmallBtn as={Button} to="/">Login</SmallBtn>
                  <SmallBtn as={Button} to="/">Sign up</SmallBtn>
                </SmallBtns>

              </SmallScreenOverlay>}
          </SmallScreen>
        </NavContent>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
