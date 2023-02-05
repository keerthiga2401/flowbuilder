
var k=1,b=0;
function allowDrop(ev) {
  ev.preventDefault();
}
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  var dd=ev.target.id;
   
  

  if(dd=="correci"||dd=="circlei"||dd=="squarei"||dd=="rectanglei"||dd=="diamondi"||dd=="ovali")
  {
    k=0;
  }

}
function drop(ev) {

  ev.preventDefault();
  var data=ev.dataTransfer.getData("text");
     if(k==0)
     {
  var nodeCopy = document.getElementById(data).cloneNode(true);
  nodeCopy.id="sii";
  nodeCopy.style.resize = "both";
  document.addEventListener("mousemove", function(event) {
  var x = event.clientX;
  var y = event.clientY;
  document.getElementById("#sii").style.top = y + "px";
  document.getElementById("#sii").style.left = x + "px";
});

  ev.target.appendChild(nodeCopy);
  k=1;
}
else
{
  ev.target.appendChild(data);
  k=1;
}


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

