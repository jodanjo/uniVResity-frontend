import React from 'react'; 
import { Card, CardImg, CardText, CardBody,
    CardTitle,  Button } from 'reactstrap';
import { FaSave } from '../../../node_modules/react-icons/fa';

    const CardView = ({title, headline, urlid})  => {
        return (
          <div className='inline'>
            <Card style={{ width: '300px', marginTop:'20px', marginLeft:'10px', marginBottom:'5px'}}>
              <CardImg alt='stream' height='250px' src={`https://picsum.photos/300/?image=${urlid}`} />
              <CardBody>
                <CardTitle style={{fontWeight:'500', fontSize:'20px', overflowY: 'hidden', height:'125px'}}>{title}</CardTitle>
                <CardText style={{textAlign:'left', marginTop:'10px', overflowY: 'hidden', height:'120px', fontSize:'13px'}}>{headline}</CardText>
                <Button outline color='primary'>Enter</Button>
                <Button style={{marginLeft: '10px'}} outline color='link'><FaSave/> Save</Button>
              </CardBody>
            </Card>
          </div>
        );
      };
export default CardView; 
  