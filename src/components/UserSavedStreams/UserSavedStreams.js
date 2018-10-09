import React from 'react';
import { Table, Button } from 'reactstrap';


const UserSavedStreams = ({ title, headline }) => {
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
                <Button style={{marginRight:'5px'}} color='primary'>View</Button>
                <Button color='secondary'>Unsave</Button>
                </div>
            </td>
          </tr>
        </tbody>
      </Table>
    );
  } 

export default UserSavedStreams; 