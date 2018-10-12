import React from 'react'; 
import {Link} from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,
    CardTitle,  Button } from 'reactstrap';
import { FaSave } from '../../../node_modules/react-icons/fa';
import { withRouter } from "react-router-dom";
import { withAlert } from 'react-alert';


     

    const CardView = ({title, headline, urlid, subject, url, description, owner, photo, isSignedIn, userid})  => {

      const onSaveStream = () => {
          //console.log(`User ${userid} clicked to save stream ${url}`)
          fetch(  'http://localhost:3000/favorites', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              userid: userid,
              url: url,
            })
          })
            .then(response => response.json())
            .then(fav => {
              //console.log(fav)
              if (fav==='success') {
                alert(`Stream ${title} was saved to your favorite streams.`)
              } else if (fav==='saved_already') {
                alert(`Stream ${title}, is already in your favorites.`)
              }
            })

        }

        return (
          <div className='inline'>
            <Card style={{ width: '300px', marginTop:'20px', marginLeft:'10px', marginBottom:'5px'}}>
              <CardImg alt='stream' height='250px' src={`https://picsum.photos/300/?image=${urlid}`} />
              <CardBody>
                <CardTitle style={{fontWeight:'500', fontSize:'20px', overflowY: 'hidden', height:'125px'}}>{title}</CardTitle>
                <CardText style={{textAlign:'left', marginTop:'10px', overflowY: 'hidden', height:'120px', fontSize:'13px'}}>{headline}</CardText>
                <Link to={`/stream/${url}`}>
                <Button outline color='primary'>Enter</Button>
                </Link>
                <Button disabled={!isSignedIn} onClick={onSaveStream} style={{marginLeft: '10px'}} color='primary'><FaSave/> Save</Button>
              </CardBody>
            </Card>
          </div>
        );
      };
export default withRouter(withAlert(CardView)); 
  