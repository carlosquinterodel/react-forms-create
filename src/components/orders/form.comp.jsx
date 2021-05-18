import React, { useState } from 'react';
import './orders.style.css'


const FormOrder = (props) => {
    const [ref, setRef] = useState('');
    const [talla, setTalla] = useState('');
    const [cant, setCant] = useState('');
    const [date, setDate] = useState('');
    const [cod, setCod] = useState('');

    const addOrder = (event) => {
        event.preventDefault();
        let order = {
            'id':cod,
            'ref':ref,
            'talla':parseInt(talla),
            'cant':parseInt(cant),
            'date':date,

        }
        if( ref != '' && cod != '' && talla != '' && cant != '' && date != '' ){
            setRef(''); setTalla();setCant(''); setDate(''); setCod('');
            props.onAddOrder(order);
        }else{
            alert("Debe diligenciar todos los datos del nuevo pedido");
        }
        
    }
    return (
        <div className="form-container">
            <h3>Crear nuevo pedido</h3>
            <table>
                <tr>
                    <td>Referencia:</td>
                    <td><input type="text" 
                        value={ref}
                        onChange={(event)=>{
                            setRef(event.target.value);
                        }}/></td>
                    <td></td>
                    <td>talla</td>
                    <td><input type="number" 
                        value={talla}
                        onChange={(event)=>{
                            setTalla(event.target.value);
                        }}/></td>
                    
                </tr>
                <tr>
                    <td>Cantidad:</td>
                    <td><input type="number" 
                        value={cant}
                        onChange={(event)=>{
                            setCant(event.target.value);
                        }}/></td>
                    <td></td>
                    <td>Fecha pedido:</td>
                    <td><input type="date" 
                        value={date}
                        onChange={(event)=>{
                            setDate(event.target.value);
                        }}/></td>
                </tr>
                <tr>
                    <td>Cod:</td>
                    <td><input type="text" 
                        value={cod}
                        onChange={(event)=>{
                            setCod(event.target.value);
                        }}/></td>
                </tr>
            </table>
            <br />
           <button onClick={addOrder}>Añadir</button>

        </div>
        
        
    );
}

export default FormOrder ;