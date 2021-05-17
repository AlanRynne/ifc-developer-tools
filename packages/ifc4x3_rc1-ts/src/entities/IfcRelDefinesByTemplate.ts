// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelDefinesByTemplate

import { IfcPropertySetDefinition, IfcPropertySetTemplate, IfcOwnerHistory, IfcRelDefines } from './'
import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'

/** The objectified relationship IfcRelDefinesByTemplate defines the relationships between property set template and property sets.
 *
 * Common information about property sets, e.g. the applicable name, description, contained properties, is defined by the property set template and assigned to all property sets.
 *
 * The IfcRelDefinesByTemplate is a 1-to-N relationship, as it allows for the assignment of one property set template to a single or to many property sets or quantity sets.
 *
 * Those property sets then share the same property set template definition.
 */
 class IfcRelDefinesByTemplate extends IfcRelDefines {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatedPropertySets:Array<IfcPropertySetDefinition>, RelatingTemplate:IfcPropertySetTemplate) {
        super(GlobalId, OwnerHistory, Name, Description)
        this.RelatedPropertySets = RelatedPropertySets
        this.RelatingTemplate = RelatingTemplate
    }
    /** One or many property sets or quantity sets that obtain their definitions from the single property set template.
    */
    RelatedPropertySets: Array<IfcPropertySetDefinition>
    /** Property set template that provides the common definition of related property sets.
    */
    RelatingTemplate: IfcPropertySetTemplate
}

export default IfcRelDefinesByTemplate