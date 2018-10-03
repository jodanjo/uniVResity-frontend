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
			urlid={streams[i].urlid} 
			title={streams[i].title}
			headline={streams[i].headline} 
			email={streams[i].email}
		/>
		);
	})}

		</div>
	);
}

export default CardList;