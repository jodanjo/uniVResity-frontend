import React from 'react'; 
import { Card, CardImg, CardText, CardBody,
    CardTitle,  Button } from 'reactstrap';
import { FaSave } from '../../../node_modules/react-icons/fa';

    const CardView = ({course_title, course_description, id})  => {
        return (
          <div className='inline'>
            <Card style={{ width: '300px', marginTop:'20px', marginLeft:'10px', marginBottom:'5px'}}>
              <CardImg alt='stream' height='200px' src={`https://picsum.photos/200/?image=${id}`} />
              <CardBody>
                <CardTitle style={{fontWeight:'500', fontSize:'24px'}}>{course_title}</CardTitle>
                <CardText style={{textAlign:'left', marginTop:'10px'}}>{course_description}</CardText>
                <Button outline color='primary'>Enter</Button>
                <Button style={{marginLeft: '10px'}} outline color='link'><FaSave/> Save</Button>
              </CardBody>
            </Card>
          </div>
        );
      };
export default CardView; 
  