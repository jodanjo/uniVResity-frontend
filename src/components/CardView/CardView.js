import React from 'react'; 
import { Card, CardImg, CardText, CardBody, Container, Row, Col,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

    const CardView = ({name, email, id})  => {
        return (
          <div className='inline'>
            <Card style={{ width: '300px', marginTop:'20px', marginLeft:'10px', marginBottom:'5px'}}>
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
  
