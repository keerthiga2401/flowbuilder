

function allowDrop(ev) {
  ev.preventDefault();
}
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id)
  
}
function drop(ev) {

  ev.preventDefault();
  var data=ev.dataTransfer.getData("text");  
  var nodeCopy = document.getElementById(data).cloneNode(true);
  nodeCopy.style.resize="both";
  ev.target.appendChild(nodeCopy); 

}
//zoom
window.onload=function(){
  

const zoomInButton = document.getElementById('zoom-in-button');
const zoomOutButton = document.getElementById('zoom-out-button');
const pageContent = document.getElementById('page-content');

let scale = 1;

zoomInButton.addEventListener('click', () => {
  scale += 0.1;
  pageContent.style.transform = `scale(${scale})`;
});

zoomOutButton.addEventListener('click', () => {
  if (scale > 0.1) {
    scale -= 0.1;
    pageContent.style.transform = `scale(${scale})`;
  }
});
}

