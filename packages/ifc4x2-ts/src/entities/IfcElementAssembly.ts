// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcElementAssembly

import { IfcAssemblyPlaceEnum, IfcElementAssemblyTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcElement } from './'

/** The IfcElementAssembly represents complex element assemblies aggregated from several elements, such as discrete elements, building elements, or other elements
 *
 * The assembly structure can be nested, i.e. an IfcElementAssembly could be an aggregated part within another IfcElementAssembly
 *
 * The geometry of an IfcElementAssembly is generally formed from its components, in which case it does not need to have an explicit geometric representation.
 *
 * In some cases it may be useful to also expose an own explicit representation of the aggregate
 *
 * Informal Propositions:
 */
 class IfcElementAssembly extends IfcElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, AssemblyPlace:IfcAssemblyPlaceEnum, PredefinedType:IfcElementAssemblyTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.AssemblyPlace = AssemblyPlace
        this.PredefinedType = PredefinedType
    }
    /** A designation of where the assembly is intended to take place defined by an Enum.
    */
    AssemblyPlace?: IfcAssemblyPlaceEnum
    /** Predefined generic types for a element assembly that are specified in an enumeration.
     * There might be property sets defined specifically for each predefined type.
     * IFC4 CHANGE The attribute has been changed to be optional.
    */
    PredefinedType?: IfcElementAssemblyTypeEnum
}

export default IfcElementAssembly