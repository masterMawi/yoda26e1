import Zwierzak from './Zwierzak';

/*
  Klasa Osoba służy do przechowywania danych pojedynczej osoby, które to dane będziemy
  wyświetlać w aplikacji
*/
class Osoba {
  constructor(imie, rokUrodzenia, zwierzak){
    this.imie = imie;
    this.rokUrodzenia = rokUrodzenia;
    this.zwierzak = zwierzak;
  }

  przedstawSie() {
    console.log(`Hej, jestem ${this.imie} i mam ${this.wiek()} lat`);
    if(this.zwierzak)
      console.log(`  Mam zwierzaka. Jest to ${this.zwierzak.gatunek} i wabi się ${this.zwierzak.jakSieWabi}`);
    else
      console.log(`  Nie mam zwierzaka`);
  }

  // metoda oblicza aktualny wiek osoby
  wiek() {
    let dataBiezaca = new Date();
    let rokBiezacy =  dataBiezaca.getFullYear();
    return rokBiezacy - this.rokUrodzenia; 
  }
}

export default Osoba;

const osoba1 = new Osoba("Maciek", 1973);
osoba1.przedstawSie();

const zwierzak1 = new Zwierzak("Mruczuś", "kot", "miau");
const osoba2 = new Osoba("Zuzia", 2007, zwierzak1);
osoba2.przedstawSie();