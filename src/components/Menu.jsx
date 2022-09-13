import React from 'react'
import styled from 'styled-components';
import Lamatube from "../img/logo.png"
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import HistoryIcon from '@mui/icons-material/History';
import {Link} from "react-router-dom";

const Container= styled.div`
flex:1;
background-color:black ;
height:600px;
color: white;
font-size:14px;
position:sticky;
top:0;

`;

const Wrapper= styled.div`
flex:1;
padding:20px 28px ;
height:500px;
color: white;
background-color:black;
`;
 
const Logo=styled.div`
display:flex;
align-items:center;
gap:8px;
font-weight:bold;
margin-bottom:25px;
`;

const Img=styled.img`
height:25px;
`;

const Item=styled.div`
align-center:center;
display:flex;
gap:8px;
cursor:pointer;
margin-bottom:5px;
 `;

const Hr=styled.div`
border:0.5px solid grey;
margin: 15px 0px;`;

const button=styled.button`
curson:pointer; `;

 const Menu = () => {

  return (
    <Container>
<Wrapper>
    <Logo>
        <Img src={Lamatube} />
       LamaTube
    </Logo>
    <Item>
      <HomeIcon />
      Home
    </Item>

    <Item>
      <ExploreIcon />
      Explore
    </Item>

    <Item>
      <SubscriptionsIcon />
      Subscriptions
    </Item>

    <Item>
      <HistoryIcon />
      History
    </Item>

    <Hr />

<p>Sign in to like,share and subscribe videos!</p>
<Link to="signin">
<button>SignIn</button>
</Link>

<Hr />

</Wrapper>
    </Container>
  )
}
export default Menu
