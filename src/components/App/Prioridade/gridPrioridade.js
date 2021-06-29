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
            {console.log(prioridade)}
            <DataGrid rows={prioridade} columns={colunas} pageSize={5}/>
        </div>

    );
}

export default GridPrioridade;


function GridSistemas() {

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

    const [open, setOpen] = React.useState(false);
    const [idSistema, setIdSistema] = useState(0);
    const { register, handleSubmit } = useForm();

    const handleClickOpen = (id_sistema) => {
        setOpen(true);
        if(!Array.isArray(id_sistema)){
            setIdSistema(id_sistema);
        }
    };

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
                    <button className="buttonSelecionar" type="button" onClick={handleClose}>
                        <FaIcons.FaCheck/>
                        &nbsp;Selecionar
                    </button>
                </DialogActions>
            </Dialog>
        </TableContainer>
    );
}

export default GridSistemas;