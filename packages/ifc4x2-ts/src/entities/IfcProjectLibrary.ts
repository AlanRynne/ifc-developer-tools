// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcProjectLibrary

import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcRepresentationContext, IfcUnitAssignment, IfcContext } from './'

/** An IfcProjectLibrary collects all library elements that are included within a referenced project data set
 *
 * Examples for project libraries include:The inherited attributes RepresentationContext and UnitsInContext have the following meaning:Instances of IfcProjectLibrary are assigned to the project context using the IfcRelDeclares relationship and accessible through the inverse attribute HasContext.
 *
 * Individual object types and property (set) templates are assigned to the IfcProjectLibrary using the IfcRelDeclares relationship and are accessible through the inverse attribute Declares.
 *
 * An IfcProjectLibrary may be decomposed into sub libraries using the relationship IfcRelNests.
 *
 * Sub libraries are accessed by the IfcProjectLibrary through the inverse attribute IsNestedBy.
 */
 class IfcProjectLibrary extends IfcContext {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, LongName:IfcLabel, Phase:IfcLabel, RepresentationContexts:Array<IfcRepresentationContext>, UnitsInContext:IfcUnitAssignment) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, LongName, Phase, RepresentationContexts, UnitsInContext)

    }

}

export default IfcProjectLibrary