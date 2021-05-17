// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcProject

import { IfcLabel, IfcGloballyUniqueId, IfcText } from '../types'
import { IfcRepresentationContext, IfcUnitAssignment, IfcOwnerHistory, IfcObject } from './'

/** IfcProject indicates the undertaking of some design, engineering, construction, or maintenance activities leading towards a product.
 *
 * The project establishes the context for information to be exchanged or shared, and it may represent a construction project but does not have to.
 *
 * The IfcProject's main purpose in an exchange structure is to provide the root instance and the context for all other information items included
 *
 * The context provided by the IfcProject includes:Informal Propositions:
 */
 class IfcProject extends IfcObject {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, LongName:IfcLabel, Phase:IfcLabel, RepresentationContexts:Array<IfcRepresentationContext>, UnitsInContext:IfcUnitAssignment) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType)
        this.LongName = LongName
        this.Phase = Phase
        this.RepresentationContexts = RepresentationContexts
        this.UnitsInContext = UnitsInContext
    }
    /** undefined
    */
    LongName?: IfcLabel
    /** undefined
    */
    Phase?: IfcLabel
    /** undefined
    */
    RepresentationContexts: Array<IfcRepresentationContext>
    /** undefined
    */
    UnitsInContext: IfcUnitAssignment
}

export default IfcProject