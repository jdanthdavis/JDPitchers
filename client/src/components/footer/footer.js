import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  HolderLink,
  HeadingLink
} from "./footerStyles";
  
const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>
              <HeadingLink href="/about">About Us</HeadingLink>
            </Heading>
          </Column>
          <Column>
            <Heading>Social Medi
                <HolderLink href="/auth">
                    a
                </HolderLink>
            </Heading>
            <FooterLink href="https://www.instagram.com/jdpitchers" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="mailto:jdpitchers@gmail.com">
              <i className="fab fa-gmail">
                <span style={{ marginLeft: "10px" }}>
                  Email Us
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;