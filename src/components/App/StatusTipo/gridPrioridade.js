import React, { useEffect, useState } from "react";
import api from '../../../services/api';
import { DataGrid } from '@material-ui/data-grid';

export function getIdTarefaTipo(){

}

export function GridTarefaTipo(tarefaTipo) {
    const tarefa_tipo = tarefaTipo.tarefa_tipo;

    const [tarefaTipo, setTarefaTipo] = useState([]);
    useEffect(() => {
        api.get(`/tarefa_tipo`).then(response => {
            setTarefaTipo(response.data.data);
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
            {console.log(tarefaTipo)}
            <DataGrid rows={tarefaTipo} columns={colunas} pageSize={5}/>
        </div>

    );
}

export default GridTarefaTipo;
