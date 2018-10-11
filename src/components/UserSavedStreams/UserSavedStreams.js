import React from 'react';
import { Table, Button } from 'reactstrap';
import {Link} from 'react-router-dom';
import {withAlert} from 'react-alert';

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
               alert(`Stream ${title} was removed from your saved streams.`)
                removeFav()
              } else {
                alert(`Error removing Stream ${title}.`)
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

export default withAlert(UserSavedStreams); 