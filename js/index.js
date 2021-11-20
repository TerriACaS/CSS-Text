function changebg(url) {
  let p = document.querySelector("#text");
  p.style.background = `url(\"${url}\")`;
  p.style.backgroundSize = "cover";
  p.style.backgroundPosition = "center";
  p.style.backgroundRepeat = "no-repeat";
  p.style.webkitBackgroundClip = "text";
}

function ontextchange(ev) {
  let el = ev.srcElement;
  
  document.querySelector("#text").innerText = el.value;
}

function onurlchange(ev) {
  let el = ev.srcElement;

  let url = el.value;
  
  changebg(url);
}

function onfilechange(ev) {
  let el = ev.srcElement;
  let file = el.files[0];
  
  let url = URL.createObjectURL(file);
  
  changebg(url);
}