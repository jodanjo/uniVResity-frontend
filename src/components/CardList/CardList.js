import React from 'react'; 
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row, Col } from 'reactstrap';
import CardView from '../CardView/CardView';

const CardList = ({ robots }) => {
	return (
		<div>
			{robots.map((user, i) => {
			return (
		<CardView 
			key= {i}
			id={robots[i].id} 
			name={robots[i].name} 
			email={robots[i].email}
		/>
		);
	})}

		</div>
	);
}

export default CardList;