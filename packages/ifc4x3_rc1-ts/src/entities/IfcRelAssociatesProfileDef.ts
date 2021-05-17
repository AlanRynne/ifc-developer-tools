// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelAssociatesProfileDef

import { IfcProfileDef, IfcOwnerHistory, IfcRelAssociates } from './'
import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcDefinitionSelect } from '../types'

/**  */
 class IfcRelAssociatesProfileDef extends IfcRelAssociates {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatedObjects:Array<IfcDefinitionSelect>, RelatingProfileDef:IfcProfileDef) {
        super(GlobalId, OwnerHistory, Name, Description, RelatedObjects)
        this.RelatingProfileDef = RelatingProfileDef
    }

    RelatingProfileDef: IfcProfileDef
}

export default IfcRelAssociatesProfileDef