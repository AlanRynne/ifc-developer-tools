// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelDeclares

import { IfcContext, IfcOwnerHistory, IfcRelationship } from './'
import { IfcDefinitionSelect, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'

/** The objectified relationship IfcRelDeclares handles the declaration of objects (subtypes of IfcObject) or properties (subtypes of IfcPropertyDefinition) to a project or project library (represented by IfcProject, or IfcProjectLibrary)
 *
 * The relationship handles the assignment of other objects, like IfcActor, or IfcTypeObject to the project, or project libary.
 *
 * The attribute RelatedDefinitions provides the references to the first level objects, that are the elements within the context.
 *
 * All other objects that relate to the first level objects are also defined in the context
 *
 * The RelatingContext is the project, or project library that comprises all elements.
 *
 * The unit assignments and the presentation contexts defined at IfcProject or IfcProjectLibrary apply to all these elements.
 */
 class IfcRelDeclares extends IfcRelationship {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatingContext:IfcContext, RelatedDefinitions:Array<IfcDefinitionSelect>) {
        super(GlobalId, OwnerHistory, Name, Description)
        this.RelatingContext = RelatingContext
        this.RelatedDefinitions = RelatedDefinitions
    }
    /** Reference to the IfcProject to which additional information is assigned.
    */
    RelatingContext: IfcContext
    /** Set of object or property definitions that are assigned to a context and to which the unit and representation context definitions of that context apply.
    */
    RelatedDefinitions: Array<IfcDefinitionSelect>
}

export default IfcRelDeclares