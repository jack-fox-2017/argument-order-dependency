'use strict'

class House {

  constructor(value) {
    this.address = value['address']
    this.square_feet = value['square_feet']
    this.num_bedrooms = value['num_bedrooms'] || 3
    this.num_baths = value['num_baths'] || 2
    this.cost = value['cost'] || 320000
    this.down_payment = value['down_payment'] || 0.20
    this.sold = value['sold'] || false
    this.short_sale = value['short_sale']
    this.has_tenants = value['has_tenants'] || false
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
    //console.log("ini address: " +this.obscure_address()+ "ini bdadfdas" +this.square_feet());
    return `Ini address: ${this.obscure_address()} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. ${this.cost}`
  }
}

let Obj = {
  address : 'Jln Sudirman apa gitu',
  square_feet : 1232,
  num_bedrooms : 234,
  num_baths : 44,
  cost : 3434534,
  down_payment : 23,
  sold : '',
  short_sale : '',
  has_tenants : true
};

const cool = new House(Obj)

console.log(cool.to_s())
