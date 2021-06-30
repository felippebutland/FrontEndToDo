import React, { useEffect, useState } from "react";
import api from '../../../services/api';
import { DataGrid } from '@material-ui/data-grid';

export function getIdPrioridade(){

}

export function GridPrioridade(prioridade) {
    const id_prioridade = prioridade.id_prioridade;

    const [prioridade, setPrioridade] = useState([]);
    useEffect(() => {
        api.get(`/prioridade`).then(response => {
            setPrioridade(response.data.data);
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
            <DataGrid rows={prioridade} columns={colunas} pageSize={5}/>
        </div>

    );
}

export default GridPrioridade;