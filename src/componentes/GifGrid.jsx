// import { useEffect, useState } from "react";
// import { getGifs } from "../helpers/getGifs";
import { GifGirdItem } from "./GifGirdItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {
  
    const { tituloImagen, isLoading } = useFetchGifs ( category );
    //pasaremos este código aun hook.
    // const [tituloImagen, setTituloImagen] = useState([ ]);

    // const obtenerImagenes = async() => {
    //     const titulosImagenes = await getGifs ( category );
    //     setTituloImagen(titulosImagenes)
    // }

    // useEffect ( () => {
    //     obtenerImagenes();
        
    // }, [  ] );

    // useEffect ( () => {
    //     getGifs( category )
    //         .then (titulosImagenes => setTituloImagen(titulosImagenes));
        
    // }, [  ] );



    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && ( <h2>Cargando...</h2> )
            }
            <div className="card-grid">
                {
                    tituloImagen.map ( ( imagenGif ) => (

                        //tener cuidado con los parentesis para que te reconozca el id y title
                        // <li key = { id }> { title }</li>    
                        //cambiamos por el gifGridItem
                        <GifGirdItem 
                            key={ imagenGif.id }
                            { ...imagenGif }
                        />    
                    ))
                    //este codigo seria sin desestructura, no como el de arriba que ya esta
                    //desestructurado y no debes poner el .
                    // tituloImagen.map ((titulos)=>(

                    //     <li key = { titulos.id }> { titulos.title }</li>    
                    // )
                    // )
                }
            </div>
        </>
  )
}
