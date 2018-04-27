
let imieOsoby;             // deklaracja zmiennej na imie osoby
let rokUrodzeniaOsoby;     // deklaracja zmiennej na rok urodzenia osoby
let opiszOsobe;            // deklaracja zmiennej na funkcję opisującą osobę

// funkcja opisująca osobę
opiszOsobe = () => {
  console.log(imieOsoby + " urodził(a) się w " + rokUrodzeniaOsoby + " roku.");
  console.log(imieOsoby + " ma ulubione powiedzonko: jakies-tam-powiedzonko");
  console.log(imieOsoby + " ma zainteresowania: jakies-zainteresowanie1, jakies-zainteresowanie2");
  console.log(imieOsoby + " prowadzi zajęcia z programowania: jeszcze-nie-podana");
}

imieOsoby = "Maciek";      // nadanie zmiennej wartości "Maciek"
rokUrodzeniaOsoby = 1973;
opiszOsobe();

// druga osoba
imieOsoby = "Tosia";      // nadanie zmiennej wartości "Maciek"

console.log(imieOsoby + " urodził(a) się w ktoryms-tam roku.");
console.log(imieOsoby + " ma ulubione powiedzonko: jakies-tam-powiedzonko");
console.log(imieOsoby + " ma zainteresowania: jakies-zainteresowanie1, jakies-zainteresowanie2");
console.log(imieOsoby + " prowadzi zajęcia z programowania: jeszcze-nie-podana");