import React from "react";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";

export const SideBarData = [
    {
        title: 'Início',
        path: '/home',
        icon: <FaIcons.FaHome />,
        className: 'nav-text'
    },
    {
        title: 'Comentários',
        path: '/home/comentario',
        icon: <FaIcons.FaCommentAlt />,
        className: 'nav-text'
    },
    {
        title: 'Grupos',
        path: '/home/grupos',
        icon: <FaIcons.FaUsers />,
        className: 'nav-text'
    },
    {
        title: 'Prioridades',
        path: '/home/prioridades',
        icon: <FaIcons.FaExclamationTriangle />,
        className: 'nav-text'
    },
    {
        title: 'Projetos',
        path: '/home/projetos',
        icon: <FaIcons.FaPenSquare />,
        className: 'nav-text'
    },
    {
        title: 'Sistemas',
        path: '/home/sistemas',
        icon: <BsIcons.BsGearFill />,
        className: 'nav-text'
    },
    {
        title: 'Tarefas',
        path: '/home/tarefas',
        icon: <FaIcons.FaCheckCircle />,
        className: 'nav-text'
    },
    {
        title: 'Usuarios',
        path: '/home/usuarios',
        icon: <FaIcons.FaUserAlt />,
        className: 'nav-text'
    }
]

