// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCartesianTransformationOperator3DnonUniform

import { IfcDirection, IfcCartesianPoint, IfcCartesianTransformationOperator3D } from './'

/** A Cartesian transformation operator 3d non uniform defines a geometric transformation in three-dimensional space composed of translation, rotation, mirroring and non uniform scaling.
 *
 * Non uniform scaling is given by three different scaling factors:If the Scale factor (at supertype IfcCartesianTransformationOperator) is omitted, it defaults to 1.0.
 *
 * If the Scale2 or the Scale3 factor is omitted, it defaults to the value of Scale (the x axis scale factor).
 */
 class IfcCartesianTransformationOperator3DnonUniform extends IfcCartesianTransformationOperator3D {
    constructor(Axis1:IfcDirection, Axis2:IfcDirection, LocalOrigin:IfcCartesianPoint, Scale:number, Axis3:IfcDirection, Scale2:number, Scale3:number) {
        super(Axis1, Axis2, LocalOrigin, Scale, Axis3)
        this.Scale2 = Scale2
        this.Scale3 = Scale3
    }
    /** The scaling value specified for the transformation along the axis 2.
     * This is normally the y scale factor.
    */
    Scale2?: number
    /** The scaling value specified for the transformation along the axis 3.
     * This is normally the z scale factor.
    */
    Scale3?: number
}

export default IfcCartesianTransformationOperator3DnonUniform