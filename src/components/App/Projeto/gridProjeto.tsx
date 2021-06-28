import React, { useEffect } from "react";
import {
    Button,
    Typography,
    createStyles,
    makeStyles,
    Theme,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    TableSortLabel,
    Snackbar,
    Box,
} from '@material-ui/core';
import * as FaIcons from "react-icons/fa";
import { useState } from 'react';
import { Link } from "react-router-dom";
import api from "../../../services/api";

const Grid = () => {

    type Projeto = {
        id_projeto: string;
        nome: string;
    }

    const [projeto, setProjeto] = useState([]); 
    useEffect(() => {
        api.get('/projeto').then(response => {
            setProjeto(response.data.data);
        })
    }, []);

    return (
        <div>
            <TableContainer component={Paper} className="grid-container">
            <Table aria-label="Sistemas" size="small" >
            <TableHead>
                <TableRow>
                <TableCell>
                    ID
                </TableCell>
                <TableCell>Projeto</TableCell>
                <TableCell width="120" align="center" >
                    Ações
                </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {projeto.map((projeto: Projeto) => (
                <TableRow key={projeto.id_projeto} hover="true">
                    <TableCell component="th" scope="row">
                    {projeto.id_projeto}
                    </TableCell>
                    <TableCell component="th" scope="row">
                    {projeto.nome}
                    </TableCell>
                    <TableCell>
                    <Link to={`/sistema/${projeto.id_projeto}`} onClick={() => {}}>
                        <IconButton aria-label="edit">
                        <FaIcons.FaPen/>
                        </IconButton>
                    </Link>
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
            </TableContainer>
        </div>        
    );
}

export default gridProjeto;