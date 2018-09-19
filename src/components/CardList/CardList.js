import React from 'react'; 
import CardView from '../CardView/CardView';

const CardList = ({ streams }) => {
	return (
		<div>
			<div style={{textAlign:'left', paddingLeft:'20px', paddingRight:'20px'}}>
			<p >All Streams</p>
            <hr/>
			</div>
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