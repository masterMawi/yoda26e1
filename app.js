
let imieOsoby;             // deklaracja zmiennej o nazwie imieOsoby
let opiszOsobe;            // deklaracja zmiennej na funkcję opisującą osobę

// funkcja opisująca osobę
opiszOsobe = () => {
  console.log(imieOsoby + " urodził(a) się w ktoryms-tam roku.");
  console.log(imieOsoby + " ma ulubione powiedzonko: jakies-tam-powiedzonko");
  console.log(imieOsoby + " ma zainteresowania: jakies-zainteresowanie1, jakies-zainteresowanie2");
  console.log(imieOsoby + " prowadzi zajęcia z programowania: jeszcze-nie-podana");
}

imieOsoby = "Maciek";      // nadanie zmiennej wartości "Maciek"
opiszOsobe(imieOsoby);

// druga osoba
imieOsoby = "Tosia";      // nadanie zmiennej wartości "Tosia"
opiszOsobe(imieOsoby);