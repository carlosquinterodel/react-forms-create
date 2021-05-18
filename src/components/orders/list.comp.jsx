import React from 'react';
import './orders.style.css'


const ListOrders = (props) => {
    return (
        
        <div className="list-container">
            {props.list.map( ( index) => {
               return (
                   <React.Fragment key={index.id}>
                       <table>
                           <tr>
                               <td><b>Ref:</b> {index.ref}</td>
                               <td><b>Talla:</b> {index.talla}</td>
                               <td><b>Cantidad:</b> {index.cant}</td>
                               <td><b>Fecha:</b> {index.date}</td>
                           </tr>
                       </table>
                   </React.Fragment>
                   
               );
              
           })}
        </div>
        
        
    );
}

export default ListOrders ;