'use strict'

class House {

  constructor(property) {
    // this.address = address
    // this.square_feet = square_feet
    // this.num_bedrooms = num_bedrooms || 3
    // this.num_baths = num_baths || 2
    // this.cost = cost || 320000
    // this.down_payment = down_payment || 0.20
    // this.sold = sold || false
    // this.short_sale = short_sale
    // this.has_tenants = has_tenants || false
    this.address = property['address']
    this.square_feet = property['square_feet']
    this.num_bedrooms = property['num_bedrooms'] || 3
    this.num_baths = property['num_baths'] || 2
    this.cost = property['cost'] || 320000
    this.down_payment = property['down_payment'] || 0.20
    this.sold = property['sold'] || false
    this.short_sale = property['short_sale']
    this.has_tenants = property['has_tenants'] || false
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

let newHouse = {
  address : 'Pondok Indah Street, South Jakarta',
  square_feet : 100,
  num_bedrooms : 2,
  num_baths : 2,
  cost : 123456,
  down_payment : 123,
  sold : true,
  short_sale : true
}

const cool = new House(newHouse)

console.log(cool.to_s())
