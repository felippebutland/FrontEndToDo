import React, { useContext } from "react";
import { isTypedArray } from "util/types";
import { AuthContext } from "../../../context/AuthContext";

const Footer = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    var nome = user?.nome

    return (
        <div className="footer">
            Bem vindo(a), {nome}!
        </div>
    );
}
export default Footer;

