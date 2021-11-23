window.onload = function () {
  alert("This site is desgned for mobile browsers. It is not recommended to use a PC/Desktop.");
}

function changebg(url) {
  document.querySelector("#credits").style.display = "none";

  let p = document.querySelector("#text");
  p.style.background = `url(\"${url}\")`;
  p.style.backgroundSize = "cover";
  p.style.backgroundPosition = "center";
  p.style.backgroundRepeat = "no-repeat";
  p.style.webkitBackgroundClip = "text";
}

function ontextchange(ev) {
  let el = ev.srcElement;

  document.querySelector("#text").innerHTML = el.value.replace("\n", "");
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