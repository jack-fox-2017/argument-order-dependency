'use strict'

class House {

  constructor(komponen) {
    this.address = komponen['address']
    this.square_feet = komponen['square_feet']
    this.num_bedrooms = komponen['num_bedrooms']
    this.num_baths = komponen['num_baths']
    this.cost = komponen['cost']
    this.down_payment = komponen['down_payment']
    this.sold = komponen.sold
    this.short_sale = komponen['short_sale']
    this.has_tenants = komponen['has_tenants']
  }

  obscure_address() {
    return this.address.replace(/.{10}$/g, '****')
  }

  buy(money, good_credit) {
    if (money >= this.down_payment && good_credit) {
      this.sold = true
    }
  }

  down_payment() {
    return this.cost*this.down_payment
  }

  to_s() {
    return `Alamat di ${this.obscure_address()}, Luasnya ${this.square_feet} sq. ft., ${this.num_bedrooms} bed , ${this.num_baths} bath.
            Harganya yaitu $${this.cost}`

  }
}

const cool = new House({address:'Jakarta',
                        square_feet: 100,
                        num_bedrooms: 2,
                        num_baths: 2,
                        cost: 12345,
                        down_payment: 0.2,
                        sold: true,
                        short_sale: true,
                        has_tenants:true
                        })
//, 100, 2, 2, 12345, 12345, true, true

console.log(cool.to_s());
