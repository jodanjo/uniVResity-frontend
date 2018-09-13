import React from 'react'; 
import CardView from '../CardView/CardView';

const CardList = ({ streams }) => {
	return (
		<div>
			{streams.map((user, i) => {
			return (
		<CardView 
			key= {i}
			id={streams[i].id} 
			course_title={streams[i].course_title}
			course_description={streams[i].course_description} 
			email={streams[i].email}
		/>
		);
	})}

		</div>
	);
}

export default CardList;