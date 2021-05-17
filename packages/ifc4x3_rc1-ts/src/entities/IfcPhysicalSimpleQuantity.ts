// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPhysicalSimpleQuantity

import { IfcNamedUnit, IfcPhysicalQuantity } from './'
import { IfcLabel, IfcText } from '../types'

/** The physical quantity, IfcPhysicalSimpleQuantity, is an entity that holds a single quantity measure value (as defined at the subtypes of IfcPhysicalSimpleQuantity) together with a semantic definition of the usage for the measure value
 *
 * A section "Quantity Use Definition" at individual entities as subtypes of IfcBuildingElement gives guidance to the usage of the Name attribute to characterize the individual quantities.
 *
 * If the Unit attribute is given, the value attribute (introduced at the level of subtypes of IfcPhysicalSimpleQuantity) are given as quantities of this unit, otherwise the global unit definitions (given by IfcUnitAssignment) are used.
 */
abstract class IfcPhysicalSimpleQuantity extends IfcPhysicalQuantity {
    constructor(Name:IfcLabel, Description:IfcText, Unit:IfcNamedUnit) {
        super(Name, Description)
        this.Unit = Unit
    }
    /** Optional assignment of a unit.
     * If no unit is given, then the global unit assignment, as established at the IfcProject, applies to the quantity measures.
    */
    Unit?: IfcNamedUnit
}

export default IfcPhysicalSimpleQuantity