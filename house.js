'use strict'

class House {

  constructor(value) {
    this.address = value.address
    this.square_feet = value.square_feet
    this.num_bedrooms = value.num_bedrooms || 3
    this.num_baths = value.num_baths || 2
    this.cost = value.cost || 320000
    this.down_payment = value.down_payment || 0.20
    this.sold = value.sold || false
    this.short_sale = value.short_sale
    this.has_tenants = value.has_tenants || false
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

const cool = new House({address :'Jln.PIM',square_feet : 100, num_bedrooms: 2, num_bath : 2, cost : 12345, down_payment : 12345, sold : true, short_sale : true})

console.log(cool.to_s())
