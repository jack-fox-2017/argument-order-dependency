'use strict'

class House {

  constructor(rumah) {
   this.address = rumah['address']
   this.square_feet = rumah['square_feet']
   this.num_bedrooms = rumah['num_bedrooms'] || 3
   this.num_baths = rumah['num_baths'] || 2
   this.cost = rumah['cost'] || 320000
   this.down_payment = rumah['down_payment'] || 0.20
   this.sold = rumah['sold'] || false
   this.short_sale = rumah['short_sale']
   this.has_tenants = rumah['has_tenants'] || false
  }

  obscure_address() {
    return this.address.replace(/.{7}$/g, '****')
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

let Rumah = {
  address : "jl.kebonjati sukabumi",
  square_feet : 100,
  num_bedrooms : 5,
  num_baths : 3,
  cost : 7000000,
  down_payment : 7,
  sold : "sold",
  short_sale : "short",
  has_tenants : "No"
}

// const cool = new House('address', 100, 2, 2, 12345, 12345, true, true)
const cool = new House(Rumah)
console.log(cool.to_s())
