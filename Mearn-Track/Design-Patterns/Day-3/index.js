"use strict";

class Pizza {
  ingredients() {}
}

class Margrita extends Pizza {
  ingredients() {
    console.log("Margrita pizza ");
  }
}

class FarmHouse extends Pizza {
  ingredients() {
    console.log("farm house Pizza");
  }
}

class ChickenPizza extends Pizza {
  ingredients() {
    console.log("Chicken Pizza");
  }
}

class PizzaCocking extends Pizza {
  constructor(pizzaCocking) {
    super();
    this.pizzaCocking = pizzaCocking;
  }
  ingredients() {
    this.pizzaCocking.ingredients();
  }
}

class HalibinoAdd extends PizzaCocking {
  ingredients() {
    console.log("Add Halibino to Pizza");
  }
}

class HotSauceAdd extends PizzaCocking {
  ingredients() {
    console.log("Add Hot Sauceto Pizza");
  }
}

const pizza1 = new Margrita();
pizza1.ingredients();

const addHali = new HalibinoAdd(pizza1);
addHali.ingredients();
