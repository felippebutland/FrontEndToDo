import React, { useEffect, useState } from "react";
import api from '../../../services/api';
import { DataGrid } from '@material-ui/data-grid';

export function GridTarefaTipo() {

    const [tarefaTipo, setTarefaTipo] = useState([]);
    useEffect(() => {
        api.get(`/tarefa_tipo`).then(response => {
            setTarefaTipo(response.data.data);
        })
    }, []);

    const colunas = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'descricao', headerName: 'Título', width: 300 }
    ]

    return (
        <div style={{ height: 400, width: '100%' }}>
            {console.log(tarefaTipo)}
            <DataGrid rows={tarefaTipo} columns={colunas} pageSize={5}/>
        </div>

    );
}

export default GridTarefaTipo;
