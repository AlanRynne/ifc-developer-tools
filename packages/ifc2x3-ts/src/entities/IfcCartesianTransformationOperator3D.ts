// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCartesianTransformationOperator3D

import { IfcDirection, IfcCartesianPoint, IfcCartesianTransformationOperator } from './'

/** An IfcCartesianTransformationOperator defines a geometric transformation in three-dimensional space.
 */
 class IfcCartesianTransformationOperator3D extends IfcCartesianTransformationOperator {
    constructor(Axis1:IfcDirection, Axis2:IfcDirection, LocalOrigin:IfcCartesianPoint, Scale:number, Axis3:IfcDirection) {
        super(Axis1, Axis2, LocalOrigin, Scale)
        this.Axis3 = Axis3
    }
    /** The exact direction of U[3], the derived Z axis direction.
    */
    Axis3?: IfcDirection
}

export default IfcCartesianTransformationOperator3D