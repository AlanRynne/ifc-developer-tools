// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelCoversSpaces

import { IfcSpace, IfcCovering, IfcOwnerHistory, IfcRelConnects } from './'
import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'

/** The objectified relationship, IfcRelCoversSpace, relates a space object to one or many coverings, which faces (or is assigned to) the space
 *
 * The IFC specification provides two relationships:Whether the relationship between the covering and the space, or between the covering and the element, is regarded as primary, has to be determined within the context of a model view definition.
 */
 class IfcRelCoversSpaces extends IfcRelConnects {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatedSpace:IfcSpace, RelatedCoverings:Array<IfcCovering>) {
        super(GlobalId, OwnerHistory, Name, Description)
        this.RelatedSpace = RelatedSpace
        this.RelatedCoverings = RelatedCoverings
    }
    /** undefined
    */
    RelatedSpace: IfcSpace
    /** Relationship to the set of coverings covering that cover surfaces of this space.
    */
    RelatedCoverings: Array<IfcCovering>
}

export default IfcRelCoversSpaces