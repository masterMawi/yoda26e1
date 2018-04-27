// zmienna, której nie można modyfikować zawierająca funkcję opisująca osobę
const opiszOsobe = (imie) => {
  console.log(imie + " urodził(a) się w ktoryms-tam roku.");
  console.log(imie + " ma ulubione powiedzonko: jakies-tam-powiedzonko");
  console.log(imie + " ma zainteresowania: jakies-zainteresowanie1, jakies-zainteresowanie2");
  console.log(imie + " prowadzi zajęcia z programowania: jeszcze-nie-podana");
}

// funkcja, która opisze dwie osoby
const opiszDwieOsoby = (imie1, imie2) => {
  opiszOsobe(imie1);
  opiszOsobe(imie2);
}

opiszDwieOsoby("Maciek", "Tosia");
