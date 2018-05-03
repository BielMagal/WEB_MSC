function changeVideo(){
  let link = document.getElementById("linkVideo").value//"https://youtu.be/xKX125srwYU";
  link = link.split("v=");
  link = link[1];
  if(link.length > 0){
    link = "https://www.youtube.com/embed/" + link;
    document.getElementById("frameVideo").src = link;
  }
}


export { changeVideo };
