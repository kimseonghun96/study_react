import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Nav } from 'react-bootstrap'


function Detail (props) {  


	let {id} = useParams();
	let 찾은상품 = props.shoes.find(x => x.id ==id);
	let [count, setCount] = useState(0)
	let [alert, setAlert] = useState(true)
	let [탭, 탭변경] = useState(0)

	useEffect(() => {
		let a =setTimeout(() => {setAlert(false)}, 2000)
		console.log(2)
		return () => {
			console.log(1)
			clearTimeout(a)
		}
	}, [])

	return(
		<div className="container">
			{
				alert == true
				?	<div className = "alert alert-warning">
					 2초 이내 구매시 할인
					</div>
					: null
			}

			<div className="row">
				<div className="col-md-6">
					<img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
			</div>
			<div className="col-md-6">
					<h4 className="pt-5">{props.shoes[id].title}</h4>
					<p>{props.shoes[id].content}</p>
					<p>{props.shoes[id].price}</p>
					<button className="btn btn-danger">주문하기</button> 
				</div>
			</div>

		<Nav variant="tabs"  defaultActiveKey="link0">
			<Nav.Item>
				<Nav.Link onClick={()=>{ 탭변경(0) }} eventKey="link0">버튼0</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link onClick={()=>{ 탭변경(1) }} eventKey="link1">버튼1</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link onClick={()=>{ 탭변경(2) }} eventKey="link2">버튼2</Nav.Link>
			</Nav.Item>
		</Nav>
		<TabContent 탭 = {탭}/>
		</div> 
	)
}

function TabContent(props){
  if (props.탭 === 0){
    return <div>내용0</div>
  }
  if (props.탭 === 1){
    return <div>내용1</div>
  }
  if (props.탭 === 2){
    return <div>내용2</div>
  }
}

// function TabContent(props){
//   return [ <div>내용0</div>, <div>내용1</div>, <div>내용2</div> ][props.탭]
// }


export default Detail;