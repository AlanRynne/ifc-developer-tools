// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelConnectsWithEccentricity

import { IfcConnectionGeometry, IfcOwnerHistory, IfcStructuralMember, IfcStructuralConnection, IfcBoundaryCondition, IfcStructuralConnectionCondition, IfcAxis2Placement3D, IfcRelConnectsStructuralMember } from './'
import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcLengthMeasure } from '../types'

/** The entity IfcRelConnectsWithEccentricity adds the definition of eccentricity to the connection between a structural member and a structural connection (representing either a node or support)
 *
 * Use DefinitionPoint Connection ConnectionConstraint shall be of type IfcConnectionPointGeometry and shall refer to two instances of IfcVertexPoint
 *
 * Curve Connection ConnectionConstraint shall be of type IfcConnectionCurveGeometry and shall refer to two instances of IfcEdge or subtypes
 *
 * Surface Connection ConnectionConstraint shall be of type IfcConnectionSurfaceGeometry and shall refer to two instances of IfcFaceSurface.
 */
 class IfcRelConnectsWithEccentricity extends IfcRelConnectsStructuralMember {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatingStructuralMember:IfcStructuralMember, RelatedStructuralConnection:IfcStructuralConnection, AppliedCondition:IfcBoundaryCondition, AdditionalConditions:IfcStructuralConnectionCondition, SupportedLength:IfcLengthMeasure, ConditionCoordinateSystem:IfcAxis2Placement3D, ConnectionConstraint:IfcConnectionGeometry) {
        super(GlobalId, OwnerHistory, Name, Description, RelatingStructuralMember, RelatedStructuralConnection, AppliedCondition, AdditionalConditions, SupportedLength, ConditionCoordinateSystem)
        this.ConnectionConstraint = ConnectionConstraint
    }
    /** The connection constraint explicitly states the eccentricity between a structural member and a structural connection by means of two topological objects (vertex and vertex, or edge and edge, or face and face).
    */
    ConnectionConstraint: IfcConnectionGeometry
}

export default IfcRelConnectsWithEccentricity