// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcContext

import { IfcLabel, IfcGloballyUniqueId, IfcText } from '../types'
import { IfcRepresentationContext, IfcUnitAssignment, IfcOwnerHistory, IfcObjectDefinition } from './'

/** IfcContext is the generalization of a project context in which objects, type objects, property sets, and properties are defined.
 *
 * The IfcProject as subtype of IfcContext provides the context for all information on a construction project, it may include one or several IfcProjectLibrary's as subtype of IfcContext to register the included libraries for the project.
 *
 * A library of products that is referenced is declared within the IfcProjectLibrary as the context of that library
 *
 * Context definitions can be named, using the inherited Name attribute, which should be a user recognizable key or number for the context.
 *
 * The LongName can add a full name.
 *
 * Further explanations to the context can be given using the inherited Description attribute
 *
 * A Context is declared by the relationship object IfcRelDeclares that refers to the corresponding objects within the context.
 *
 * More specific relationships are introduced at the level of subtypes.
 */
abstract class IfcContext extends IfcObjectDefinition {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, LongName:IfcLabel, Phase:IfcLabel, RepresentationContexts:Array<IfcRepresentationContext>, UnitsInContext:IfcUnitAssignment) {
        super(GlobalId, OwnerHistory, Name, Description)
        this.ObjectType = ObjectType
        this.LongName = LongName
        this.Phase = Phase
        this.RepresentationContexts = RepresentationContexts
        this.UnitsInContext = UnitsInContext
    }
    /** The object type denotes a particular type that indicates the object further.
     * The use has to be established at the level of instantiable subtypes.
     * Subtypes of IfcContext do not introduce a PredefinedType attribute, therefore the usage of ObjectType is not bound to the selection of USERDEFINED within the PredefinedType enumaration.
    */
    ObjectType?: IfcLabel
    /** Long name for the context as used for reference purposes.
    */
    LongName?: IfcLabel
    /** Current project phase, or life-cycle phase of this project.
     * Applicable values have to be agreed upon by view definitions or implementer agreements.
    */
    Phase?: IfcLabel
    /** Context of the representations used within the context.
     * When the context is a project and it includes shape representations for its components, one or several geometric representation contexts need to be included that define e.g. the world coordinate system, the coordinate space dimensions, and/or the precision factor.
     * IFC4 CHANGE The attribute has been changed to be optional.
     * Change made with upward compatibility for file based exchange.
    */
    RepresentationContexts?: Array<IfcRepresentationContext>
    /** Units globally assigned to measure types used within the context.
     * IFC4 CHANGE The attribute has been changed to be optional.
     * Change made with upward compatibility for file based exchange.
    */
    UnitsInContext?: IfcUnitAssignment
}

export default IfcContext