const defaultImgs = {
  'src1':'https://images-na.ssl-images-amazon.com/images/I/512dtbDONBL._SY355_.jpg', 'alt1':"Capa do disco It's not unusual de Tom Jones",
  'src2':"https://slm-assets2.secondlife.com/assets/12810720/view_large/not_unusual.jpg?1448051629", 'alt2':"Carlton dançando not unusual",
  'src3':'https://www.meme4fun.com/images/c5b40a9d-d5d0-4dd3-946f-940c321ed016.png', 'alt3':"Meme Will Smith de boca aberta"
};

const defaultVideo = "https://www.youtube.com/embed/kKSxlJPmz40";
const defaultTextoGaleria = "Algumas imagens sobre \"It's not unusual\" e \"Um maluco no pedaço\".";
const defaultTextoVideo = "Um video de Carlton dançando \"It's not unusual\"";



function carregaGaleria() {
  // Galeria
  let imgs = localStorage.getItem('imgs');
  if (imgs == null) {
    imgs = defaultImgs;
  }
  for (let i of [1,2,3]) {
    let imgEl = document.querySelector('#img' + i);
    imgEl.src = imgs['src' + i];
    imgEl.alt = imgs['alt' + i];
  }
  let textoGaleria = localStorage.getItem('');
}

function carregaConteudo() {

}
