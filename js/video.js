function changeVideo() {
  let link = document.getElementById("linkVideo").value;
  link = link.split("v=");
  if(link.length > 1){
    link = link[1];
    if(link.length > 0){
      link = "https://www.youtube.com/embed/" + link;
      document.getElementById("frameVideo").src = link;
    }
  }
}
export {changeVideo};
