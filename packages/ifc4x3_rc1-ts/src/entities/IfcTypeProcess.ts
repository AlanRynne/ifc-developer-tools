// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcTypeProcess

import { IfcIdentifier, IfcText, IfcLabel, IfcGloballyUniqueId } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcTypeObject } from './'

/** IfcTypeProcess defines a specific (or type) definition of a process or activity without being assigned to a schedule or a time.
 *
 * It is used to define a process or activity specification, that is, the specific process or activity information that is common to all occurrences that are defined for that process or activity type
 *
 * An IfcTypeProcess may have a list of property set attached.
 *
 * Values of these properties are common to all occurrences of that process or activity type.
 *
 * The type occurrence relationship is realized using the objectified relationship IfcRelDefinesByType
 *
 * Subtypes of IfcTypeProcess may be exchanged without being already assigned to subtypes of IfcProcess.
 */
abstract class IfcTypeProcess extends IfcTypeObject {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, Identification:IfcIdentifier, LongDescription:IfcText, ProcessType:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets)
        this.Identification = Identification
        this.LongDescription = LongDescription
        this.ProcessType = ProcessType
    }
    /** An identifying designation given to a process type.
    */
    Identification?: IfcIdentifier
    /** An long description, or text, describing the activity in detail.
     * The inherited SELF\IfcRoot
     * Description attribute is used as the short description.
    */
    LongDescription?: IfcText
    /** The type denotes a particular type that indicates the process further.
     * The use has to be established at the level of instantiable subtypes.
     * In particular it holds the user defined type, if the enumeration of the attribute 'PredefinedType' is set to USERDEFINED.
    */
    ProcessType?: IfcLabel
}

export default IfcTypeProcess