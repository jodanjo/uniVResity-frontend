import React from 'react'; 
import CardView from '../CardView/CardView';

const CardList = ({ streams }) => {
	return (
		<div>
			<div style={{textAlign:'left', paddingLeft:'20px', paddingRight:'20px'}}>
			<p >All Streams</p>
            <hr/>
			</div>
			{streams.map((stream, i) => {
			return (
		<CardView 
			key= {i}
			urlid={streams[i].urlid} 
			title={streams[i].title}
			headline={streams[i].headline} 
			subject={streams[i].subject}
			url={streams[i].url}
			description={streams[i].description}
			owner={streams[i].owner}
			photo={streams[i].photo}

		/>
		);
	})}

		</div>
	);
}

export default CardList;