import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { PaperProps } from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from "@material-ui/core/DialogTitle"
import Draggable from 'react-draggable';
import Link from "next/link";
import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    Typography,
    TablePagination,
    TableFooter
    } from '@material-ui/core';
import api from "../../services/api";
import * as FaIcons from "react-icons/fa";
import * as CgIcons from "react-icons/cg";
import GridProjetos from "./Projeto/gridProjeto";
import { toast } from 'react-toastify';
import { registerProjeto } from '../../services/ProjetoService';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 450,
  },
  tableContainer: {
      borderRadius: 15,
      marginBottom: '20px',
      margin: '20px 10px',
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

function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

function GridSistemas() {

  const [sistemas, setSistemas] = useState([]); 
    useEffect(() => {
        api.get('/sistema').then(response => {
            setSistemas(response.data.data);
        })
  }, []);

  const [tarefa, setTarefa] = useState([]);
    useEffect(() => {
        api.get('/sistema').then(response => {
            setTarefa(response.data.data);
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

  const [open, setOpen] = React.useState(false);
  const [idSistema, setIdSistema] = useState(0);
  const [idTarefa, setTarefaByProjeto] = useState(0);
  const { register, handleSubmit } = useForm();
  
  const handleClickOpen = (id_sistema) => {
    setOpen(true);
    if(!Array.isArray(id_sistema)){
      setIdSistema(id_sistema);
    }      
  };

  const handleClickOpenCartoes = () => {
      setOpen(true);
      if (!Array.isArray(tarefa)){
          setTarefaByProjeto(tarefa);
      }
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderId}>ID</TableCell>
            <TableCell className={classes.tableHeaderSistema}>Sistema</TableCell>
            <TableCell className={classes.tableHeaderAcoes}>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sistemas.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((sistema) => (
            <TableRow key={sistema.id_sistema} hover>

              <TableCell>
                {sistema.id_sistema}
              </TableCell>
              <TableCell>
                <Typography color="primary">
                  {sistema.nome}
                </Typography>            
              </TableCell>
              <TableCell>
                <IconButton aria-label="edit" onClick={() => handleClickOpen(sistema.id_sistema)}>
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
      <Dialog
        fullWidth='700px'
        maxWidth='700px'
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Selecione o projeto:
          <button className="buttonNovoProjeto" type="button">
            <FaIcons.FaPlus/>
            &nbsp;Novo   
          </button>
        </DialogTitle>
        <DialogContent>
          <GridProjetos id_sistema={idSistema}/>
        </DialogContent>
        <DialogActions>
          <button className="buttonFechar" type="button" onClick={handleClose}>
            <CgIcons.CgClose/>
            &nbsp;Fechar   
          </button>
          <button className="buttonSelecionar" type="button" onClick={handleClickOpenCartoes}>
            <FaIcons.FaCheck/>
            &nbsp;Selecionar   
          </button>
        </DialogActions>
      </Dialog>
    </TableContainer>
  );
}

export default GridSistemas;