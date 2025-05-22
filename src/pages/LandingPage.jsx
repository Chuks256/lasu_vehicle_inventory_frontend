import React from 'react';
import styled from 'styled-components';
import bdDrop from "../assets/bdDrop.png"
import lasulogo from "../assets/lasulogo.png"
import lagos_traffic from "../assets/lagos_traffic.png"
import lasu_img from "../assets/lasu_img.png"
import { Link } from 'react-router-dom';

const Container = styled.div`  
font-family: 'Inter', sans-serif;
  background-color: #e5fbe1;
  color: #031d00;
`;

const Logo=styled.img`
width:50px;
`;


const NavParent=styled.div`
display:flex;
justify-content:center;
`;

const NavSub=styled.div`
display:flex;
margin-left:-40px;
`;


const NavModal = styled.div`
padding:20px;
background:#031d00;
display:flex;
justify-content:center;
align-items:center;
width:300px;
border-radius:100px;
font-size:14px;
`;

const NavItems = styled.li`
`;

const Navbar = styled.div`
//   background: linear-gradient(to bottom, rgba(0,0,0,0.8), transparent);
  padding: 40px;
  display: flex;
  justify-content:center;
  flex-direction: column;
  align-items: center;
  position: absolute;
  gap:10em;
  z-index: 10;

  @media(min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type:none;
  color:#e5fbe1;
  align-items:center;
  gap:4em;
  @media(min-width: 768px) {
    margin: 0;
  }
`;

const Button = styled.button`
  background-color: #001e00;
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    opacity: 0.9;
  }
`;

const Hero = styled.section`
  height: 100vh;
  background: url('/path-to-lasu-gate-image.jpg') center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 1rem;
  position: relative;
`;

const HeroTxt=styled.div`
display:flex;
flex-direction:column;
`;

const Overlay = styled.div`
  background-color: rgba(0,0,0,0.4);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-position:center;
  background-image:url(${bdDrop});
  background-size:cover;
  background-repeat:no-repeat;
`;

const HeroContent = styled.div`
  position: relative;
  color: white;
  z-index: 2;
  padding: 1rem;
`;

const Section = styled.section`
  padding: 4rem 1rem;
  display:flex;
  flex-direction:column;
  gap:4em;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;

  @media(min-width: 768px) {
    font-size: 2rem;
  }
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media(min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const Card = styled.div`
  flex: 1;
  max-width: 500px;
  text-align: left;
  margin: 0 auto;
`;

const CardImage = styled.img`
  width: 75%;
  border-radius: 12px;
  margin-bottom: 1rem;
`;

const Footer = styled.footer`
  background-color: #001e00;
  color: white;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media(min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`;

const FooterContainer = styled.div`
display:flex;
padding:10xp;
flex-direction:column;
margin-left:50px;
`;

const LandingPage = () => {
  return (
    <Container>
        <NavParent>
               <Navbar>
        <Logo src={lasulogo} alt="LASUVIS Logo" />
        <NavModal>
            <NavSub>
                <NavLinks>
          <NavItems><a href="#">Home</a></NavItems>
          <NavItems><a href="#">About</a></NavItems>
          <NavItems><a href="#">News</a></NavItems>
        </NavLinks>
            </NavSub>
        </NavModal>
        <Link to="/sign-in">
             <Button style={{ backgroundColor: '#adff2f', color: '#000' }}>Sign-in </Button>
        </Link>
       </Navbar>
        </NavParent>

      <Hero>
        <Overlay />
        <HeroContent>
            <HeroTxt>
        <h1 style={{ fontSize: '4rem' }}>Building An Organized<br />Vehicle Inventory System</h1>
          <p  style={{fontSize: '1.6rem', marginTop:'-30px'}}>A vehicle Inventory system built by Lasu for Lasu</p>
            </HeroTxt>
             <div style={{ marginTop: '1rem' }}>
            <Button>Get Started</Button>
            <Link to="/sign-in">
            
                <Button style={{ marginLeft: '1rem', backgroundColor: 'transparent', border: '1px solid white' }}>Sign in</Button>
            </Link>
             </div>
        </HeroContent>
      </Hero>

      <Section>
        <SectionTitle>Building An Organized Vehicle Inventory System</SectionTitle>
        <FlexRow>
          <Card>
            <CardImage src={lasu_img} alt="Campus" />
            <h3>Become part of a secured and connected System</h3>
            <p>
              Streamline your vehicle records with confidence. Our platform ensures your data is safe and organized empowering dealerships, and individuals with a smarter way to manage vehicle inventories.
            </p>
          </Card>
          <Card>
            <CardImage src={lagos_traffic} alt="Lagos Traffic" />
            <h3>Be Part of Something greater</h3>
            <p>
              Join a community that’s transforming vehicle management. By connecting to our intelligent system, you're not just organizing inventory, you're driving innovation across the automotive ecosystem.
            </p>
          </Card>
        </FlexRow>
      </Section>

      <Footer>
        <FooterContainer>
<Logo src={lasulogo} alt="LASUVIS Logo" />
          <p>Built by lasu for lasu</p>
        </FooterContainer>
      </Footer>
    </Container>
  );
};

export default LandingPage;
