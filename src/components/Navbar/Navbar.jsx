import React from "react";
import {
  NavbarWrapper,
  NavBlock,
  NavBlockLink,
  NavContent,
  NavItem,
  NavList,
  NavLogo,
} from "./navbarStyles";
import { Container } from "./../../data/styles";
import images from "./../../data/images";
import { RiWhatsappFill, RiTelegramFill } from "react-icons/ri";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import Button from "../UI/Button/Button";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Container>
        <NavContent>
          <NavLogo href="/">
            <img src={images.logo} alt="" />
            DiscountsOnServices
          </NavLogo>
          <NavList>
            <NavItem>
              <Link to="/" className="nav-link">
                Subscriptions
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/faq" className="nav-link">
                FAQ
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/" className="nav-link">
                Support
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/" className="nav-link">
                About
              </Link>
            </NavItem>
          </NavList>
          <NavBlock>
            <NavBlockLink>
              <RiWhatsappFill />
            </NavBlockLink>
            <NavBlockLink>
              <RiTelegramFill />
            </NavBlockLink>
            <NavBlockLink>
              EN
              <FiChevronDown />
            </NavBlockLink>
            <Button>Log in</Button>
          </NavBlock>
        </NavContent>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
