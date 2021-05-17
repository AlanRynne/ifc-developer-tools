// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStructuralLoadConfiguration

import { IfcStructuralLoadOrResult, IfcStructuralLoad } from './'
import { IfcLengthMeasure, IfcLabel } from '../types'

/** This class combines one or more load or result values in a 1- or 2-dimensional configuration
 *
 * Informal Propositions:
 */
 class IfcStructuralLoadConfiguration extends IfcStructuralLoad {
    constructor(Name:IfcLabel, Values:Array<IfcStructuralLoadOrResult>, Locations:Array<Array<IfcLengthMeasure>>) {
        super(Name)
        this.Values = Values
        this.Locations = Locations
    }
    /** List of load or result values.
    */
    Values: Array<IfcStructuralLoadOrResult>
    /** Locations of the load samples or result samples, given within the local coordinate system defined by the instance which uses this resource object.
     * Each item in the list of locations pertains to the values list item at the same list index.
     * This attribute is optional for configurations in which the locations are implicitly known from higher-level definitions.
    */
    Locations?: Array<Array<IfcLengthMeasure>>
}

export default IfcStructuralLoadConfiguration