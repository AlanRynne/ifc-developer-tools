// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelAssociates

import { IfcRoot, IfcOwnerHistory, IfcRelationship } from './'
import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'

/** The association relationship IfcRelAssociates refers to sources of information (most notably a classification, library, document, approval, contraint, or material).
 *
 * The information associated may reside internally or externally of the project data.
 *
 * There is no dependency implied by the association.
 *
 * Association relationships can be established to objects (occurrences as subtypes of IfcObject) or to types (as subtypes of IfcTypeObject).
 *
 * Some associations (such as approval, or document) may also be applied to property templates (as subtypes of IfcPropertyDefinition).
 *
 * The association relationship establishs an association between one to many objects or property templates and the associated information.
 *
 * The subtypes of IfcRelAssociates establish the particular semantic meaning of the association relationship.
 */
 class IfcRelAssociates extends IfcRelationship {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatedObjects:Array<IfcRoot>) {
        super(GlobalId, OwnerHistory, Name, Description)
        this.RelatedObjects = RelatedObjects
    }
    /** Set of object or property definitions to which the external references or information is associated.
     * It includes object and type objects, property set templates, property templates and property sets and contexts.
     * IFC4 CHANGE The attribute datatype has been changed from IfcRoot to IfcDefinitionSelect.
    */
    RelatedObjects: Array<IfcRoot>
}

export default IfcRelAssociates