// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcQuantityTime

import { IfcTimeMeasure, IfcLabel, IfcText } from '../types'
import { IfcNamedUnit, IfcPhysicalSimpleQuantity } from './'

/** IfcQuantityTime is an element quantity that defines a time measure to provide a property of time related to an element.
 *
 * It is normally given by the recipe information of the element under the specific measure rules given by a method of measurement.
 */
 class IfcQuantityTime extends IfcPhysicalSimpleQuantity {
    constructor(Name:IfcLabel, Description:IfcText, Unit:IfcNamedUnit, TimeValue:IfcTimeMeasure) {
        super(Name, Description, Unit)
        this.TimeValue = TimeValue
    }
    /** Time measure value of this quantity.
    */
    TimeValue: IfcTimeMeasure
}

export default IfcQuantityTime