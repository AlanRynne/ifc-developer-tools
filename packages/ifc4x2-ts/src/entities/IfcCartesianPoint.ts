// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCartesianPoint

import { IfcLengthMeasure } from '../types'
import { IfcPoint } from './'

/** An IfcCartesianPoint defines a point by coordinates in an orthogonal, right-handed Cartesian coordinate system.
 *
 * For the purpose of this specification only two and three dimensional Cartesian points are used.
 */
 class IfcCartesianPoint extends IfcPoint {
    constructor(Coordinates:Array<IfcLengthMeasure>) {
        super()
        this.Coordinates = Coordinates
    }
    /** The first, second, and third coordinate of the point location.
     * If placed in a two or three dimensional rectangular Cartesian coordinate system, Coordinates[1] is the X coordinate, Coordinates[2] is the Y coordinate, and Coordinates[3] is the Z coordinate.
    */
    Coordinates: Array<IfcLengthMeasure>
}

export default IfcCartesianPoint