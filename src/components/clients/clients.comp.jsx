import React from 'react';
import './clients.style.css'
import FormClient from './form.comp';
import ListClients from './list.comp';


const Clients = (props) => {
   
    return (
       <div className="clients-container">
           <h1>Usuarios</h1>
           <ListClients 
                list={props.list}
            />
           <FormClient
                onAddclient={props.onAddclient}
           />
       </div>
    );
}

export default Clients ;