
let imieOsoby;             // deklaracja zmiennej o nazwie imieOsoby
let opiszOsobe;            // deklaracja zmiennej na funkcję opisującą osobę

// funkcja opisująca osobę
opiszOsobe = (imie) => {
  console.log(imie + " urodził(a) się w ktoryms-tam roku.");
  console.log(imie + " ma ulubione powiedzonko: jakies-tam-powiedzonko");
  console.log(imie + " ma zainteresowania: jakies-zainteresowanie1, jakies-zainteresowanie2");
  console.log(imie + " prowadzi zajęcia z programowania: jeszcze-nie-podana");
}

imieOsoby = "Maciek";      // nadanie zmiennej wartości "Maciek"
opiszOsobe(imieOsoby);

// druga osoba
opiszOsobe("Tosia");