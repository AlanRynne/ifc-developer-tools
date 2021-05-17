// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCsgPrimitive3D

import { IfcAxis2Placement3D, IfcGeometricRepresentationItem } from './'

/** IfcCsgPrimitive3D is an abstract supertype of all three dimensional primitives used as either tree root item, or as Boolean results within a CSG solid model.
 *
 * All 3D CSG primitives are defined within a three-dimensional placement coordinate system.
 */
abstract class IfcCsgPrimitive3D extends IfcGeometricRepresentationItem {
    constructor(Position:IfcAxis2Placement3D) {
        super()
        this.Position = Position
    }
    /** The placement coordinate system to which the parameters of each individual CSG primitive apply.
    */
    Position: IfcAxis2Placement3D
}

export default IfcCsgPrimitive3D