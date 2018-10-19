import React from 'react';
import { Table, Button } from 'reactstrap';
import {Link} from 'react-router-dom';
import { withAlert } from 'react-alert';
import swal from 'sweetalert';

const UserCreatedStreams = ({ userid, title, description, headline, url, photo, removeDeleted, removeFav }) => {
    
   
const onDeleteStream = () => {
          //console.log(`User ${userid} clicked to save stream ${url}`)
          fetch(  'https://fierce-fortress-43881.herokuapp.com/delete_stream', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              userid: userid,
              url: url,
              photo: photo,
            })
          })
            .then(response => response.json())
            .then(deleted => {
              if (deleted===1) {
                swal({
                  title: "This stream has been deleted!",
                  text: `${title}`,
                  icon: "warning",
                  button: "Ok",
                });
                removeDeleted()
                removeFav()
              } else {
                swal({
                  title: "Could not delete this stream!",
                  text: `${title}`,
                  icon: "error",
                  button: "Ok",
                });
                alert(`Error deleting Stream ${title}.`)
              }
            })

        }

    return (
      <Table borderless >
        <thead>
          <tr style={{backgroundColor:'black', color:'white'}}>
            <th>Title </th>
            <th>Description</th>
            <th>View</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{width:'180px', textAlign:'left'}}>{`${title}`}</td>
            <td style={{width:'340px', textAlign:'left'}}>{`${headline}`}</td>
            <td style={{width:'30px'}}>
                <Link to={`/stream/${url}`}>
                    <Button style={{marginRight:'5px'}} color='primary'>View</Button>
                </Link>
            </td>
            <td style={{width:'30px'}}>
                <Button onClick={onDeleteStream} color='danger'>Delete</Button>
                
            </td>
          </tr>
        </tbody>
      </Table>
    );
  } 

export default withAlert(UserCreatedStreams); 