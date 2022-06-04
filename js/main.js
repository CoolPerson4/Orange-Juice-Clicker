var oa = 30;

var oja = 0;

var c = 0;

var soa = 0;

var sou = false;

var cd = document.getElementById("cash");

var od = document.getElementById("oranges");

var ojd = document.getElementById("orangejuice");

var sod = document.getElementById("secretorange");

var soimg = document.getElementById("so");

var io = document.getElementById("io");

var rate = document.getElementById("r");

var sweet = document.getElementById("s");

var bitter = document.getElementById("b");

od.value = "Oranges: " + oa;
ojd.value = "Orange Juice: " + oja;
cd.value = "Cash: " + c;
sod.value = "Secret Oranges: " + soa;
rate.value = "Rating: 5/10";
sweet.value = "Sweet: 7/10";
bitter.value = "Bitter: 2/10";

function ao(){
  oa = oa + 1
  od.value = "Oranges: " + oa
}

function aoj(){
  if(oa >= 5){
    oja = oja + 1
    oa = oa - 5
    ojd.value = "Orange Juice: " + oja;
    od.value = "Oranges: " + oa;
    if(oja >= 5){
      sou = sou = true;
      soimg.src = "magicorange.png"
      sod.value = "Virtual Oranges: " + soa
    }
  }
}

function selloj(){
  if(oja >= 0.1){
    c = c + 7
    oja = oja - 1
    cd.value = "Cash: " + c
    ojd.value = "Orange Juice: " + oja
  }
}

function aso(){
  if(sou == true){
    soa = soa + 1
    oa = oa + 5
    oja = oja + 3
    sod.value = "Virtual Oranges: " + soa
    od.value = "Oranges: " + oa
    ojd.value = "Orange Juice: " + oja
  }
}
function change(){
  if(sou == true){
    io.src = "magicorange.png"
    rate.value = "Rating: 8/10"
    sweet.value = "Sweet: 9/10"
    bitter.value = "Bitter: 0.5/10"
  }
  else{
    alert('You need to unlock the secret orange in order to upgrade.');
  }
}

function sello(){
  c = c + 3
  oa = oa - 1
  cd.value = "Cash: " + c
  od.value = "Oranges: " + oa
}

function sellso(){
  if(so >= 0.1){
    so = so - 1
    c = c + 15
    sod.value = "Virtual Oranges: " + so;
    cd.value = "Cash: " + c;
  }
}