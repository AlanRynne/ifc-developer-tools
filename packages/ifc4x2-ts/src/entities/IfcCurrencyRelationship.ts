// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCurrencyRelationship

import { IfcMonetaryUnit, IfcLibraryInformation, IfcResourceLevelRelationship } from './'
import { IfcPositiveRatioMeasure, IfcDateTime, IfcLabel, IfcText } from '../types'

/** IfcCurrencyRelationship defines the rate of exchange that applies between two designated currencies at a particular time and as published by a particular source
 *
 * An IfcCurrencyRelationship is used where there may be a need to reference an IfcCostValue in one currency to an IfcCostValue in another currency.
 *
 * It takes account of fact that currency exchange rates may vary by requiring the recording the date and time of the currency exchange rate used and the source that publishes the rate.
 *
 * There may be many sources and there are different strategies for currency conversion (spot rate, forward buying of currency at a fixed rate)
 *
 * The source for the currency exchange is defined as an instance of IfcLibraryInformation that includes a name and a URL.
 */
 class IfcCurrencyRelationship extends IfcResourceLevelRelationship {
    constructor(Name:IfcLabel, Description:IfcText, RelatingMonetaryUnit:IfcMonetaryUnit, RelatedMonetaryUnit:IfcMonetaryUnit, ExchangeRate:IfcPositiveRatioMeasure, RateDateTime:IfcDateTime, RateSource:IfcLibraryInformation) {
        super(Name, Description)
        this.RelatingMonetaryUnit = RelatingMonetaryUnit
        this.RelatedMonetaryUnit = RelatedMonetaryUnit
        this.ExchangeRate = ExchangeRate
        this.RateDateTime = RateDateTime
        this.RateSource = RateSource
    }
    /** The monetary unit from which an exchange is derived.
     * For instance, in the case of a conversion from GBP to USD, the relating monetary unit is GBP.
    */
    RelatingMonetaryUnit: IfcMonetaryUnit
    /** The monetary unit to which an exchange results.
     * For instance, in the case of a conversion from GBP to USD, the related monetary unit is USD.
    */
    RelatedMonetaryUnit: IfcMonetaryUnit
    /** The currently agreed ratio of the amount of a related monetary unit that is equivalent to a unit amount of the relating monetary unit in a currency relationship.
     * For instance, in the case of a conversion from GBP to USD, the value of the exchange rate may be 1.486 (USD) : 1 (GBP).
    */
    ExchangeRate: IfcPositiveRatioMeasure
    /** The date and time at which an exchange rate applies.
     * IFC4 CHANGE Type changed from IfcDateTimeSelect.
     * Attribute made optional.
    */
    RateDateTime?: IfcDateTime
    /** The source from which an exchange rate is obtained.
    */
    RateSource?: IfcLibraryInformation
}

export default IfcCurrencyRelationship