import Osoba from './Osoba';
import Zwierzak from './Zwierzak';

/*
Klasa Uczen zawiera informacje o uczniu
*/
class Nauczyciel extends Osoba {
  constructor(imie, rokUrodzenia, przedmiotGlowny, listaZwierzakow) {
    super(imie, rokUrodzenia, listaZwierzakow);
    this.przedmiotGlowny = przedmiotGlowny;
  }

  przedstawSie() {
    console.log(`Hej, jestem ${this.imie} i uczę przedmiotu ${this.przedmiotGlowny}.`)
    this.opowiedzOZwierzakach();
  }
}


const osoba3 = new Nauczyciel("Maciek", 1973, "programowanie");
osoba3.przedstawSie();