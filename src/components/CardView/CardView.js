import React from 'react'; 
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row, Col } from 'reactstrap';

    const CardView = ({name, email, id})  => {
        return (
          <div className='inline'>
            <Card style={{ width: '300px', marginTop:'25px', marginLeft:'15px',}}>
              <CardImg alt='robots' height='200px' src={`https://robohash.org/${id}`} />
              <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardSubtitle>{email}</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button color='success'>Enter</Button>
              </CardBody>
            </Card>
          </div>
        );
      };
export default CardView; 
  
