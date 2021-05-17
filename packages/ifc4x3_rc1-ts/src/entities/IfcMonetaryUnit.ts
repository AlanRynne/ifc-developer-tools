// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcMonetaryUnit

import { IfcLabel } from '../types'

/** IfcMonetaryUnit is a unit to define currency for money.
 */
 class IfcMonetaryUnit  {
    constructor(Currency:IfcLabel) {

        this.Currency = Currency
    }
    /** Code or name of the currency.
     * Permissible values are the three-letter alphabetic currency codes as per ISO 4217, for example CNY, EUR, GBP, JPY, USD.
    */
    Currency: IfcLabel
}

export default IfcMonetaryUnit