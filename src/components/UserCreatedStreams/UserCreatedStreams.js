import React from 'react';
import { Table, Button } from 'reactstrap';
import {Link} from 'react-router-dom';
import { withAlert } from 'react-alert';
import swal from 'sweetalert';

const UserCreatedStreams = ({ userid, title, description, headline, url, removeDeleted, removeFav }) => {
    
   // console.log(userFavs);

const onDeleteStream = () => {
          //console.log(`User ${userid} clicked to save stream ${url}`)
          fetch(  'http://localhost:3000/delete_stream', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              userid: userid,
              url: url,
            })
          })
            .then(response => response.json())
            .then(deleted => {
              if (deleted===1) {
                swal({
                  title: "This stream has been deleted!",
                  text: `${title}`,
                  icon: "info",
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
      <Table striped>
        <thead>
          <tr>
            <th>Title </th>
            <th>Description</th>
            <th>View</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{`${title}`}</td>
            <td>{`${headline}`}</td>
            <td>
                <Link to={`/stream/${url}`}>
                    <Button style={{marginRight:'5px'}} color='primary'>View</Button>
                </Link>
            </td>
            <td>
                <Button onClick={onDeleteStream} color='danger'>Delete</Button>
                
            </td>
          </tr>
        </tbody>
      </Table>
    );
  } 

export default withAlert(UserCreatedStreams); 