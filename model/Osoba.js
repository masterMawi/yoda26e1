import Zwierzak from './Zwierzak';

/*
  Klasa Osoba służy do przechowywania danych pojedynczej osoby, które to dane będziemy
  wyświetlać w aplikacji
*/
class Osoba {
  constructor(imie, rokUrodzenia, listaZwierzakow){
    this.imie = imie;
    this.rokUrodzenia = rokUrodzenia;
    this.listaZwierzakow= listaZwierzakow;
  }

  przedstawSie() {
    console.log(`Hej, jestem ${this.imie} i mam ${this.wiek()} lat`);
    this.opowiedzOZwierzakach();
  }

  opowiedzOZwierzakach() {
    if(this.listaZwierzakow && this.listaZwierzakow.length > 0) {
      console.log(`  Mam zwierzaków ${this.listaZwierzakow.length}. Są to:`)
      this.listaZwierzakow.forEach((zwierzak, indeks) => {
        console.log(`  ${indeks+1}: ${zwierzak.gatunek} i wabi się ${zwierzak.jakSieWabi}`);
      });
    }
    else
      console.log(`  Nie mam żadnego zwierzaka`);
  }

  // metoda oblicza aktualny wiek osoby
  wiek() {
    let dataBiezaca = new Date();
    let rokBiezacy =  dataBiezaca.getFullYear();
    return rokBiezacy - this.rokUrodzenia; 
  }
}

export default Osoba;

/*
const osoba1 = new Osoba("Maciek", 1973);
osoba1.przedstawSie();

const zwierzak2_1 = new Zwierzak("Mruczuś", "kot", "miau");
const osoba2 = new Osoba("Zuzia", 2007, [zwierzak2_1]);
osoba2.przedstawSie();

const zwierzak3_1 = new Zwierzak("Sierściuch", "kot", "miauuuu");
const zwierzak3_2 = new Zwierzak("Nemo", "rybka", "bul-bul");
const zwierzak3_3 = new Zwierzak("Świergol", "papuga", "daj krakersa");
const osoba3 = new Osoba("Julia", 2006, [zwierzak3_1, zwierzak3_2, zwierzak3_3]);
osoba3.przedstawSie();
*/
