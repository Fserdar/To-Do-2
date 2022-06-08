const deger = document.getElementById("deger");
const sonuc = document.getElementById("sonuc");

const degerYakala = function (e) {
  sonuc.innerHTML = deger.value;
};

deger.addEventListener("input", onclick(degerYakala));
