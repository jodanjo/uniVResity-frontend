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
                  title: "This stream has been removed from your favorites!",
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
      <Table borderless>
        <thead>
          <tr style={{backgroundColor:'black', color:'white'}}>
            <th >Title </th>
            <th >Description</th>
            <th >View</th>
            <th>Unsave</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{width:'180px', textAlign:'left'}}>{`${title}`}</td>
            <td style={{width:'340px', textAlign:'left'}}>{`${headline}`}</td>
            <td style={{width:'30px'}}>
                <Link to={`/stream/${url}`}>
                    <Button color='primary'>View</Button>
                </Link>
            </td>
            <td style={{width:'30px'}}>
                <Button onClick={onUnsaveStream} color='secondary'>Unsave</Button>
                
            </td>
          </tr>
        </tbody>
      </Table>
    );
  } 

export default UserSavedStreams; 