import { useState } from "react";
import { AddCategoria, GifGrid } from "./componentes";
//se quita ya que se tiene el index en componentes
// import { GifGrid } from "./componentes/GifGrid";

export const GifExpertApp = () => {
    
    const [ categorias, setCategorias ] = useState ([ 'BTS' ]);
  
    const onAgregaCategoria = ( nvoCat ) => {
        //antes de insertar validar que no exista ya
        if ( categorias.includes(nvoCat)) return;
        
        setCategorias ([ ...categorias, nvoCat]);
        //setCategorias (cat => [...cat, 'Lifehouse']);
        // console.log(categorias);
    }
    return (
    <>
        {/* Título     */}
        <h1> Gif Expert App</h1>

        {/* Entradas */}

        {/* Dervidao de que en este caso el hijo es quien inserta, se tiene que el setCategorias
        no está haciendo su funcion de insertar, si no el hijo. Por eso lo modificaremos 
        esta era la forma en la que el hijo hace la adicion:*/}
        {/* <AddCategoria onSetCategoria = { setCategorias } /> */}
        <AddCategoria 
            onNuevaCategoria = {  ( valor ) => onAgregaCategoria (valor)}
        />



        {/* Listado de Gif */}
        {/* <button onClick={ onAgregaCategoria }>Agregar Categoria</button> */}
        {/* <ol> */}
        { categorias.map(( category ) => (
            <GifGrid 
                key = { category }
                category = { category }
            />
           ))        
                //codigo antes de implementar el gifgrid
                // return (
                //     <div key= { category } >
                //         <h3> { category } </h3>
                //         <li>{ category }</li>
                //     </div>
                //         )
                // } ) 
        }
        {/* </ol> */}
            {/* Gif Item */}
    </>
  )
}
