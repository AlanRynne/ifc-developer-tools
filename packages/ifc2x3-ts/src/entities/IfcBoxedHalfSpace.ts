// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcBoxedHalfSpace

import { IfcBoundingBox, IfcSurface, IfcHalfSpaceSolid } from './'

/** The IfcBoxedHalfSpace is used (as its supertype IfcHalfSpaceSolid) only within Boolean operations.
 *
 * It divides the domain into exactly two subsets, where the domain in question is that of the attribute Enclosure
 *
 * The purpose of the attribute Enclosure is to provide a search box for the other operand in the Boolean operation.
 *
 * It shall be sufficiently large to fully enclose the resulting solid after the Boolean operation with the half space.
 *
 * It however does not alter the final result.
 *
 * The result of the Boolean operation would be the same, as if executed by the supertype IfcHalfSpaceSolid.
 *
 * See Figure 331 below
 *
 * The IfcBoundingBox that provides the enclosure is given for the convenience of the receiving application to enable the use of size box comparison for efficiency (for example, to check first whether size boxes intersect, if not no calculations has to be done to check whether the solids of the entities intersect).
 */
 class IfcBoxedHalfSpace extends IfcHalfSpaceSolid {
    constructor(BaseSurface:IfcSurface, AgreementFlag:boolean, Enclosure:IfcBoundingBox) {
        super(BaseSurface, AgreementFlag)
        this.Enclosure = Enclosure
    }
    /** The box which bounds the resulting solid of the Boolean operation involving the half space solid for computational purposes only.
    */
    Enclosure: IfcBoundingBox
}

export default IfcBoxedHalfSpace