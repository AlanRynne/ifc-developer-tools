// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcQuantityArea

import { IfcAreaMeasure, IfcLabel, IfcText } from '../types'
import { IfcNamedUnit, IfcPhysicalSimpleQuantity } from './'

/** IfcQuantityArea is a physical quantity that defines a derived area measure to provide an element's physical property.
 *
 * It is normally derived from the physical properties of the element under the specific measure rules given by a method of measurement.
 */
 class IfcQuantityArea extends IfcPhysicalSimpleQuantity {
    constructor(Name:IfcLabel, Description:IfcText, Unit:IfcNamedUnit, AreaValue:IfcAreaMeasure) {
        super(Name, Description, Unit)
        this.AreaValue = AreaValue
    }
    /** Area measure value of this quantity.
    */
    AreaValue: IfcAreaMeasure
}

export default IfcQuantityArea