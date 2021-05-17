// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcQuantityLength

import { IfcLengthMeasure, IfcLabel, IfcText } from '../types'
import { IfcNamedUnit, IfcPhysicalSimpleQuantity } from './'

/** IfcQuantityLength is a physical quantity that defines a derived length measure to provide an element's physical property.
 *
 * It is normally derived from the physical properties of the element under the specific measure rules given by a method of measurement.
 */
 class IfcQuantityLength extends IfcPhysicalSimpleQuantity {
    constructor(Name:IfcLabel, Description:IfcText, Unit:IfcNamedUnit, LengthValue:IfcLengthMeasure) {
        super(Name, Description, Unit)
        this.LengthValue = LengthValue
    }
    /** Length measure value of this quantity.
    */
    LengthValue: IfcLengthMeasure
}

export default IfcQuantityLength