import React from 'react';
import styled from 'styled-components';
import ThumbOne from "../img/thumbnail.png";
import {Link} from "react-router-dom";



const Container=styled.div`
width:360px;
margin-bottom:45px;
cursor:pointer;
background-color:grey;
`;

const Image=styled.img`
width:100%;
height:202px;
background-color:grey;
`;

const Details=styled.div`
width=100%;
background-color:lightgrey;
margin:10px 10px;
padding: 10px 10px;`;



 const Card = () => {
  return (
    <Link to="/video/test">
    <Container>
        <Image src={ThumbOne} />
        <Details>Financial Guidance 5:00</Details>
      </Container>
    </Link>
  )
}

export default Card