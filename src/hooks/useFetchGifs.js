import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {

    const [tituloImagen, setTituloImagen] = useState([ ]);
    const [isLoading, setIsLoading] = useState( true );

    const obtenerImagenes = async() => {
        const titulosImagenes = await getGifs ( category );
        setTituloImagen(titulosImagenes);
        setIsLoading(false);
    }

    useEffect ( () => {
        obtenerImagenes();
        
    }, [ ] );
    
    return {
        tituloImagen,
        isLoading
    }
  
}

