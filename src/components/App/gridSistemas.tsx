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
import axios from "axios";

const Grid = () => {
    var idTeste = 1;

    const [sistemas, setSistemas] = useState([]); 
    useEffect(() => {
        axios.get('http://localhost:3060/sistema').then(response => {
            setSistemas(response.data.data);
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
                <TableCell>Sistema</TableCell>
                <TableCell width="120" align="center" >
                    Ações
                </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {sistemas.map((sistema) => (
                <TableRow key={sistema.id_sistema} hover="true">
                    <TableCell component="th" scope="row">
                    {sistema.id_sistema}
                    </TableCell>
                    <TableCell component="th" scope="row">
                    {sistema.nome}
                    </TableCell>
                    <TableCell>
                    <Link to={`/sistema/${sistema.id_sistema}`} href={`/sistema/${sistema.id_sistema}`}>
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

export default Grid;