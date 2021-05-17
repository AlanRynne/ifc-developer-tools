// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcConnectionSurfaceGeometry

import { IfcSurfaceOrFaceSurface } from '../types'
import { IfcConnectionGeometry } from './'

/** IfcConnectionSurfaceGeometry is used to describe the geometric constraints that facilitate the physical connection of two objects at a surface or at a face with surface geometry associated.
 *
 * It is envisioned as a control that applies to the element connection relationships.
 *
 * The IfcSurface (or the IfcFaceSurface with an associated IfcSurface) at the SurfaceOnRelatingElement attribute defines the surface where the basic geometry items of the connected elements connects.
 *
 * The surface geometry and coordinates are provided within the local coordinate system of the RelatingElement, as specified at the IfcRelConnectsSubtype that utilizes the IfcConnectionSurfaceGeometry.
 *
 * Optionally, the same surface geometry and coordinates can also be provided within the local coordinate system of the RelatedElement by using the SurfaceOnRelatedElement attribute.
 */
 class IfcConnectionSurfaceGeometry extends IfcConnectionGeometry {
    constructor(SurfaceOnRelatingElement:IfcSurfaceOrFaceSurface, SurfaceOnRelatedElement:IfcSurfaceOrFaceSurface) {
        super()
        this.SurfaceOnRelatingElement = SurfaceOnRelatingElement
        this.SurfaceOnRelatedElement = SurfaceOnRelatedElement
    }
    /** Surface at which related object is aligned at the relating element, given in the LCS of the relating element.
    */
    SurfaceOnRelatingElement: IfcSurfaceOrFaceSurface
    /** Surface at which the relating element is aligned at the related element, given in the LCS of the related element.
     * If the information is omitted, then the origin of the related element is used.
    */
    SurfaceOnRelatedElement?: IfcSurfaceOrFaceSurface
}

export default IfcConnectionSurfaceGeometry