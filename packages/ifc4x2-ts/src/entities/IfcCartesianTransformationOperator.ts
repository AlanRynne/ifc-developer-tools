// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCartesianTransformationOperator

import { IfcDirection, IfcCartesianPoint, IfcGeometricRepresentationItem } from './'
import { IfcReal } from '../types'

/** An IfcCartesianTransformationOperator defines an abstract supertype of different kinds of geometric transformations.
 */
abstract class IfcCartesianTransformationOperator extends IfcGeometricRepresentationItem {
    constructor(Axis1:IfcDirection, Axis2:IfcDirection, LocalOrigin:IfcCartesianPoint, Scale:IfcReal) {
        super()
        this.Axis1 = Axis1
        this.Axis2 = Axis2
        this.LocalOrigin = LocalOrigin
        this.Scale = Scale
    }
    /** The direction used to determine U[1], the derived X axis direction.
    */
    Axis1?: IfcDirection
    /** The direction used to determine U[2], the derived Y axis direction.
    */
    Axis2?: IfcDirection
    /** The required translation, specified as a cartesian point.
     * The actual translation included in the transformation is from the geometric origin to the local origin.
    */
    LocalOrigin: IfcCartesianPoint
    /** The scaling value specified for the transformation.
    */
    Scale?: IfcReal
}

export default IfcCartesianTransformationOperator