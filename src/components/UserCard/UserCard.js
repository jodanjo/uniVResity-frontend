import React from 'react';
import {
    Card, CardBody, CardImg, CardText, CardTitle
  } from 'reactstrap';




const UserCard = ({bio, name, photo}) => {
    return(
        <div>
<Card style={{ width: '300px', marginTop:'20px', marginLeft:'10px', marginBottom:'5px'}}>
<CardImg top width="100%" src={`http://localhost:3000/photos/${photo}`} alt="Card image cap"  height="200" width="200" />
  <CardBody>
    <CardTitle style={{fontWeight:'500', fontSize:'24px'}}>{`${name}`}</CardTitle>
    <CardText style={{textAlign:'left', marginTop:'10px'}}>{`${bio}`}</CardText>
  </CardBody>
</Card>
</div>
        );
    };

export default UserCard;