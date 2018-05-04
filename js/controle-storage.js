const defaultImgs = {
  'src1':'https://images-na.ssl-images-amazon.com/images/I/512dtbDONBL._SY355_.jpg', 'alt1':"Primeira imagem",
  'src2':"https://slm-assets2.secondlife.com/assets/12810720/view_large/not_unusual.jpg?1448051629", 'alt2':"Segunda imagem",
  'src3':'https://www.meme4fun.com/images/c5b40a9d-d5d0-4dd3-946f-940c321ed016.png', 'alt3':"Terceira imagem"
};
const defaultVideo = "https://www.youtube.com/embed/kKSxlJPmz40";
const defaultTextoGaleria = "Algumas imagens sobre \"It's not unusual\" e \"Um maluco no pedaço\".";
const defaultTextoVideo = "Um video de Carlton dançando \"It's not unusual\"";


function mudarImg1() {
  let src1 = document.getElementById("linkImg1").value;
  document.getElementById("img1").src = src1;
  localStorage.setItem('src1', src1);
}

function mudarImg2() {
  let src2 = document.getElementById("linkImg2").value;
  document.getElementById("img2").src = src2;
  localStorage.setItem('src2', src2);
}

function mudarImg3() {
  let src3 = document.getElementById("linkImg3").value;
  document.getElementById("img3").src = src3;
  localStorage.setItem('src3', src3);
}

function carregaGaleria() {
  console.log("entrou carregaGaleria")
  // Galeria
  let imgs = localStorage.getItem('imgs');
  for (let i of [1,2,3]) {
    let imgEl = document.querySelector('#img' + i);
    let src = localStorage.getItem('src' + i);
    if (src == null) {
      src = defaultImgs['src' + i];
    }
    imgEl.src = src;
  }
}

function carregaConteudo() {
  carregaGaleria();
}

export {carregaConteudo, mudarImg1, mudarImg2, mudarImg3};
