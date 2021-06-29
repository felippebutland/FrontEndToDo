import GridTarefaTipo from "./gridTarefaTipo";
import * as FaIcons from "react-icons/fa";
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogTitle from "@material-ui/core/DialogTitle"
import Draggable from 'react-draggable';


export const dialogTarefaTipo = () => {

    function PaperComponent(props) {
        return (
          <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
            <Paper {...props} />
          </Draggable>
        );
    }

    const [open, setOpen] = React.useState(true);
    const [idTarefaTipo, setidTarefaTipo] = useState(0);

    const handleClose = () => {
        setOpen(false);
    };

    return (
    <Dialog
        fullWidth='700px'
        maxWidth='700px'
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
    >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Tipos de tarefa:
          <button className="buttonNovoProjeto" type="button">
            <FaIcons.FaPlus/>
            &nbsp;Novo   
          </button>
        </DialogTitle>
        <DialogContent>
          <GridTarefaTipo/>
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
    );
}