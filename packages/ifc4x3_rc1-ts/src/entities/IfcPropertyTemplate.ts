// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPropertyTemplate

import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcPropertyTemplateDefinition } from './'

/** The IfcPropertyTemplate is an abstract supertype comprising the templates for all dynamically extensible properties, either as an IfcComplexPropertyTemplate, or an IfcSimplePropertyTemplate.
 *
 * These templates determine the structure of:The individual property templates are interpreted according to their Name attribute and may have a predefined property type, property unit, and property data type.
 *
 * A template however shall not have measure values, or quantity values assigned.
 */
abstract class IfcPropertyTemplate extends IfcPropertyTemplateDefinition {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText) {
        super(GlobalId, OwnerHistory, Name, Description)

    }

}

export default IfcPropertyTemplate