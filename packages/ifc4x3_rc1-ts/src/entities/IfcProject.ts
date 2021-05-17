// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcProject

import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcRepresentationContext, IfcUnitAssignment, IfcContext } from './'

/** IfcProject indicates the undertaking of some design, engineering, construction, or maintenance activities leading towards a product.
 *
 * The project establishes the context for information to be exchanged or shared, and it may represent a construction project but does not have to.
 *
 * The IfcProject's main purpose in an exchange structure is to provide the root instance and the context for all other information items included
 *
 * The context provided by the IfcProject includes:Informal Propositions:
 */
 class IfcProject extends IfcContext {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, LongName:IfcLabel, Phase:IfcLabel, RepresentationContexts:Array<IfcRepresentationContext>, UnitsInContext:IfcUnitAssignment) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, LongName, Phase, RepresentationContexts, UnitsInContext)

    }

}

export default IfcProject