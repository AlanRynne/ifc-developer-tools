// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelOverridesProperties

import { IfcProperty, IfcOwnerHistory, IfcObject, IfcPropertySetDefinition, IfcRelDefinesByProperties } from './'
import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'

/**  */
 class IfcRelOverridesProperties extends IfcRelDefinesByProperties {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatedObjects:Array<IfcObject>, RelatingPropertyDefinition:IfcPropertySetDefinition, OverridingProperties:Array<IfcProperty>) {
        super(GlobalId, OwnerHistory, Name, Description, RelatedObjects, RelatingPropertyDefinition)
        this.OverridingProperties = OverridingProperties
    }

    OverridingProperties: Array<IfcProperty>
}

export default IfcRelOverridesProperties