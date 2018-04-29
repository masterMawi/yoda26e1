
import Osoba from './model/Osoba';

// zmienna, której nie można modyfikować zawierająca funkcję opisująca osobę
const opiszOsobe = (osoba, index) => {
  if(index) {
    console.log(`${index}: ${osoba.imie}`);
  }
  console.log(`${osoba.imie} urodził(a) się w ktoryms-tam roku.`);
  console.log(`${osoba.imie} ma ulubione powiedzonko: jakies-tam-powiedzonko`);
  console.log(`${osoba.imie} ma zainteresowania: jakies-zainteresowanie1, jakies-zainteresowanie2`);
  console.log(`${osoba.imie} prowadzi zajęcia z programowania: jeszcze-nie-podana`);
}

// funkcja, która opisze dwie osoby
const opiszListeOsob = (listaOsob) => {
  listaOsob.map(opiszOsobe);
}

let osoba1 = new Osoba("Maciek", 1973);
let osoba2 = new Osoba("Tosia", 2007);
let osoba3 = new Osoba("Matylda", 2005);
let osoba4 = new Osoba("Milena", 2013);

opiszOsobe(osoba1);
opiszListeOsob([osoba1, osoba2, osoba3, osoba4]);



