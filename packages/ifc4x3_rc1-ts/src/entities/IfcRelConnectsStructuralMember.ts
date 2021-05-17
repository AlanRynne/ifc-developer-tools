// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelConnectsStructuralMember

import { IfcStructuralMember, IfcStructuralConnection, IfcBoundaryCondition, IfcStructuralConnectionCondition, IfcAxis2Placement3D, IfcOwnerHistory, IfcRelConnects } from './'
import { IfcLengthMeasure, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'

/** The entity IfcRelConnectsStructuralMember defines all needed properties describing the connection between structural members and structural connection objects (nodes or supports)
 *
 * Use DefinitionPoint Connection Instances of the entity IfcRelConnectsStructuralMember shall be used to describe a connection between an instance of IfcStructuralPointConnection and either an instance of IfcStructuralCurveMember or IfcStructuralSurfaceMember.
 *
 * The RelatedStructuralConnection for point connections has to be of type IfcStructuralPointConnection
 *
 * Curve Connection Instances of the entity IfcRelConnectsStructuralMember shall be used to describe a connection between an instance of IfcStructuralCurveConnection and an instance of either IfcStructuralCurveMember or IfcStructuralSurfaceMember.
 *
 * The RelatedStructuralConnection for curve connections has to be of type IfcStructuralCurveConnection
 *
 * Surface Connection Instances of the entity IfcRelConnectsStructuralMember shall be used to describe a connection between an instance of IfcStructuralSurfaceConnection and an instance of IfcStructuralSurfaceMember.
 *
 * The RelatedStructuralConnection for curve connections has to be of type IfcStructuralSurfaceConnection
 *
 * Coordinate System for Applied Conditions All values defined by AppliedCondition or AdditionalConditions are given within the coordinate system provided by ConditionCoordinateSystem, which is defined relative to the local coordinate system of the structural member.
 *
 * If the ConditionCoordinateSystem is not defined, the local coordinate system of the structural member is used instead
 *
 * Supported Length Optionally a supported length can be given, which specifies the length (or width) of the physical connection along a curve connection
 *
 * Figure 310 illustrates the appropriate definition of support lengths.
 */
 class IfcRelConnectsStructuralMember extends IfcRelConnects {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatingStructuralMember:IfcStructuralMember, RelatedStructuralConnection:IfcStructuralConnection, AppliedCondition:IfcBoundaryCondition, AdditionalConditions:IfcStructuralConnectionCondition, SupportedLength:IfcLengthMeasure, ConditionCoordinateSystem:IfcAxis2Placement3D) {
        super(GlobalId, OwnerHistory, Name, Description)
        this.RelatingStructuralMember = RelatingStructuralMember
        this.RelatedStructuralConnection = RelatedStructuralConnection
        this.AppliedCondition = AppliedCondition
        this.AdditionalConditions = AdditionalConditions
        this.SupportedLength = SupportedLength
        this.ConditionCoordinateSystem = ConditionCoordinateSystem
    }
    /** Reference to an instance of IfcStructuralMember (or its subclasses) which is connected to the specified structural connection.
    */
    RelatingStructuralMember: IfcStructuralMember
    /** Reference to an instance of IfcStructuralConnection (or its subclasses) which is connected to the specified structural member.
    */
    RelatedStructuralConnection: IfcStructuralConnection
    /** Conditions which define the connections properties.
     * Connection conditions are often called "release" but are not only used to define mechanisms like hinges but also rigid, elastic, and other conditions.
    */
    AppliedCondition?: IfcBoundaryCondition
    /** Describes additional connection properties.
    */
    AdditionalConditions?: IfcStructuralConnectionCondition
    /** Defines the 'supported length' of this structural connection.
     * See Fig. for more detail.
    */
    SupportedLength?: IfcLengthMeasure
    /** Defines a coordinate system used for the description of the connection properties in ConnectionCondition relative to the local coordinate system of RelatingStructuralMember.
     * If left unspecified, the placement IfcAxis2Placement3D((x,y,z), ?, ?) is implied with x,y,z being the local member coordinates where the connection is made and the default axes directions being in parallel with the local axes of RelatingStructuralMember.
    */
    ConditionCoordinateSystem?: IfcAxis2Placement3D
}

export default IfcRelConnectsStructuralMember