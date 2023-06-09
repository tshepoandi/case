import React from "react";
import { Logo, NavItem, NavMenu, NavMenuList, HeadlineText, SocialMediaIcons, SocialIconList, HeadingDiv, HeadingContainer } from "./Styles/stylecomponents";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

function BasicGrid() {
  return (
    <HeadingContainer>
      <HeadingDiv>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Logo>
                <HeadlineText>CaseTheCulture</HeadlineText>
              </Logo>
            </Grid>
            <Grid item xs={4}>
              <SocialIconList>
                <SocialMediaIcons> <Facebook style={{ color: "white", fontSize: "2em", paddingRight: "20px" }} /> </SocialMediaIcons>
                <SocialMediaIcons>  <Twitter style={{ color: "white", fontSize: "2em", paddingRight: "20px" }} /> </SocialMediaIcons>
                <SocialMediaIcons> <Instagram style={{ color: "white", fontSize: "2em", paddingRight: "20px" }} /> </SocialMediaIcons>
              </SocialIconList>
            </Grid>
          </Grid>
        </Box>
      </HeadingDiv>
    </HeadingContainer>

  );
}

function Nav() {
  return (
    <header>
      <BasicGrid />

      <NavMenu>
        <NavMenuList>
          <NavItem>Home</NavItem>
          <NavItem>Features</NavItem>
          <NavItem>Interviews</NavItem>
          <NavItem>Reviews</NavItem>
          <NavItem>Events</NavItem>
          <NavItem>Contact</NavItem>
        </NavMenuList>
      </NavMenu>
    </header>
  );
}

export default Nav;
