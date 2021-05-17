// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcDocumentInformationRelationship

import { IfcDocumentInformation } from './'
import { IfcLabel } from '../types'

/** An IfcDocumentInformationRelationship is a relationship entity that enables a document to have the ability to reference other documents.
 *
 * It is used to describe relationships in which one document may reference one or more other sub documents or where a document is used as a replacement for another document (but where both the original and the replacing document need to be retained).
 */
 class IfcDocumentInformationRelationship  {
    constructor(RelatingDocument:IfcDocumentInformation, RelatedDocuments:Array<IfcDocumentInformation>, RelationshipType:IfcLabel) {

        this.RelatingDocument = RelatingDocument
        this.RelatedDocuments = RelatedDocuments
        this.RelationshipType = RelationshipType
    }
    /** The document that acts as the parent, referencing or original document in a relationship.
    */
    RelatingDocument: IfcDocumentInformation
    /** The document that acts as the child, referenced or replacing document in a relationship.
    */
    RelatedDocuments: Array<IfcDocumentInformation>
    /** Describes the type of relationship between documents.
     * This could be sub-document, replacement etc. The interpretation has to be established in an application context.
    */
    RelationshipType?: IfcLabel
}

export default IfcDocumentInformationRelationship