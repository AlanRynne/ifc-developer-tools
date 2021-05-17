// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelAssociatesDocument

import { IfcDocumentSelect, IfcGloballyUniqueId, IfcLabel, IfcText, IfcDefinitionSelect } from '../types'
import { IfcOwnerHistory, IfcRelAssociates } from './'

/** The objectified relationship (IfcRelAssociatesDocument) handles the assignment of a document information (items of the select IfcDocumentSelect) to objects occurrences (subtypes of IfcObject) or object types (subtypes of IfcTypeObject)
 *
 * The relationship is used to assign a document reference or a more detailed document information to objects.
 *
 * A single document reference can be applied to multiple objects
 *
 * The inherited attribute RelatedObjects define the objects to which the document association is applied.
 *
 * The attribute RelatingDocument is the reference to a document reference, applied to the object(s).
 */
 class IfcRelAssociatesDocument extends IfcRelAssociates {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatedObjects:Array<IfcDefinitionSelect>, RelatingDocument:IfcDocumentSelect) {
        super(GlobalId, OwnerHistory, Name, Description, RelatedObjects)
        this.RelatingDocument = RelatingDocument
    }
    /** Document information or reference which is applied to the objects.
    */
    RelatingDocument: IfcDocumentSelect
}

export default IfcRelAssociatesDocument