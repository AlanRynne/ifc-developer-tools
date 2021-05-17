// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRepresentationMap

import { IfcAxis2Placement } from '../types'
import { IfcRepresentation } from './'

/** An IfcRepresentationMap defines the base definition (also referred to as block, cell or macro) called MappedRepresentation within the MappingOrigin.
 *
 * The MappingOrigin defines the coordinate system in which the MappedRepresentation is defined
 *
 * The RepresentationMap is used through an IfcMappeditem in one or several IfcShapeRepresentation's.
 *
 * An Cartesian transformation operator can be applied to transform the MappedRepresentation into the placement coordinate system of the shape representation.
 *
 * The transformation of the representation map is restricted to be a Cartesian transformation mapping (translation, rotation, mirroring and scaling).
 */
 class IfcRepresentationMap  {
    constructor(MappingOrigin:IfcAxis2Placement, MappedRepresentation:IfcRepresentation) {

        this.MappingOrigin = MappingOrigin
        this.MappedRepresentation = MappedRepresentation
    }
    /** An axis2 placement that defines the position about which the mapped representation is mapped.
    */
    MappingOrigin: IfcAxis2Placement
    /** A representation that is mapped to at least one mapped item.
    */
    MappedRepresentation: IfcRepresentation
}

export default IfcRepresentationMap