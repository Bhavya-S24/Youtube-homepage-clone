import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import {Link} from "react-router-dom";

const Container=styled.div`
position:sticky;
top:0; 
height:60px;
background-color:lightgrey;
 `;

const Wrapper=styled.div`
display:flex;
align-items:center;
padding: 10px 20px; 
justify-content:flex-end ; 
position:relative ;`; // parent is relative so that child position can be absolute.//

const Search=styled.div`
position:absolute;
width:40%;
left:0px;
right:0px;
margin:auto;
background-color:white;
align-items:center;
display:flex;
justify-content:space-between;
pading:5px;
border: 1px solid lightgrey;
border-radious:3px;

`;

const Input=styled.input`
border:none; `;

const button=styled.button`
curson:pointer; 
border: 10px solid black;
position:absolute;
left: 400px;
background-color:blue ; `;


export const Navbar = () => {
  return (
    <Container>
     <Wrapper>
      
      <Search> 
      <Input placeholder='Search' />
      <SearchIcon />
      </Search>

      <Link to="/signin/abc">
      <button>SignUp</button>
      </Link>

     </Wrapper>
    </Container>
  )
}
export default Navbar