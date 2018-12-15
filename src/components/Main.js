import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

const Repair = styled.div`
	font-weight: 700;
	line-height: 50px;
	font-size: 40px;
	color: #FFFFFF;

	span {
		display: block;
		font-size: 24px;
		line-height: 30px;
	}
`

const LightText = styled.div`
	font-weight: 300;
	line-height: 28px;
	font-size: 18px;
	color: #FFFFFF;
	margin-top: 54px;
`

const CallBtn = styled.button`
	width: 247px;
	height: 67px;
	border-radius: 30px;
	background-color: #FFA14B;
	font-weight: 400;
	line-height: 24px;
	font-size: 18px;
	color: #FFFFFF;
	margin-top: 32px;
	outline: none;
	border-width: 0;
	padding: 0
`

class Main extends React.Component {
	render(){
		return (
			<Row>
				<Col lg={5}>
					<Repair>Качественный ремонт
					<span>iphone за 35 минут и гарантия 1 год</span>
					</Repair>
					<LightText>Оставьте заявку на бесплатную диагностику без очереди, и получите защитное стекло, стоимостью 1000 рублей, с установкой в подарок!
					</LightText>
					<CallBtn>Отправить заявку!</CallBtn>
				</Col>
				<Col lg={6} lgOffset={1}></Col>
			</Row>
		)
	}
}

export default Main