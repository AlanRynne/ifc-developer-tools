// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcComplexPropertyTemplate

import { IfcLabel, IfcComplexPropertyTemplateTypeEnum, IfcGloballyUniqueId, IfcText } from '../types'
import { IfcPropertyTemplate, IfcOwnerHistory } from './'

/** The IfcComplexPropertyTemplate defines the template for all complex properties, either the IfcComplexProperty's, or the IfcPhysicalComplexQuantity's.
 *
 * The individual complex property templates are interpreted according to their Name attribute and and optional UsageName attribute.
 */
 class IfcComplexPropertyTemplate extends IfcPropertyTemplate {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, UsageName:IfcLabel, TemplateType:IfcComplexPropertyTemplateTypeEnum, HasPropertyTemplates:Array<IfcPropertyTemplate>) {
        super(GlobalId, OwnerHistory, Name, Description)
        this.UsageName = UsageName
        this.TemplateType = TemplateType
        this.HasPropertyTemplates = HasPropertyTemplates
    }
    /** 
    */
    UsageName?: IfcLabel
    /** 
    */
    TemplateType?: IfcComplexPropertyTemplateTypeEnum
    /** Reference to a set of property templates.
     * It should only be provided, if the PropertyType is set to COMPLEX.
    */
    HasPropertyTemplates?: Array<IfcPropertyTemplate>
}

export default IfcComplexPropertyTemplate