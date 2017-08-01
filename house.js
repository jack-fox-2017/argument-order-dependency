'use strict'

class House {

  constructor(kost) {
    this.address = kost['address']
    this.square_feet = kost['square_feet']
    this.num_bedrooms = kost['num_bedrooms'] || 3
    this.num_baths = kost['num_baths'] || 2
    this.cost = kost['cost'] || 320000
    this.down_payment = kost['down_payment'] || 0.20
    this.sold = kost['sold'] || false
    this.short_sale = kost['short_sale']
    this.has_tenants = kost['has_tenants'] || false
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

let Kostan = {
  address : "jl.pondok pinang",
  square_feet : 1000,
  num_bedrooms : 20,
  num_baths : 8,
  cost : 5000000000,
  down_payment : 7.5,
  sold : "sold",
  short_sale : "short",
  has_tenants : "No"
}

// const cool = new House('address', 100, 2, 2, 12345, 12345, true, tru)
const cool = new House(Kostan)

console.log(cool.to_s())
