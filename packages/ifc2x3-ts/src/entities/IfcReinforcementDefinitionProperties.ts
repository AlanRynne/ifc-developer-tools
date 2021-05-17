// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcReinforcementDefinitionProperties

import { IfcLabel, IfcGloballyUniqueId, IfcText } from '../types'
import { IfcSectionReinforcementProperties, IfcOwnerHistory, IfcPropertySetDefinition } from './'

/** IfcReinforcementDefinitionProperties defines the cross section properties of reinforcement included in reinforced concrete building elements.
 *
 * The property set definition may be used both in conjunction with insitu and precast structures.
 *
 * This subtype of IfcPropertySetDefinition is used to define the reinforcement properties in early design stages, such as in requirement definition or scheme design.
 *
 * In later design stages explicit instances of subtypes of IfcReinforcingElement are used.
 *
 * The intended usage may be indicated using the DefinitionType attribute value as a designator: recommended values are 'Reinforcement area requirement' or 'Reinforcement configuration requirement'.
 *
 * Other values may be used according to local standards.
 *
 * Only one property set definition of this kind is used for each concrete building element in each intended usage indicated by the DefinitionType attribute value.
 *
 * This set then defines a list of cross section properties in a discrete number of longitudinal sections as instances of IfcSectionReinforcementProperties (one for each structural reinforcement bar role), which in turn have a section cross section property defined as a profile and a number of reinforcement properties, one for each steel grade / bar type.
 */
 class IfcReinforcementDefinitionProperties extends IfcPropertySetDefinition {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, DefinitionType:IfcLabel, ReinforcementSectionDefinitions:Array<IfcSectionReinforcementProperties>) {
        super(GlobalId, OwnerHistory, Name, Description)
        this.DefinitionType = DefinitionType
        this.ReinforcementSectionDefinitions = ReinforcementSectionDefinitions
    }
    /** Descriptive type name applied to reinforcement definition properties.
    */
    DefinitionType?: IfcLabel
    /** The list of section reinforcement properties attached to the reinforcement definition properties.
    */
    ReinforcementSectionDefinitions: Array<IfcSectionReinforcementProperties>
}

export default IfcReinforcementDefinitionProperties