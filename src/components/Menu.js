import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

const Repair = styled.div`
	font-weight: 300;
	line-height: 22px;
	font-size: 18px;
	color: #464646;
`

const WorkTime = styled.div`
	font-weight: 300;
	line-height: 24px;
	font-size: 12px;
	color: #2A2A2A;

	span {
		display: block;
		font-weight: 700;
		line-height: 24px;
		font-size: 21px;
		color: #464646;
	}
`

const Calls = styled.div`
	font-weight: 300;
	line-height: 24px;
	font-size: 12px;
	color: #2A2A2A;

	span {
		display: block;
		font-weight: 700;
		line-height: 24px;
		font-size: 21px;
		color: #464646;
	}
`

const CallButton = styled.button`
	width: 176px;
	height: 48px;
	background-color: #3FC7DB;
	border-radius: 30px;
	font-weight: 400;
	font-size: 14px;
	text-align: center;
	color: #FFFFFF;
	border: 0;
	padding: 0;
`

class Adress extends React.Component {
	render() {
		return (
			<span>{this.props.addr} </span>
		)
	}
}

class TelNumber extends React.Component {
	render() {
		return (
			<span>{this.props.tel} </span>
		)
	}
}

class Menu extends React.Component {
	render() {
		return (
			<Row>
				<Col lg={3}>
					<Repair>Ремонт айфонов в сервисном центре и на выезде</Repair>
				</Col>
				<Col lg={3} lgOfset={1}>
					<WorkTime>Пн-пт с 10 до 20, сб, вс с 11 до 18</WorkTime>
						<Adress addr="Ленинская 301"/>
				</Col>
				<Col lg={3}>
					<Calls>Звонки принимаются 24 часа
					<TelNumber tel="8 (846) 922 55 44"/>
					</Calls>
				</Col>
				<Col lg={2}>
					<CallButton>Заказать звонок!</CallButton>
				</Col>
			</Row>
		)
	}
}

export default Menu