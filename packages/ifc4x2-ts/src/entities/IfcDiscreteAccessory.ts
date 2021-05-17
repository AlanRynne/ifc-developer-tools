// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcDiscreteAccessory

import { IfcDiscreteAccessoryTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcElementComponent } from './'

/** A discrete accessory is a representation of different kinds of accessories included in or added to elements.
 */
 class IfcDiscreteAccessory extends IfcElementComponent {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcDiscreteAccessoryTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.PredefinedType = PredefinedType
    }
    /** Subtype of discrete accessory.
     * If USERDEFINED, the type is further qualified by means of the inherited attribute ObjectType.
     * Refer to IfcDiscreteAccessoryType for a non-exclusive list of userdefined type designations which are applicable to IfcDiscreteAccessory as well.
    */
    PredefinedType?: IfcDiscreteAccessoryTypeEnum
}

export default IfcDiscreteAccessory