import React from 'react';
import './clients.style.css'


const ListClients = (props) => {
    return (
       <div className="list-container">
           {props.list.map( ( index) => {
               return (
                   <React.Fragment key={index.id}>
                       <table>
                           <tr>
                               <td>{index.name}</td>
                               <td><b>Tel:</b> {index.tel}</td>
                               <td><b>Dirección:</b> {index.address}</td>
                               <td><b>Barrio:</b> {index.neigh}</td>
                           </tr>
                       </table>
                   </React.Fragment>
                   
               );
              
           })}
       </div>
    );
}

export default ListClients ;