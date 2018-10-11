import React from 'react';
import { Table, Button } from 'reactstrap';
import {Link} from 'react-router-dom';

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
                alert(`Stream ${title} was removed from your favorite streams.`)
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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{`${title}`}</td>
            <td>{`${headline}`}</td>
            <td>
                <div className='inline'>
                <Link to={`/stream/${url}`}>
                    <Button style={{marginRight:'5px'}} color='primary'>View</Button>
                </Link>
                <Button onClick={onUnsaveStream} color='secondary'>Unsave</Button>
                </div>
            </td>
          </tr>
        </tbody>
      </Table>
    );
  } 

export default UserSavedStreams; 