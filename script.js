function Telefon(brand, model, price, color) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.color = color;
}
Telefon.prototype.printInfo = function() {
    console.log("Marka telefonu to " + this.brand + ", model to " + this.model + ", kolor to " + this.color + ", a cena to " + this.price + ".");
}
var SamsungGalaxyS6 = new Telefon("Samsung", "GalaxyS6", 1649, "czarny");
var iPhone6S = new Telefon("Apple", "iPhone6S", 2250, "srebrny");
var OnePlusOne = new Telefon("OnePlus", "One", 1299, "czarny");
var LG_k10 = new Telefon("LG", "k10", 675, "biały");

SamsungGalaxyS6.printInfo();
iPhone6S.printInfo();
OnePlusOne.printInfo();
LG_k10.printInfo();