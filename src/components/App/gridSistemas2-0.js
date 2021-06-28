
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import React, { useEffect } from "react";
import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Grid,
    IconButton,
    Typography,
    TablePagination,
    TableFooter
    } from '@material-ui/core';
import api from "../../services/api";
import * as FaIcons from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 450,
    },
    tableContainer: {
        borderRadius: 15,
        marginBottom: 50,
        margin: '10px 10px',
        maxWidth: 1323
    },
    tableHeaderId: {
        width: 5,
        fontWeight: 'bold',
        backgroundColor: '#2e1443',
        color: '#f5f5f5'
    },
    tableHeaderSistema: {
      marginLeft: -50,
      
      fontWeight: 'bold',
      backgroundColor: '#2e1443',
      color: '#f5f5f5'
    },
    tableHeaderAcoes: {
      width: 10,
      fontWeight: 'bold',
      backgroundColor: '#2e1443',
      color: '#f5f5f5'
    },
    tableHeaderCell: {
        fontWeight: 'bold',
        backgroundColor: '#2e1443',
        color: '#f5f5f5'
    },
    name: {
        fontWeight: 'bold',
        color: theme.palette.secondary.dark
    },
    pagination: {
      width: 500
    }
  }));

function MTable() {

  const [sistemas, setSistemas] = useState([]); 
    useEffect(() => {
        api.get('/sistema').then(response => {
            setSistemas(response.data.data);
        })
  }, []);

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderId}>ID</TableCell>
            <TableCell className={classes.tableHeaderSistema}>Sistema</TableCell>
            <TableCell className={classes.tableHeaderAcoes}>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sistemas.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((sistema) => (
            <TableRow key={sistema.id_sistema}>

              <TableCell>
                {sistema.id_sistema}
              </TableCell>
              <TableCell>
                <Typography color="primary">
                  {sistema.nome}
                </Typography>            
              </TableCell>
              <TableCell>
                <IconButton aria-label="edit">
                  <FaIcons.FaPen/>
                </IconButton>            
              </TableCell>

            </TableRow>
          ))};

        </TableBody>
        <TableFooter>
        <TablePagination className={classes.pagination}
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={sistemas.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

export default MTable;