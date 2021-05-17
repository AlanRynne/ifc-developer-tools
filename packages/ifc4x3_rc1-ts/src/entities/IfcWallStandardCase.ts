// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcWallStandardCase

import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier, IfcWallTypeEnum } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcWall } from './'

/** The IfcWallStandardCase defines a wall with certain constraints for the provision of parameters and with certain constraints for the geometric representation.
 *
 * The IfcWallStandardCase handles all cases of walls, that are extruded vertically:and have a single thickness along the path for each wall layer, i.e.:and have either:and shall not haveThe following parameter have to be provided:The IfcWallStandardCase requires the provision of the wall axis either a straight line that is parallel to the x-axis of the object coordinate system, or a circular arc where the tangent at start is parallel to the x-axis of the object coordinate system.
 *
 * The direction of the wall axis shall be the positive direction of that x-axis
 *
 * The material of the wall is defined by the IfcMaterialLayerSetUsage and is attached by the IfcRelAssociatesMaterial objectified relationship.
 *
 * It is accessible by the inverse HasAssociations relationship.
 *
 * The material layer set usage has to be given (enforced by where rule)
 *
 * An 'Axis' and a 'Body' shape representation has to be provided, and it is invalid to exchange a 'Tessellation', 'SurfaceModel', 'Brep' or 'MappedRepresentation' representation for the 'Body' shape representation of the IfcWallStandardCase.
 */
 class IfcWallStandardCase extends IfcWall {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcWallTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag, PredefinedType)

    }

}

export default IfcWallStandardCase