// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPropertySetTemplate

import { IfcPropertySetTemplateTypeEnum, IfcIdentifier, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcPropertyTemplate, IfcOwnerHistory, IfcPropertyTemplateDefinition } from './'

/** IfcPropertySetTemplate defines the template for all dynamically extensible property sets represented by IfcPropertySet.
 *
 * The property set template is a container of property templates within a property tree.
 *
 * The individual property templates are interpreted according to their Name attribute and shall have no values assigned
 *
 * Property set templates can form part of a property library used and declared within a project.
 *
 * Depending on the TemplateType the IfcPropertySetTemplate defines a template for:The inherited HasContext inverse relation to IfcRelDeclares is used to declare the IfcPropertySetTemplate within a project library.
 *
 * If included in an exchange data set it can then be traversed through the IfcProjectLibrary.
 *
 * The Defines inverse relation to IfcRelDefinesByTemplate is provided to keep the definition relationship between the IfcPropertySetTemplate and the one to many IfcPropertySet's, for which it provides the template.
 *
 * Figure 135 illustrates relationships used for property set templates.
 *
 * Between IfcProperty's within the HasProperties set of IfcPropertySet having the same Name attribute value as the IfcPropertyTemplate's within the HasPropertyTemplates set of IfcPropertySetTemplate an implicit definition relationship is established that assigns the template to the individual properties.
 */
 class IfcPropertySetTemplate extends IfcPropertyTemplateDefinition {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, TemplateType:IfcPropertySetTemplateTypeEnum, ApplicableEntity:IfcIdentifier, HasPropertyTemplates:Array<IfcPropertyTemplate>) {
        super(GlobalId, OwnerHistory, Name, Description)
        this.TemplateType = TemplateType
        this.ApplicableEntity = ApplicableEntity
        this.HasPropertyTemplates = HasPropertyTemplates
    }
    /** Property set type defining whether the property set is applicable to a type (subtypes of IfcTypeObject), to an occurrence (subtypes of IfcObject), or as a special case to a performance history.
     * The attribute ApplicableEntity may further refine the applicability to a single or multiple entity type(s).
    */
    TemplateType?: IfcPropertySetTemplateTypeEnum
    /** The attribute optionally defines the data type of the applicable type or occurrence object, to which the assigned property set template can relate.
     * If not present, no instruction is given to which type or occurrence object the property set template is applicable.
     * The following conventions are used: The IFC entity name of the applicable entity using the IFC naming convention, CamelCase with IFC prefix It can be optionally followed by the predefined type after the separator "/" (forward slash), using upper case If a performance history object of a particular distribution object is attributes by the property set template, then the entity name (and potentially amended by the predefined type) is expanded by adding '[PerformanceHistory]' If one property set template is applicable to many type and/or occurrence objects, then those object names should be separate by comma "," forming a comma separated string.
     * EXAMPLE Refering to a boiler type as applicable entity would be expressed as 'IfcBoilerType', refering to a steam boiler type as applicable entity would be expressed as 'IfcBoilerType/STEAM', refering to a wall and wall standard case and a wall type would be expressed as 'IfcWall, IfcWallStandardCase, IfcWallType'.
     * An applicable IfcPerformanceHistory assigned to an occurrence or type object would be indicated by IfcBoilerType[PerformanceHistory], or respectively IfcBoilerType/STEAM[PerformanceHistory].
    */
    ApplicableEntity?: IfcIdentifier
    /** Set of IfcPropertyTemplate's that are defined within the scope of the IfcPropertySetTemplate.
    */
    HasPropertyTemplates: Array<IfcPropertyTemplate>
}

export default IfcPropertySetTemplate