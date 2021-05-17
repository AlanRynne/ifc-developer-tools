// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcZone

import { IfcLabel, IfcGloballyUniqueId, IfcText } from '../types'
import { IfcOwnerHistory, IfcSystem } from './'

/** A zone is a group of spaces, partial spaces or other zones.
 *
 * Zone structures may not be hierarchical (in contrary to the spatial structure of a project - see IfcSpatialStructureElement), i.e. one individual IfcSpace may be associated with zero, one, or several IfcZone's.
 *
 * IfcSpace's are grouped into an IfcZone by using the objectified relationship IfcRelAssignsToGroup as specified at the supertype IfcGroup.
 */
 class IfcZone extends IfcSystem {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, LongName:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType)
        this.LongName = LongName
    }
    /** Long name for a zone, used for informal purposes.
     * It should be used, if available, in conjunction with the inherited Name attribute.
     * In many scenarios the Name attribute refers to the short name or number of a zone, and the LongName refers to the full name.
     * IFC4 CHANGE The attribute has been added at the end of the entity definition.
    */
    LongName?: IfcLabel
}

export default IfcZone