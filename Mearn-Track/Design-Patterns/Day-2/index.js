"use strict";

class Store {
  constructor(name) {
    this.customers = [];
    this.products = [];
    this.newProduct = "";
    this.name = name;
  }

  regiester(customer) {
    this.customers.push(customer);
  }

  unregeister(customer) {
    this.customers = this.customers.filter((cust) => cust != customer);
  }

  releaseNewProduct(newProduct) {
    this.newProduct = newProduct;
    this.products.push(newProduct);

    this.notifyAll();
  }

  notifyAll() {
    this.customers.forEach((customer) => console.log(customer.update(this)));
  }
}

class Customer {
  constructor(name) {
    this.name = name;
  }

  update(notification) {
    return `hey ${this.name} welcome to ${notification.name} check our new product ${notification.newProduct}`;
  }
}

const cust1 = new Customer("ahmed");
const cust2 = new Customer("mohammed");

const store = new Store("Zara");
store.releaseNewProduct("cargo");
store.regiester(cust1);
store.notifyAll();

store.releaseNewProduct("Nike Jordan");
store.regiester(cust2);
store.notifyAll();

store.unregeister(cust1);
store.notifyAll();

class Attac {
  setStrategy() {
    return "Attac";
  }
}
class TikiTaka {
  setStrategy() {
    return "TikiTaka";
  }
}
class Defence {
  setStrategy() {
    return "Defence";
  }
}

class SetPlane {
  setPlane(plan) {
    this.plan = plan;
  }

  dispplayplan() {
    console.log(this.plan.setStrategy());
  }
}

const def = new Defence();
const tikiTaka = new TikiTaka();
const attack = new Attac();

const plan = new SetPlane();
plan.setPlane(def);
plan.dispplayplan();

plan.setPlane(tikiTaka);
plan.dispplayplan();
