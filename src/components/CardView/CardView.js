import React from 'react'; 
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import { FaSave } from '../../../node_modules/react-icons/fa';

    const CardView = ({name, email, id})  => {
        return (
          <div className='inline'>
            <Card style={{ width: '300px', marginTop:'20px', marginLeft:'10px', marginBottom:'5px'}}>
              <CardImg alt='robots' height='200px' src={`https://robohash.org/${id}`} />
              <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardSubtitle>{email}</CardSubtitle>
                <CardText style={{textAlign:'left', marginTop:'10px'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button outline color='primary'>Enter</Button>
                <Button style={{marginLeft: '10px'}} outline color='link'><FaSave/> Save</Button>
              </CardBody>
            </Card>
          </div>
        );
      };
export default CardView; 
  