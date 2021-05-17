// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSectionReinforcementProperties

import { IfcLengthMeasure, IfcReinforcingBarRoleEnum } from '../types'
import { IfcSectionProperties, IfcReinforcementBarProperties } from './'

/** IfcSectionReinforcementProperties defines the cross section properties of reinforcement for a single longitudinal piece of a cross section with a specific reinforcement usage type.
 *
 * Several sets of cross section reinforcement properties represented by instances of IfcReinforcementProperties may be attached to the section reinforcement properties (IfcReinforcementDefinitionProperties of IfcStructuralElementsDomain schema), one for each combination of steel grades and reinforcement bar types and sizes.
 */
 class IfcSectionReinforcementProperties  {
    constructor(LongitudinalStartPosition:IfcLengthMeasure, LongitudinalEndPosition:IfcLengthMeasure, TransversePosition:IfcLengthMeasure, ReinforcementRole:IfcReinforcingBarRoleEnum, SectionDefinition:IfcSectionProperties, CrossSectionReinforcementDefinitions:Array<IfcReinforcementBarProperties>) {

        this.LongitudinalStartPosition = LongitudinalStartPosition
        this.LongitudinalEndPosition = LongitudinalEndPosition
        this.TransversePosition = TransversePosition
        this.ReinforcementRole = ReinforcementRole
        this.SectionDefinition = SectionDefinition
        this.CrossSectionReinforcementDefinitions = CrossSectionReinforcementDefinitions
    }
    /** The start position in longitudinal direction for the section reinforcement properties.
    */
    LongitudinalStartPosition: IfcLengthMeasure
    /** The end position in longitudinal direction for the section reinforcement properties.
    */
    LongitudinalEndPosition: IfcLengthMeasure
    /** The position for the section reinforcement properties in transverse direction.
    */
    TransversePosition?: IfcLengthMeasure
    /** The role, purpose or usage of the reinforcement, i.e. the kind of loads and stresses it is intended to carry, defined for the section reinforcement properties.
    */
    ReinforcementRole: IfcReinforcingBarRoleEnum
    /** Definition of the cross section profile and longitudinal section type.
    */
    SectionDefinition: IfcSectionProperties
    /** The set of reinforcment properties attached to a section reinforcement properties definition.
    */
    CrossSectionReinforcementDefinitions: Array<IfcReinforcementBarProperties>
}

export default IfcSectionReinforcementProperties