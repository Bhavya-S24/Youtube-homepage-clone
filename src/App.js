import { Component } from "react";
import styled from "styled-components";
import Menu from "./components/Menu"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import { BrowserRouter, Routes ,Route } from "react-router-dom"; 
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Video from "./pages/Video";

//  import './App.css';


const Container= styled.div`
display: flex; 
`;
const Main=styled.div`
flex:7; 
`;

const Wrapper=styled.div``;

function App() {
  return (
    <Container >
      <BrowserRouter> 

      <Menu />
      <Main>
        <Navbar />
        <Wrapper>
          <Routes>

            <Route path="/">

               <Route index element={<Home/>}/>

               <Route path="video">
               <Route path=":id" element={<Video/>} />
               <Route path="signin" element={<SignIn/>} />
               </Route>

            </Route>

          </Routes>
        </Wrapper>
      </Main>
      
      </BrowserRouter>
    </Container>
  );
}

export default App;
