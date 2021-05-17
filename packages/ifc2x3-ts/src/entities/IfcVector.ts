// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcVector

import { IfcDirection, IfcGeometricRepresentationItem } from './'
import { IfcLengthMeasure } from '../types'

/** An IfcVector is a geometric representation item having both a magnitude and direction.
 *
 * The magnitude of the vector is solely defined by the Magnitude attribute and the direction is solely defined by the Orientation attribute.
 */
 class IfcVector extends IfcGeometricRepresentationItem {
    constructor(Orientation:IfcDirection, Magnitude:IfcLengthMeasure) {
        super()
        this.Orientation = Orientation
        this.Magnitude = Magnitude
    }
    /** The direction of the vector.
    */
    Orientation: IfcDirection
    /** The magnitude of the vector.
     * All vectors of Magnitude 0.0 are regarded as equal in value regardless of the orientation attribute.
    */
    Magnitude: IfcLengthMeasure
}

export default IfcVector