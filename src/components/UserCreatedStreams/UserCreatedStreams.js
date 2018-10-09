import React from 'react';
import { Table, Button } from 'reactstrap';


const UserCreatedStreams = ({ title, headline }) => {
    
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
                <Button style={{marginRight:'5px'}} color='warning'>Edit</Button>
                <Button color='danger'>Delete</Button>
                </div>
            </td>
          </tr>
        </tbody>
      </Table>
    );
  } 

export default UserCreatedStreams; 