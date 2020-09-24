import React from 'react'
import api from '../../config/api'


export default function TableCrud({id,nome,telefone,cnpj,image}){

    async function deleteUser(){
        try {
            await api.delete(`/users/${id}/delete`)

            alert('Estabelecimento deletado com sucesso')
            window.location.reload(false);
        }
        catch (err){
            alert('Error, tente novamente!')
        }
    }
    return(
        
                    <tr>
                        <td>{id}</td>
                        <td>{nome}</td>
                        <td>{telefone}</td>
                        <td>{cnpj}</td>
                        <td>{image}</td>
                        <td>
                            <a className="add" title="Add" ><i className="material-icons"></i></a>
                            <a className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons">&#xE254;</i></a>
                            <a className="delete" title="Delete" onClick={deleteUser} data-toggle="tooltip"><i className="material-icons">&#xE872;</i></a>
                        </td>
                    </tr>                     
    )
}