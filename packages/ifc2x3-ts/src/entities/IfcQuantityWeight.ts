// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcQuantityWeight

import { IfcMassMeasure, IfcLabel, IfcText } from '../types'
import { IfcNamedUnit, IfcPhysicalSimpleQuantity } from './'

/** IfcQuantityWeight is a physical element quantity that defines a derived weight measure to provide an element's physical property.
 *
 * It is normally derived from the physical properties of the element under the specific measure rules given by a method of measurement.
 */
 class IfcQuantityWeight extends IfcPhysicalSimpleQuantity {
    constructor(Name:IfcLabel, Description:IfcText, Unit:IfcNamedUnit, WeightValue:IfcMassMeasure) {
        super(Name, Description, Unit)
        this.WeightValue = WeightValue
    }
    /** Mass measure value of this quantity.
    */
    WeightValue: IfcMassMeasure
}

export default IfcQuantityWeight