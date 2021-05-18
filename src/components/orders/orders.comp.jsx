import React, { useState } from 'react';
import FormOrder from './form.comp';
import ListOrders from './list.comp';
import './orders.style.css'


const Orders = (props) => {
    

   
    return (
        <div className="orders-container">
            <h1>Pedidos</h1>
            <ListOrders 
                list={props.list}
            />
            <FormOrder
                onAddOrder={props.onAddOrder}
            />
        </div>
        
        
    );
}

export default Orders ;