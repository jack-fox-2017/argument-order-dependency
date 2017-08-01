'use strict'

class House {

  constructor(userHouse) {
    this.address = userHouse['address']
    this.square_feet = userHouse['square_feet']
    this.num_bedrooms = userHouse['num_bedrooms'] || 3
    this.num_baths = userHouse['num_baths'] || 2
    this.cost = userHouse['cost'] || 320000
    this.down_payment = userHouse['down_payment'] || 0.20
    this.sold = userHouse['sold'] || false
    this.short_sale = userHouse['short_sale']
    this.has_tenants = userHouse['has_tenants'] || false
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
    return `${this.obscure_address()} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. Rp.${this.cost}, sold:${this.sold}`
  }
}

var Rumah = {
  address : 'Jl. Pramuka No. 12 Pondok Indah Jakarta Selatan',
  square_feet : 100,
  num_bedrooms : 2,
  num_baths : 2,
  cost : 12345,
  down_payment : 12345,
  sold : true,
  short_sale : true,
  has_tenants : false,
}

// const cool = new House('address', 100, 2, 2, 12345, 12345, true, true)
const cool = new House(Rumah)

console.log(cool.to_s())
