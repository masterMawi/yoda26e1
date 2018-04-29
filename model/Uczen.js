import Osoba from './Osoba';
import Zwierzak from './Zwierzak';

/*
Klasa Uczen zawiera informacje o uczniu
*/
class Uczen extends Osoba {
  constructor(imie, rokUrodzenia, klasa, listaZwierzakow) {
    super(imie, rokUrodzenia, listaZwierzakow);
    this.klasa = klasa;
  }

  przedstawSie() {
    console.log(`Hej, jestem ${this.imie} z ${this.klasa} i mam ${this.wiek()} lat.`)
    this.opowiedzOZwierzakach();
  }
}


const zwierzak2_1 = new Zwierzak("Mruczuś", "kot", "miau");
const osoba2 = new Uczen("Zuzia", 2007, "Va", [zwierzak2_1]);
osoba2.przedstawSie();