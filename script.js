const french = document.getElementById("french");

function colorChangeFrench(event){
  document.getElementById("lr").style.backgroundColor = "rgb(243, 189, 67)";
  document.getElementById("lr").style.zIndex = "1";
  document.getElementById("lru").style.backgroundColor = "rgb(177, 54, 52)"
  document.getElementById("rlu").style.backgroundColor = "rgb(177, 54, 52)"
  document.getElementById("lro").style.backgroundColor = "rgb(177, 54, 52)"
  document.getElementById("rlo").style.backgroundColor = "rgb(177, 54, 52)"
}

function colorChangeDarija(event){
  document.getElementById("lr").style.backgroundColor = "rgb(243, 189, 67)";
  document.getElementById("lru").style.backgroundColor = "rgb(243, 189, 67)";
  document.getElementById("rlu").style.backgroundColor = "rgb(243, 189, 67)";
  document.getElementById("lro").style.backgroundColor = "rgb(243, 189, 67)";
  document.getElementById("rlo").style.backgroundColor = "rgb(243, 189, 67)";
}

function colorChangeArabic(event){
  document.getElementById("lr").style.backgroundColor = "rgb(243, 189, 67)";
  document.getElementById("lr").style.zIndex = "1";
  document.getElementById("lru").style.backgroundColor = "rgb(177, 54, 52)";
  document.getElementById("rlu").style.backgroundColor = "rgb(243, 189, 67)";
  document.getElementById("rlu").style.zIndex = "1";
  document.getElementById("lro").style.backgroundColor = "rgb(177, 54, 52)";
  document.getElementById("rlo").style.backgroundColor = "rgb(177, 54, 52)";
}

function colorChangeSpanish(event){
  document.getElementById("lr").style.backgroundColor = "rgb(243, 189, 67)";
  document.getElementById("lr").style.zIndex = "1";
  document.getElementById("lru").style.backgroundColor = "rgb(177, 54, 52)";
  document.getElementById("rlu").style.backgroundColor = "rgb(243, 189, 67)";
  document.getElementById("rlu").style.zIndex = "1";
  document.getElementById("lro").style.backgroundColor = "rgb(177, 54, 52)";
  document.getElementById("rlo").style.backgroundColor = "rgb(177, 54, 52)";
}

function colorChangeAmazigh(event){
  document.getElementById("lr").style.backgroundColor = "rgb(177, 54, 52)";
  document.getElementById("lru").style.backgroundColor = "rgb(177, 54, 52)";
  document.getElementById("rlu").style.backgroundColor = "rgb(177, 54, 52)";
  document.getElementById("lro").style.backgroundColor = "rgb(177, 54, 52)";
  document.getElementById("rlo").style.backgroundColor = "rgb(243, 189, 67)";
  document.getElementById("rlo").style.zIndex = "1";
}

french.addEventListener("click", colorChangeFrench);
darija.addEventListener("click", colorChangeDarija);
spanish.addEventListener("click", colorChangeSpanish);
amazigh.addEventListener("click", colorChangeAmazigh);
arabic.addEventListener("click", colorChangeArabic);
