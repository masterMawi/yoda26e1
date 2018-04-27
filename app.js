
let opiszOsobe;            // deklaracja zmiennej na funkcję opisującą osobę

// funkcja opisująca osobę
opiszOsobe = (imie, rokUrodzenia) => {
  console.log(`${imie} urodził(a) się w ${rokUrodzenia} roku.`);
  console.log(`${imie} ma ulubione powiedzonko: jakies-tam-powiedzonko`);
  console.log(`${imie} ma zainteresowania: jakies-zainteresowanie1, jakies-zainteresowanie2`);
  console.log(`${imie} prowadzi zajęcia z programowania: jeszcze-nie-podana`);
}

opiszOsobe("Maciek", 1973);
opiszOsobe("Tosia", 2007);