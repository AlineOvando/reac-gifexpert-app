export const getGifs =  async ( category ) =>
{
    // const url = 'https://api.giphy.com/v1/gifs/search?api_key=SGEaRJUrkur2LxXoEdrooNq8SqUyugOM&q=Pikachu'
    const url = `https://api.giphy.com/v1/gifs/search?api_key=SGEaRJUrkur2LxXoEdrooNq8SqUyugOM&q=${ category }&limit=7`;
    const resp = await fetch( url );
    const { data } = await resp.json();
    
    const gifs = data.map ( img => ({ 
        id: img.id,
        title: img.title,
        url:img.images.downsized_medium.url  
    }));

    // console.log(gifs);
    return gifs;


}