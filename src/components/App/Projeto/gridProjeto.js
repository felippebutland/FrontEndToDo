import React, { useEffect, useState } from "react";
import api from '../../../services/api';
import { DataGrid } from '@material-ui/data-grid';
import * as FaIcons from "react-icons/fa";

export function getIdProjeto(){

}

export function GridProjetos(sistema) {
    const id_sistema = sistema.id_sistema;

    const [projetos, setProjetos] = useState([]); 
    useEffect(() => {
        api.get(`/projeto/sistema/${id_sistema}`).then(response => {
            setProjetos(response.data.data);
        })
    }, []);

    const colunas = [
        { field: 'id', headerName: 'ID', width: 170 },
        { field: 'titulo', headerName: 'Título', width: 250 },
        { field: 'descricao', headerName: 'Descrição', width: 250 },
        { field: 'data_inicio', headerName: 'Data de início', width: 230 },
        { field: 'data_fim', headerName: 'Data fim', width: 230 },
    ]

    return (
        <div style={{ height: 400, width: '100%' }}>
            {console.log(projetos)}
            <DataGrid rows={projetos} columns={colunas} pageSize={5}/>
        </div>
    );
}

export default GridProjetos;