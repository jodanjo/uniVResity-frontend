import React from 'react'; 
import {Link} from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,
    CardTitle,  Button } from 'reactstrap';
import { FaSave } from '../../../node_modules/react-icons/fa';
import { withRouter } from "react-router-dom";
import swal from 'sweetalert';


     

    const CardView = ({title, headline, urlid, subject, url, description, owner, photo, isSignedIn, userid})  => {

      const onSaveStream = () => {
          //console.log(`User ${userid} clicked to save stream ${url}`)
          fetch(  'https://fierce-fortress-43881.herokuapp.com/favorites', {
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
                swal({
                  title: "This stream has been saved to your favorites!",
                  text: `${title}`,
                  icon: "success",
                  button: "Ok",
                });
              } else if (fav==='saved_already') {
                swal({
                  title: "This stream is already in your favorites!",
                  text: `${title}`,
                  icon: "warning",
                  button: "Ok",
                });
              }
            })

        }

        return (
          <div className='inline'>
            <Card style={{ width: '300px', marginTop:'20px', marginLeft:'10px', marginBottom:'5px'}}>
              <CardImg alt='stream' height='250px' src={`https://fierce-fortress-43881.herokuapp.com/photos/${photo}`} />
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
export default withRouter(CardView); 
  