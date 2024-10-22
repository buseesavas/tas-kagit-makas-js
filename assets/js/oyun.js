sifirlaBtn.addEventListener("click", skorSifirla);
tasBtn.addEventListener("click", () => hamleSec("taş"));
kagitBtn.addEventListener("click", () => hamleSec("kağıt"));
makasBtn.addEventListener("click", () => hamleSec("makas"))

const bilgisayarHamleSecenekleri = ["taş", "kağıt", "makas"];

function bilgisayarHamlesi() {
  return bilgisayarHamleSecenekleri.at(Math.floor(Math.random() * 3));
}

function hamleSec(oyuncuHamlesi) {
  const bilgisayarSecimi = bilgisayarHamlesi();
  bilgisayarSecimiTxt.innerText = bilgisayarSecimi;

if (
  (bilgisayarSecimi == "taş" && oyuncuHamlesi == "kağıt") ||
  (bilgisayarSecimi == "kağıt" && oyuncuHamlesi == "makas") ||
  (bilgisayarSecimi == "makas" && oyuncuHamlesi == "taş")
) {
  oyuncuSayac();
} else if (
  (bilgisayarSecimi == "taş" && oyuncuHamlesi == "makas") ||
  (bilgisayarSecimi == "kağıt" && oyuncuHamlesi == "taş") ||
  (bilgisayarSecimi == "makas" && oyuncuHamlesi == "kağıt")
) {
  bilgisayarSayac();
} else {
  kazanan.innerText = 'Berabere'
} 
}

let oyuncuSkorSayac = 0;
function oyuncuSayac() {
  oyuncuSkorSayac++;
  oyuncuSkor.innerText = oyuncuSkorSayac;
  kazanan.innerText = "Oyuncu";
}

let bilgisayarSkorSayac = 0;
function bilgisayarSayac() {
  bilgisayarSkorSayac++;
  bilgisayarSkor.innerText = bilgisayarSkorSayac;
  kazanan.innerText = "Bilgisayar";
}



function skorSifirla() {
  oyuncuSkor.innerText = 0;
  bilgisayarSkor.innerText = 0;
  kazanan.innerText = ' ';
  bilgisayarSecimiTxt.innerText = ' '
  bilgisayarSkorSayac = 0;
  oyuncuSkorSayac = 0;
}