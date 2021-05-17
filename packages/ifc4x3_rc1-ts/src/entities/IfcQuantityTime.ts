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
    constructor(Name:IfcLabel, Description:IfcText, Unit:IfcNamedUnit, TimeValue:IfcTimeMeasure, Formula:IfcLabel) {
        super(Name, Description, Unit)
        this.TimeValue = TimeValue
        this.Formula = Formula
    }
    /** Time measure value of this quantity.
    */
    TimeValue: IfcTimeMeasure
    /** A formula by which the quantity has been calculated.
     * It can be assigned in addition to the actual value of the quantity.
     * Formulas could be mathematic calculations (like width x height), database links, or a combination.
     * The formula is for informational purposes only.
     * IFC4 CHANGE Attribute added to the end of the attribute list.
    */
    Formula?: IfcLabel
}

export default IfcQuantityTime