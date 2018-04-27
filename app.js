
let imieOsoby;             // deklaracja zmiennej na imie osoby
let rokUrodzeniaOsoby;     // deklaracja zmiennej na rok urodzenia osoby
let opiszOsobe;            // deklaracja zmiennej na funkcję opisującą osobę

// funkcja opisująca osobę
opiszOsobe = (imie, rokUrodzenia) => {
  console.log(imie + " urodził(a) się w " + rokUrodzenia + " roku.");
  console.log(imie + " ma ulubione powiedzonko: jakies-tam-powiedzonko");
  console.log(imie + " ma zainteresowania: jakies-zainteresowanie1, jakies-zainteresowanie2");
  console.log(imie + " prowadzi zajęcia z programowania: jeszcze-nie-podana");
}

imieOsoby = "Maciek";      // nadanie zmiennej wartości "Maciek"
rokUrodzeniaOsoby = 1973;
opiszOsobe(imieOsoby, rokUrodzeniaOsoby);

// druga osoba
imieOsoby = "Tosia";      // nadanie zmiennej wartości "Tosia"
rokUrodzeniaOsoby = 2007;
opiszOsobe(imieOsoby, rokUrodzeniaOsoby);