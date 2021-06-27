import React, { useContext } from "react";
import { isTypedArray } from "util/types";
import { AuthContext } from "../../../context/AuthContext";

const Footer = () => {
    const { user } = useContext(AuthContext);
    var nome = user;
    if(Array.isArray(nome)){
        nome = nome[0].nome;
    }

    return (
        <div className="footer">
            Bem vindo(a), {nome}!
        </div>
    );
}
export default Footer;

