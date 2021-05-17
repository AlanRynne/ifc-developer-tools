// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcDirection

import { IfcReal } from '../types'
import { IfcGeometricRepresentationItem } from './'

/** The IfcDirection provides a direction in two or three dimensional space depending on the number of DirectionRatio's provided.
 *
 * The IfcDirection does not imply a vector length, and the direction ratios does not have to be normalized.
 */
 class IfcDirection extends IfcGeometricRepresentationItem {
    constructor(DirectionRatios:Array<IfcReal>) {
        super()
        this.DirectionRatios = DirectionRatios
    }
    /** The components in the direction of X axis (DirectionRatios[1]), of Y axis (DirectionRatios[2]), and of Z axis (DirectionRatios[3])
    */
    DirectionRatios: Array<IfcReal>
}

export default IfcDirection