/*
  Klasa Osoba służy do przechowywania danych pojedynczej osoby, które to dane będziemy
  wyświetlać w aplikacji
*/
class Osoba {
  constructor(imie, rokUrodzenia){
    this.imie = imie;
    this.rokUrodzenia = rokUrodzenia;
  }

  przedstawSie() {
    console.log(`Hej, jestem ${this.imie} i urodziłam/urodziłem się w ${this.rokUrodzenia} roku`);
  }
}

const osoba1 = new Osoba("Maciek", 1973);
osoba1.przedstawSie();