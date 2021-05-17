// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelConnectsStructuralElement

import { IfcElement, IfcStructuralMember, IfcOwnerHistory, IfcRelConnects } from './'
import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'

/**  */
 class IfcRelConnectsStructuralElement extends IfcRelConnects {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatingElement:IfcElement, RelatedStructuralMember:IfcStructuralMember) {
        super(GlobalId, OwnerHistory, Name, Description)
        this.RelatingElement = RelatingElement
        this.RelatedStructuralMember = RelatedStructuralMember
    }

    RelatingElement: IfcElement

    RelatedStructuralMember: IfcStructuralMember
}

export default IfcRelConnectsStructuralElement