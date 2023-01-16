import './App.css';
import {Navbar, Container, Nav, Card} from 'react-bootstrap';
import {useState} from "react";
import data from './data.js'; // 경로는 ./로 시작한다.



function App() {

let [shoes] = useState(data)

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'></div>

      <div className='container'>
        <div className='row'>
          <Card shoes={shoes}></Card>
          <Card shoes={shoes}></Card>
          <Card shoes={shoes}></Card>
        </div>
      </div>
    </div>
  );
  function Card(props) {
    return(
    <div className='col-md-4'>
    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80"/>
    <h5>{props.shoes[0].title}</h5>
    <p>{props.shoes[0].price}</p>
  </div>
    )
  }

}


export default App;
