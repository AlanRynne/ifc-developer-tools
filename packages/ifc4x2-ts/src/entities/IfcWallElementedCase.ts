// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcWallElementedCase

import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier, IfcWallTypeEnum } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcWall } from './'

/** The IfcWallElementedCase defines a wall with certain constraints for the provision of its components.
 *
 * The IfcWallElementedCase handles all cases of walls, that are decomposed into parts: Parts within the decomposition are usually be of type:
 */
 class IfcWallElementedCase extends IfcWall {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcWallTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag, PredefinedType)

    }

}

export default IfcWallElementedCase