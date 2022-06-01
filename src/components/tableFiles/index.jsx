import React from "react";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { StatusCancelado, StatusEntregue, StatusPendente } from "../statusField";

// data teste :p
import data from './data.json'
import datameals from './datameals.json'
import datarequests from './datarequests.json'

// logicas para o compartamento da tabela--------------------------------/
let rowsPerPage = 5;
const right_arrow = "<<";
const left_arrow = ">>";
let mutable_data = data;
let mutable_data2 = datameals;
let mutable_data3 = datarequests;

const useTable = (data, page, rowsPerPage) => {
  const [tableRange, setTableRange] = useState([]);
  const [slice, setSlice] = useState([]);

  useEffect(() => {
    const range = calculateRange(data, rowsPerPage);
    setTableRange([...range]);

    const slice = sliceData(data, page, rowsPerPage); 
    setSlice([...slice]);
  }, [data, setTableRange, page, setSlice]);

  return { slice, range: tableRange };
};

const calculateRange = (data, rowsPerPage) => {
  const range = [];
  const num = Math.ceil(data.length / rowsPerPage);
  let i = 1;
  for (let i = 1; i <= num; i++) {
    range.push(i);
  }
  return range;
};

const sliceData = (data, page, rowsPerPage) => {
  return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
};
// ----------------------------------------------------------------------/


export function TableUsuarios() {

  const [contacts, setContacts] = useState(mutable_data);
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(contacts, page, rowsPerPage);
  return ( 

    <>
    <main>
    <table>
    <thead>
      <tr>
        <th>Nome</th>
        <th>Email</th>
        <th>Cadastrado em:</th>
        <th></th>
        
      </tr>
    </thead>
    <tbody>
      {sliceData(contacts,page,rowsPerPage).map((contact) => (
        <tr>
          <td>{contact.first_name} {contact.last_name}</td>
          <td>{contact.email}</td>
          <td>{contact.created_at}</td>
          <td className='action_buttons'>
            <Link to='/editUser'><button className='edit_button'>editar</button></Link>
            <button onClick={() => {setContacts(contacts.filter(user => user.id !== contact.id));
               mutable_data.filter(user => user.id !== contact.id);}} className='delete_button'>excluir</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  <div className='pagination'>
    <button onClick={() => page != 1 ? setPage(page-1) : setPage(page)}>{right_arrow}</button>
    
    {range.map((el, index) => (
        <button
          key={index}
          className={`${
            page === el ? 'active' : 'inactiveButton'
          }`}
          onClick={() => setPage(el)}
        >
          {el}
        </button>
    ))}
    <button onClick={() => page != 3 ? setPage(page+1) : setPage(page)}>{left_arrow}</button>

  </div></main></>

  );
}




export function TableRequests() {
  rowsPerPage = 5;
  const [contacts, setContacts] = useState(mutable_data3);
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(contacts, page, rowsPerPage);
  return ( 

    <>
    <main>
    <table>
      <thead>
        <tr>
          <th>pedido n</th>
          <th>status</th>
          <th>cadastrada em:</th>
          <th>usuario</th>
          <th>preco total</th>
          <th>detalhes</th>
          <th></th>
          
        </tr>
      </thead> 
      <tbody>
        {sliceData(contacts, page, rowsPerPage).map((contact) => (
          <tr>
            <td>{contact.pedido}</td>
            {(contact.status === "entregue") ? <td><StatusEntregue/></td>: (contact.status === "pendente") ? <td><StatusPendente/></td> : <td><StatusCancelado/></td>}
            <td>{contact.created_at}</td>
            <td>{contact.nome}</td> 
            <td>{contact.preco_total}</td>
            <td className="detalhes">{contact.detalhes}</td>
            <td className='action_buttons'>
              <Link to='/editRequest'><button className='edit_button'>editar</button></Link>
              <button onClick={() => {setContacts(contacts.filter(user => user.pedido !== contact.pedido));
                mutable_data3.filter(user => user.pedido !== contact.pedido);}} className='delete_button'>excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
  </table>
    <div className='pagination'>
      <button onClick={() => page != 1 ? setPage(page-1) : setPage(page)}>{right_arrow}</button>
      
      {range.map((el, index) => (
          <button
            key={index}
            className={`${
              page === el ? 'active' : 'inactiveButton'
            }`}
            onClick={() => setPage(el)}
          >
            {el}
          </button>
      ))}
      <button onClick={() => page != 3 ? setPage(page+1) : setPage(page)}>{left_arrow}</button>
      </div>
  </main>
  </>

  );
}



export function TableRefeicoes() {
  rowsPerPage = 3;
  const [contacts, setContacts] = useState(mutable_data2);
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(contacts, page, rowsPerPage);
  return ( 

    <>
    <main>
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Número de refeicoes</th>
          <th>Cadastrada em:</th>
          <th></th>
          
        </tr>
      </thead>
      <tbody>
        {sliceData(contacts, page, rowsPerPage).map((contact) => (
          <tr>
            <td>{contact.name}</td>
            <td>{contact.num_refeicoes}</td>
            <td>{contact.created_at}</td>
            <td className='action_buttons'>
              <Link to='/editMeal'><button className='edit_button'>editar</button></Link>
              <button onClick={() => {setContacts(contacts.filter(user => user.name !== contact.name));
                mutable_data2.filter(user => user.name !== contact.name);}} className='delete_button'>excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
  </table>
    <div className='pagination'>
      <button onClick={() => page != 1 ? setPage(page-1) : setPage(page)}>{right_arrow}</button>
      
      {range.map((el, index) => (
          <button
            key={index}
            className={`${
              page === el ? 'active' : 'inactiveButton'
            }`}
            onClick={() => setPage(el)}
          >
            {el}
          </button>
      ))}
      <button onClick={() => page != 3 ? setPage(page+1) : setPage(page)}>{left_arrow}</button>
      </div>
    <Link to='/newMeal'><button className="btn btn-success">Criar nova categoria :D</button></Link>
  </main>
  </>

  );
}