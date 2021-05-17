// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcColumnType

import { IfcColumnTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcBuiltElementType } from './'

/** The element type IfcColumnType defines commonly shared information for occurrences of columns.
 *
 * The set of shared information may include:It is used to define a column specification, or column style (i.e. the specific product information that is common to all occurrences of that column type).
 *
 * Column types may be exchanged without being already assigned to occurrences
 *
 * Occurrences of the IfcColumnType within building models are represented by instances of IfcColumnStandardCase if the IfcColumnType has a single associated IfcMaterialProfileSet; otherwise they are represented by instances of IfcColumn.
 *
 * Occurrences of the IfcColumnType within structural analysis models are represented by instances of IfcStructuralCurveMember, or its applicable subtypes.
 */
 class IfcColumnType extends IfcBuiltElementType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcColumnTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Identifies the predefined types of a column element from which the type required may be set.
    */
    PredefinedType: IfcColumnTypeEnum
}

export default IfcColumnType