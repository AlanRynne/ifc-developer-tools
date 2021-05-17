// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPolyLoop

import { IfcCartesianPoint, IfcLoop } from './'

/** Informal Propositions:
 */
 class IfcPolyLoop extends IfcLoop {
    constructor(Polygon:Array<IfcCartesianPoint>) {
        super()
        this.Polygon = Polygon
    }
    /** List of points defining the loop.
     * There are no repeated points in the list.
    */
    Polygon: Array<IfcCartesianPoint>
}

export default IfcPolyLoop