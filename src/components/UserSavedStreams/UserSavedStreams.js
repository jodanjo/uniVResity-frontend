import React from 'react';
import { Table, Button } from 'reactstrap';
import {Link} from 'react-router-dom';
import swal from 'sweetalert';


const UserSavedStreams = ({ userid, title, description, headline, url, removeFav }) => {
    
   // console.log(userFavs);

const onUnsaveStream = () => {
          //console.log(`User ${userid} clicked to save stream ${url}`)
          fetch(  'http://localhost:3000/unsave_stream', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              userid: userid,
              url: url,
            })
          })
            .then(response => response.json())
            .then(unfav => {
              if (unfav===1) {
                swal({
                  title: "This stream was removed from your list!",
                  text: `${title}`,
                  icon: "warning",
                  button: "Ok",
                });
                removeFav()
              } else {
                swal({
                  title: "Could not remove this stream!",
                  text: `${title}`,
                  icon: "error",
                  button: "Ok",
                });
              }
            })

        }

    return (
      <Table bordered>
        <thead>
          <tr>
            <th>Title </th>
            <th>Description</th>
            <th>View</th>
            <th>Unsave</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{`${title}`}</td>
            <td>{`${headline}`}</td>
            <td>
                <Link to={`/stream/${url}`}>
                    <Button color='primary'>View</Button>
                </Link>
            </td>
            <td>
                <Button onClick={onUnsaveStream} color='secondary'>Unsave</Button>
                
            </td>
          </tr>
        </tbody>
      </Table>
    );
  } 

export default UserSavedStreams; 