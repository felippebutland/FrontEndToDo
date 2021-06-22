import React from "react";
import $ from 'jquery';

const Dropdown = () => {

    function tratarSistema(sistema) {
        if(!sistema.id){
            return sistema.descricao;
        }
        var sistema = $(
            '<span>'+ sistema.text + '</span>'
        );
        return sistema;
    }

    return(
        $(".js-example-templating").select2({
            templateResult: tratarSistema
        })
    );
    
}
export default Dropdown;