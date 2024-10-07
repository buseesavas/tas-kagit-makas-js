let bilgisayarHamlesi = ["taş", "kağıt", "makas"].at(
  Math.floor(Math.random() * 3)
);
let oyuncuHamlesi = prompt("taş mı? kağıt mı? makas mı?").toLowerCase();
if (
  (bilgisayarHamlesi == "taş" && oyuncuHamlesi == "kağıt") ||
  (bilgisayarHamlesi == "kağıt" && oyuncuHamlesi == "makas") ||
  (bilgisayarHamlesi == "makas" && oyuncuHamlesi == "taş")
) {
  alert(
    "Bilgisayar seçimi: " +
      bilgisayarHamlesi +
      ". " +
      "Sen kazandın. Tebrikler :)"
  );
} else if (
  (bilgisayarHamlesi == "taş" && oyuncuHamlesi == "makas") ||
  (bilgisayarHamlesi == "kağıt" && oyuncuHamlesi == "taş") ||
  (bilgisayarHamlesi == "makas" && oyuncuHamlesi == "kağıt")
) {
  alert(
    "Bilgisayar seçimi: " +
      bilgisayarHamlesi +
      ". " +
      "Bilgisayar kazandı. Tekrar dene :("
  );
} else if (
  (bilgisayarHamlesi == "taş" && oyuncuHamlesi == "taş") ||
  (bilgisayarHamlesi == "kağıt" && oyuncuHamlesi == "kağıt") ||
  (bilgisayarHamlesi == "makas" && oyuncuHamlesi == "makas")
) {
  alert("Bilgisayar seçimi: taş. Berabere. Tekrar dene..");
} else {
  alert("Geçersiz kelime!");
}
