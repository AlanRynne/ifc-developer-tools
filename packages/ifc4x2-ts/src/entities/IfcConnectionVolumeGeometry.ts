// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcConnectionVolumeGeometry

import { IfcSolidOrShell } from '../types'
import { IfcConnectionGeometry } from './'

/** IfcConnectionVolumeGeometry is used to describe the geometric constraints that facilitate the physical connection (or overlap) of two objects at a volume defined by a solid or closed shell.
 *
 * It is envisioned as a control that applies to the element connection or interference relationships
 *
 * The IfcSolidModel (or the IfcClosedShell) at the VolumeOnRelatingElement attribute defines the volume where the basic geometry items of the interfering elements overlap.
 *
 * The volume geometry and coordinates are provided within the local coordinate system of the RelatingElement, as specified at the subtypes of the relationship IfcRelConnects that utilizes the IfcConnectionSurfaceGeometry.
 *
 * Optionally, the same volume geometry and coordinates can also be provided within the local coordinate system of the RelatedElement by using the VolumeOnRelatedElement attribute.
 */
 class IfcConnectionVolumeGeometry extends IfcConnectionGeometry {
    constructor(VolumeOnRelatingElement:IfcSolidOrShell, VolumeOnRelatedElement:IfcSolidOrShell) {
        super()
        this.VolumeOnRelatingElement = VolumeOnRelatingElement
        this.VolumeOnRelatedElement = VolumeOnRelatedElement
    }
    /** Volume at which related object overlaps with the relating element, given in the LCS of the relating element.
    */
    VolumeOnRelatingElement: IfcSolidOrShell
    /** Volume at which related object overlaps with the relating element, given in the LCS of the related element.
    */
    VolumeOnRelatedElement?: IfcSolidOrShell
}

export default IfcConnectionVolumeGeometry