'use strict'

class House {

  constructor(param) { //dependency
    this.address = param['address']
    this.square_feet = param['square_feet']
    this.num_bedrooms = param['num_bedrooms'] || 3
    this.num_baths = param['num_baths'] || 2
    this.cost = param['cost'] || 320000
    this.down_payment = param['down_payment'] || 0.20
    this.sold = param['sold'] || false
    this.short_sale = param['short_sale']
    this.has_tenants = param['has_tenants'] || false
  }

  obscure_address() {
    return this.address.replace(/.{10}$/g, '******')
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
    return `
    Address initial : ${this.obscure_address()}
    Address : ${this.address}
    Square : ${this.square_feet} sq. ft.,
    Bedroom : ${this.num_bedrooms} bed
    Num of bath : ${this.num_baths} bath.
    Cost : ${this.cost}
    Short Sale? ${this.short_sale}
    Has Tenant? ${this.has_tenants}
    Sold : ${this.sold}
    DP : ${this.down_payment}
    `
  }
}

let objParam = {
  address : 'Kebayoran Lama',
  square_feet : 100,
  num_bedrooms : 3,
  num_baths : 2,
  // cost : , //cost tetap muncul hasil karena || 320000 pada this.cost = param['cost'] || 320000 di constructor
  down_payment : 0.20,
  // sold : true,
  short_sale :  'quick',
  has_tenants : true
}
const cool = new House(objParam)

console.log(cool.to_s())
