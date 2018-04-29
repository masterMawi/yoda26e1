/*
Klasa Zwierzak przechowuje dane pupila
*/
class Zwierzak {
  constructor(jakSieWabi, gatunek, odglos){
    this.jakSieWabi = jakSieWabi;
    this.gatunek = gatunek;
    this.odglos = odglos;
  }

  dajGlos() {
    console.log(this.odglos);
  }
}

export default Zwierzak;

//let zwierzak1 = new Zwierzak("Tuptuś", "żółw", "tup-tup");
//zwierzak1.dajGlos();