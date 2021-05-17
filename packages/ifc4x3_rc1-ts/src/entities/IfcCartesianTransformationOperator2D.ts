// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCartesianTransformationOperator2D

import { IfcDirection, IfcCartesianPoint, IfcCartesianTransformationOperator } from './'
import { IfcReal } from '../types'

/** An IfcCartesianTransformationOperator2D defines a geometric transformation in two-dimensional space.
 */
 class IfcCartesianTransformationOperator2D extends IfcCartesianTransformationOperator {
    constructor(Axis1:IfcDirection, Axis2:IfcDirection, LocalOrigin:IfcCartesianPoint, Scale:IfcReal) {
        super(Axis1, Axis2, LocalOrigin, Scale)

    }

}

export default IfcCartesianTransformationOperator2D