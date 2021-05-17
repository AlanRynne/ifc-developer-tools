// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcFaceSurface

import { IfcSurface, IfcFaceBound, IfcFace } from './'
import { IfcBoolean } from '../types'

/** The IfcFaceSurface defines the underlying geometry of the associated surface to the face.
 *
 * Informal Propositions:
 */
 class IfcFaceSurface extends IfcFace {
    constructor(Bounds:Array<IfcFaceBound>, FaceSurface:IfcSurface, SameSense:IfcBoolean) {
        super(Bounds)
        this.FaceSurface = FaceSurface
        this.SameSense = SameSense
    }
    /** The surface which defines the internal shape of the face.
     * This surface may be unbounded.
     * The domain of the face is defined by this surface and the bounding loops in the inherited attribute SELF\FaceBounds.
    */
    FaceSurface: IfcSurface
    /** This flag indicates whether the sense of the surface normal agrees with (TRUE), or opposes (FALSE), the sense of the topological normal to the face.
    */
    SameSense: IfcBoolean
}

export default IfcFaceSurface