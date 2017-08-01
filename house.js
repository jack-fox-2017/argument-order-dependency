'use strict'

class House {

  constructor(components) {
    this.address = components['address'];
    this.square_feet = components['square_feet'];
    if(components.hasOwnProperty('num_bedrooms')){
      this.num_bedrooms = components['num_bedrooms'];
    }
    else{
      this.num_bedrooms = 3;
    }
    if(components.hasOwnProperty('num_baths')){
      this.num_baths = components['num_baths'];
    }
    else{
      this.num_baths = 2;
    }
    if(components.hasOwnProperty('cost')){
      this.cost = components['cost'];
    }
    else{
      this.cost = 320000;
    }
    if(components.hasOwnProperty('down_payment')){
      this.down_payment = components['down_payment'];
    }
    else{
      this.down_payment = 0.20;
    }
    if(components.hasOwnProperty('sold')){
      this.sold = components['sold'];
    }
    else{
      this.sold = false;
    }
    this.short_sale = components['short_sale'];
    if(components.hasOwnProperty('has_tenants')){
      this.has_tenants = components['has_tenants'];
    }
    else{
      this.has_tenants = false;
    }
  }

  obscure_address() {
    return this.address.replace(/.{10}$/g, '****')
  }

  buy(money, good_credit) {
    if (money >= down_payment && good_credit) {
      this.sold = true
    }
  }

  down_payment() {
    return cost * this.down_payment
  }

  to_s() {
    return `${this.obscure_address()} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. ${this.cost}`
  }
}

let param = {address:'address',square_feet:100,num_bedrooms:2,num_baths:2,cost:12345,down_payment:12345,sold:true,short_sale:true,has_tenants:true};
const cool = new House(param);

console.log(cool.to_s())
// let o = new Object();
// o.prop = 'exists';
// console.log(o.hasOwnProperty('prop'));
