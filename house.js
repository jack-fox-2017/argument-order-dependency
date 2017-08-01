'use strict'

class House {

  constructor(par) {
    this.address = par['address']
    this.square_feet = par['square_feet']
    this.num_bedrooms = par['num_bedrooms']
    this.num_baths = par['num_baths']
    this.cost = par['cost']
    this.down_payment = par['down_payment']
    this.sold = par['sold']
    this.short_sale = par['short_sale']
    this.has_tenants = par['has_tenants']
  }

  obscure_address() {
    return this.address.replace(/.{10}$/g, '****')
  }

  buy(money, good_credit) {
    if (money >= down_payment && good_credit) {
      this.sold = true
    }
  }

  // order(par) {
  //   let address = par['address']
  //   let square_feet = par['square_feet']
  //   let num_bedrooms = par['num_bedrooms']
  //   let num_baths = par['num_baths']
  //   let cost = par['cost']
  //   let down_payment = par['down_payment']
  //   let sold = par['sold']
  //   let short_sale = par['short_sale']
  //   let has_tenants = par['has_tenants']
  // }

  down_payment() {
    return this.cost * this.down_payment
  }

  to_s() {
    // let obj = {
    //   address: this.address,
    //   square_feet: this.square_feet,
    //   num_bedrooms: this.num_bedrooms,
    //   num_baths: this.num_baths,
    //   cost: this.cost,
    // }
    // return obj
    return `${this.obscure_address()} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. ${this.cost}`
  }
}

var imah = {
  address: 'jalan jauh jauh, no. 12, kecamatan tidak ada',
  square_feet: 500,
  num_bedrooms: 10,
  num_baths: 5,
  cost: 150000000,
  down_payment: 15000000,
  sold: false,
  short_sale: 10000000,
  has_tenants: true,
}
const cool = new House(imah)
// cool.obscure_address()
console.log(cool.to_s())