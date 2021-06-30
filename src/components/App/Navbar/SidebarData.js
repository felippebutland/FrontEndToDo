import React, {useContext, useState} from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import Link from "next/link";

export const SideBarData = [
    {
        title: 'Início',
        path: '/home',
        icon: <FaIcons.FaHome />,
        className: 'nav-text'
    },
    {
        title: 'Prioridade',
        path: '/prioridade',
        icon: <FaIcons.FaExclamation />,
        className: 'nav-text'
    },
    {
        title: 'Status Tarefa',
        path: '/tarefa-status',
        icon: <AiIcons.AiFillCheckCircle />,
        className: 'nav-text'
    },
    {
        title: 'Tipo Tarefa',
        path: '/tarefa-tipo',
        icon: <AiIcons.AiFillTag />,
        className: 'nav-text'
    },
]

