

export const getImagen = async() => {

    try {

        const apiKey = 'RZr3Pi4Q1X5rn7mcALCEz3d1DJ5JoTiM';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url

    } catch (error) {
        return 'No existe'
    }
    
}





