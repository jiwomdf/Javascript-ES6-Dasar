let theUrl = "http://api.giphy.com/v1/gifs/random?&api_key=BeEEp6h30rVpLCHoXyFKA6BycG2uPcLM&limit=1";
let arrGifUrl = [];

const cobain = async () => {
    canvas = createCanvas(200,200);

    const resFetch = await fetch(theUrl);
    console.log(resFetch);
    const json = (await resFetch.json()).data;
    arrGifUrl = json;
    createImg(arrGifUrl.images.original.url);
    return 'berhasil';
}

function setup(){
    cobain();
    // console.log(arrGifUrl);
    // canvas = createCanvas(200,200);

    // fetch(theUrl).then(response =>{
    //     console.log(response);
    //     return response.json();
    // } ).then(json =>{
    //     json.data.forEach(i=>{
    //         console.log(i);
    //     });
    // }).catch(err => console.log(err));

    // displayGif(arrGifUrl);
}

function displayGif(arrGifUrl){
    console.log(arrGifUrl);
    for(let i = 0; i < i + 5; i++ ){
        createImg(arrGifUrl[i].images.original.url);
    }
}