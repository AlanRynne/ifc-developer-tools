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
    constructor(Name:IfcLabel, Description:IfcText, Unit:IfcNamedUnit, AreaValue:IfcAreaMeasure, Formula:IfcLabel) {
        super(Name, Description, Unit)
        this.AreaValue = AreaValue
        this.Formula = Formula
    }
    /** Area measure value of this quantity.
    */
    AreaValue: IfcAreaMeasure
    /** A formula by which the quantity has been calculated.
     * It can be assigned in addition to the actual value of the quantity.
     * Formulas could be mathematic calculations (like width x height), database links, or a combination.
     * The formula is for informational purposes only.
     * IFC4 CHANGE Attribute added to the end of the attribute list.
    */
    Formula?: IfcLabel
}

export default IfcQuantityArea