setInterval(() => {
    var d = new Date();
  
    var b = d.getMinutes() *6+90;
    var a = (d.getHours()) *30+90 + b/60;
    var c = d.getSeconds() *6+90;
    document.getElementById("id3").style.transform = "rotate("+c+"deg)";
    document.getElementById("id2").style.transform = "rotate("+b+"deg)";
    document.getElementById("id1").style.transform = "rotate("+a+"deg)";

    console.log(a)
}, 1000);

 