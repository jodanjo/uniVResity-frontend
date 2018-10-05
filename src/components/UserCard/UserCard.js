import React from 'react';
import {
    Card, CardBody, CardImg, CardText, CardTitle
  } from 'reactstrap';




const UserCard = ({bio, name}) => {
    return(
        <div>
<Card style={{ width: '300px', marginTop:'20px', marginLeft:'10px', marginBottom:'5px'}}>
<CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
  <CardBody>
    <CardTitle style={{fontWeight:'500', fontSize:'24px'}}>{`${name}`}</CardTitle>
    <CardText style={{textAlign:'left', marginTop:'10px'}}>{`${bio}`}</CardText>
  </CardBody>
</Card>
</div>
        );
    };

export default UserCard;