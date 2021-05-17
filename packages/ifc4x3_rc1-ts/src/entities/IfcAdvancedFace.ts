// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcAdvancedFace

import { IfcFaceBound, IfcSurface, IfcFaceSurface } from './'
import { IfcBoolean } from '../types'

/** An advanced face is a specialization of a face surface that has to meet requirements on using particular topological and geometric representation items for the definition of the faces, edges and vertices
 *
 * An IfcAdvancedFace is restricted to:In case of closed faces with periodic surfaces, such as cylindrical or spherical surfaces, the following applies:
 */
 class IfcAdvancedFace extends IfcFaceSurface {
    constructor(Bounds:Array<IfcFaceBound>, FaceSurface:IfcSurface, SameSense:IfcBoolean) {
        super(Bounds, FaceSurface, SameSense)

    }

}

export default IfcAdvancedFace