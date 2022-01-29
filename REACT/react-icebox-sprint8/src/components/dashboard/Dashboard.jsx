import axios from 'axios';
import React, {useEffect,useState} from 'react';

import ApiUsers from '../users/ApiUsers';

export default function Dashboard() {
  const [users, setUsers] = useState([])
      useEffect(()=>{
          axios.get('http://localhost:5000/api/users')
          .then(({data}) => { 
              console.log(data);
              setUsers(JSON.stringify(data));
              
              //console.log('users', users);
            })
          .catch(e=>console.log(e))
      },[])
  return (
      <div>
        <h1>Prueba de DASHBORAD.jsx</h1>
        <p>{users}</p>

        <ApiUsers />
      </div>
    //console.log('ApiProductsId')
  )
};