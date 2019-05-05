let giphyAPI = "http://api.giphy.com/v1/gifs/random?&api_key=BeEEp6h30rVpLCHoXyFKA6BycG2uPcLM&limit=1";

function setup(){
    wordGIF()
    .then(result => {
        createImg(result);
    }).
    catch(err => console.error(err));
}

async function wordGIF(){
    let response = await fetch(giphyAPI);
    let json = await response.json();
    let img = json.data.images.original.url;

    return img;
}