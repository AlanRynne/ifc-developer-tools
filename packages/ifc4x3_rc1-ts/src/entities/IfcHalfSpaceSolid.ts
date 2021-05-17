// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcHalfSpaceSolid

import { IfcSurface, IfcGeometricRepresentationItem } from './'
import { IfcBoolean } from '../types'

/** A half space solid divides the domain into two by a base surface.
 *
 * Normally, the base surface is a plane and devides the infinitive space into two and indicates the side of the half-space by agreeing or disagreeing to the normal of the plane
 *
 * Figure 336 illustrates the definition of the IfcHalfSpaceSolid within a given coordinate system.
 *
 * The base surface is given by an unbounded plane, the red boundary is shown for visualization purposes only
 *
 * Informal Propositions:
 */
 class IfcHalfSpaceSolid extends IfcGeometricRepresentationItem {
    constructor(BaseSurface:IfcSurface, AgreementFlag:IfcBoolean) {
        super()
        this.BaseSurface = BaseSurface
        this.AgreementFlag = AgreementFlag
    }
    /** Surface defining side of half space.
    */
    BaseSurface: IfcSurface
    /** The agreement flag is TRUE if the normal to the BaseSurface points away from the material of the IfcHalfSpaceSolid.
     * Otherwise it is FALSE.
    */
    AgreementFlag: IfcBoolean
}

export default IfcHalfSpaceSolid