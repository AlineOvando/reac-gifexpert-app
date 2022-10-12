import { useState } from 'react';

export const AddCategoria = ({ onNuevaCategoria }) => {

   const [ inputValor, setInputValor ] = useState ('');
    
//    const onInputCambio = ( event ) =>{
//      setInputValor( event.target.value )
//    }
   const onInputCambio = ( { target } ) =>{
     setInputValor( target.value );
   }

   const onSubmit = ( event ) => {
        event.preventDefault();
        //para validar que si la cadena de la entrada se tenga texto de más de un caracter
        if ( inputValor.trim().length <= 1) return;
        //con esto modificas el arreglo que se está mostrando en las categorias
        //con esto se está limpiando cuando mandas enter
        setInputValor('');
        onNuevaCategoria( inputValor.trim() ) ;
   }

    return (
        //tambien se puede escribir el onSubmit de la siguiente manera
        //<form onSubmit={ onSubmit }>
        <form onSubmit={ ( event ) => onSubmit ( event) }>
            <input
                type ="text"
                placeholder="Buscar gifs"
                value={ inputValor }
                onChange = {  ( event ) => onInputCambio ( event )}
            />
        </form>
    )
}