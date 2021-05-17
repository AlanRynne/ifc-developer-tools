// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelAssociatesLibrary

import { IfcLibrarySelect, IfcGloballyUniqueId, IfcLabel, IfcText, IfcDefinitionSelect } from '../types'
import { IfcOwnerHistory, IfcRelAssociates } from './'

/** The objectified relationship (IfcRelAssociatesLibrary) handles the assignment of a library item (items of the select IfcLibrarySelect) to subtypes of IfcObjectDefinition or IfcPropertyDefinition
 *
 * The relationship is used to assign a library reference or a more detailed link to a library information to objects, property sets or types.
 *
 * A single library reference can be applied to multiple items
 *
 * The inherited attribute RelatedObjects define the items to which the library association is applied.
 *
 * The attribute RelatingLibrary is the reference to a library reference, applied to the item(s).
 */
 class IfcRelAssociatesLibrary extends IfcRelAssociates {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatedObjects:Array<IfcDefinitionSelect>, RelatingLibrary:IfcLibrarySelect) {
        super(GlobalId, OwnerHistory, Name, Description, RelatedObjects)
        this.RelatingLibrary = RelatingLibrary
    }
    /** Reference to a library, from which the definition of the property set is taken.
    */
    RelatingLibrary: IfcLibrarySelect
}

export default IfcRelAssociatesLibrary