// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPlacement

import { IfcCartesianPoint, IfcGeometricRepresentationItem } from './'

/** An IfcPlacement is an abstract supertype of placement subtypes that define the location of an item, or an entire shape representation, and provide its orientation.
 *
 * All placement subtypes define right-handed Cartesian coordinate systems and do not allow mirroring.
 */
abstract class IfcPlacement extends IfcGeometricRepresentationItem {
    constructor(Location:IfcCartesianPoint) {
        super()
        this.Location = Location
    }
    /** The geometric position of a reference point, such as the center of a circle, of the item to be located.
    */
    Location: IfcCartesianPoint
}

export default IfcPlacement