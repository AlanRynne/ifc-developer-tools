// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcProcedureType

import { IfcProcedureTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcTypeProcess } from './'

/** An IfcProcedureType defines a particular type of procedure that may be specified
 *
 * An IfcProcedureType provides for all forms of types of procedure that may be specified.
 *
 * Usage of IfcProcedureType defines the parameters for one or more occurrences of IfcProcedure.
 *
 * Parameters may be specified through property sets that may be enumerated in the IfcProcedureTypeEnum data type or through explict attributes of IfcProcedure.
 *
 * Procedure occurrences (IfcProcedure entities) are linked to the procedure type through the IfcRelDefinesByType relationship.
 */
 class IfcProcedureType extends IfcTypeProcess {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, Identification:IfcIdentifier, LongDescription:IfcText, ProcessType:IfcLabel, PredefinedType:IfcProcedureTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, Identification, LongDescription, ProcessType)
        this.PredefinedType = PredefinedType
    }
    /** Identifies the predefined types of a procedure from which the type required may be set.
    */
    PredefinedType: IfcProcedureTypeEnum
}

export default IfcProcedureType