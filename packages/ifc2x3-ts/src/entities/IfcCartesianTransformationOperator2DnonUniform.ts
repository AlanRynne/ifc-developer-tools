// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCartesianTransformationOperator2DnonUniform

import { IfcDirection, IfcCartesianPoint, IfcCartesianTransformationOperator2D } from './'

/** A Cartesian transformation operator 2d non uniform defines a geometric transformation in two-dimensional space composed of translation, rotation, mirroring and non uniform scaling.
 *
 * Non uniform scaling is given by two different scaling factors:If the Scale factor (at supertype IfcCartesianTransformationOperator) is omitted, it defaults to 1.0.
 *
 * If the Scale2 factor is omitted, it defaults to the value of Scale (the x axis scale factor).
 */
 class IfcCartesianTransformationOperator2DnonUniform extends IfcCartesianTransformationOperator2D {
    constructor(Axis1:IfcDirection, Axis2:IfcDirection, LocalOrigin:IfcCartesianPoint, Scale:number, Scale2:number) {
        super(Axis1, Axis2, LocalOrigin, Scale)
        this.Scale2 = Scale2
    }
    /** The scaling value specified for the transformation along the axis 2.
     * This is normally the y scale factor.
    */
    Scale2?: number
}

export default IfcCartesianTransformationOperator2DnonUniform