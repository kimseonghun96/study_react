/* eslint-disable */ // 에러메세지 사라지게 하는 거임

import './App.css';
import {Navbar, Container, Nav} from 'react-bootstrap';
import {useState} from "react";
import data from './data.js'; // 경로는 ./로 시작한다.
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routers/Detail.js'
import axios from 'axios'




function App() {

  let [shoes, setShoes] = useState(data)
  let navigator = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick = {() => {navigator('/')}}>Home</Nav.Link>
            <Nav.Link onClick = {() => {navigator('./detail')}}>Detail</Nav.Link>
            <Nav.Link onClick = {() => {navigator('./about')}}>about</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={ 
          <>
            <div className="main-bg"></div>
            <div className="container">
              <div className="row">
                { shoes.map((a, i)=>{
                  return <Card shoes={shoes[i]} i={i} ></Card>
                })}
            </div>
          </div> 
          <button onClick = {() => {
            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((결과)=>{
              console.log(결과.data)
              let copy = [...shoes, ...결과.data];
              setShoes(copy);
            })
            .catch(() => {
              console.log('실패함 ㅠ')
            })

            

          }}> 더보기 </button>
          </>
        }/> 
        
        <Route path="/detail/:id" element={<Detail shoes={shoes} />}/>
      

        <Route path="/*" element={<div>없는페이지다</div>}/>
        
        <Route path = "/about" element = {<About/>}>
          <Route path = "member" element = {<div>맴버임</div>} /> 
          <Route path = "location" element = {<div>위치정보임</div>} />
        </Route>
      </Routes>
    </div>
  );
}

function About() {
  return(
    <div>
      <h4> 회사 정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}




  function Card(props) {
    return(
    <div className='col-md-4'>
    <img src={"https://codingapple1.github.io/shop/shoes"+ (props.i+1) + ".jpg"} width="80"/>
    <h5>{props.shoes.title}</h5>
    <p>{props.shoes.price}</p>
  </div>
    )
  }




export default App;
