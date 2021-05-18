import React, { useState } from 'react';
import './clients.style.css'


const FormClient = (props) => {
    
    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    const [address, setAddress] = useState('');
    const [neigh, setNeigh] = useState('');
    const [cod, setCod] = useState('u');

    const addClient = (event) => {
        event.preventDefault();
        let client = {
            'id':cod,
            'tel':tel,
            'address':address,
            'neigh':neigh,
            'name':name,

        }
        if( name != '' && tel != '' && address != '' && neigh != '' && cod != '' ){
            setName(''); setTel(''); setAddress(''); setNeigh(''); setCod('');
            props.onAddclient(client);
        }else{
            alert('Debe diligenciar todos los datos del nuevo cliente');
        }

    }
    return (
       <div className="form-container">
           <h3>Crear nuevo cliente</h3>
           <table>
                <tr>
                    <td>Nombre:</td>
                    <td><input type="text" 
                        value={name}
                        onChange={(event)=>{
                            setName(event.target.value);
                        }}/></td>
                    <td></td>
                    <td>Telefono</td>
                    <td><input type="number" 
                        value={tel}
                        onChange={(event)=>{
                            setTel(event.target.value);
                        }}/></td>
                </tr>
                <tr>
                    <td>Dirección:</td>
                    <td><input type="text" 
                        value={address}
                        onChange={(event)=>{
                            setAddress(event.target.value);
                        }}/></td>
                    <td></td>
                    <td>Barrio:</td>
                    <td><input type="text" 
                        value={neigh}
                        onChange={(event)=>{
                            setNeigh(event.target.value);
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
           <button onClick={addClient}>Registrar</button>
       </div>
    );
}

export default FormClient ;