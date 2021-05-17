// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPlanarExtent

import { IfcLengthMeasure } from '../types'
import { IfcGeometricRepresentationItem } from './'

/** The planar extent defines the extent along the two axes of the two-dimensional coordinate system, independently of its position.
 *
 * If the planar extent is used within a three-dimensional coordinate system, it defines the extent along the x and y axes.
 */
 class IfcPlanarExtent extends IfcGeometricRepresentationItem {
    constructor(SizeInX:IfcLengthMeasure, SizeInY:IfcLengthMeasure) {
        super()
        this.SizeInX = SizeInX
        this.SizeInY = SizeInY
    }
    /** The extent in the direction of the x-axis.
    */
    SizeInX: IfcLengthMeasure
    /** The extent in the direction of the y-axis.
    */
    SizeInY: IfcLengthMeasure
}

export default IfcPlanarExtent