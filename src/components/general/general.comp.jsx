import React, { useState } from 'react';
import Clients from '../clients/clients.comp';
import Orders from '../orders/orders.comp';
import './general.style.css'


const General = () => {
    let dataOrders = [
        {
            id: 'p1',
            ref:'nike zoom',
            talla: 37,
            cant:2,
            date:'2021-05-30'

        },
        {
            id: 'p2',
            ref:'adidas super start',
            talla: 40,
            cant:1,
            date:'2021-05-30'

        },
        {
            id: 'p3',
            ref:'adidas red',
            talla: 32,
            cant:1,
            date:'2021-05-30'

        },
        
    ]

        let dataUsers = [
            {
                id: 'u1',
                name:'Danilo Pelaez',
                tel: 3178889076,
                address: 'cll 12 # 25 - 60',
                neigh:'Bosques'
    
            },
            {
                id: 'u2',
                name:'Camila Herrera',
                tel: 3198089071,
                address: 'cll 18 # 25 - 63',
                neigh:'Enea'
    
            },
            {
                id: 'u3',
                name:'Maria Sanchez',
                tel: 3194043187,
                address: 'cll 48 # 26 - 50',
                neigh:'Lleras'
    
            },
            
        ]

    const[orders, setOrders] = useState(dataOrders);
    const[clients, setClients] = useState(dataUsers);

    return (
        <div>
            <h1>TIENDA VIRTUAL<br /> ******* LUNATIC SHOES ******</h1>
            <div className="general-container">
                <Clients list={clients}
                        onAddclient={(obj)=>{
                            
                            const newClient=clients;
                            newClient.push(obj);
                            setClients(newClient);
                            alert('Cliente creado con exito');
                        }}/>
                <Orders list={orders}
                        onAddOrder={(obj)=>{
                            console.log("entro");
                            const newOrder=orders;
                            newOrder.push(obj);
                            setOrders(newOrder);
                            alert('Pedido creado con exito');
                        }}/>
            </div>
           

        </div>
        
    );
}

export default General ;