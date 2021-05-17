// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcObjective

import { IfcConstraint } from './'
import { IfcLogicalOperatorEnum, IfcObjectiveEnum, IfcLabel, IfcText, IfcConstraintEnum, IfcActorSelect, IfcDateTime } from '../types'

/** An IfcObjective captures qualitative information for an objective-based constraint
 *
 * IfcObjective is a subtype of IfcConstraint and may be associated with any subtype of IfcRoot through the IfcRelAssociatesConstraint relationship in the IfcControlExtension schema, or may be associated with IfcProperty by IfcResourceConstraintRelationship
 *
 * The aim of IfcObjective is to specify the purpose for which the constraint is applied and to capture the benchmark metrics of the constraint.
 */
 class IfcObjective extends IfcConstraint {
    constructor(Name:IfcLabel, Description:IfcText, ConstraintGrade:IfcConstraintEnum, ConstraintSource:IfcLabel, CreatingActor:IfcActorSelect, CreationTime:IfcDateTime, UserDefinedGrade:IfcLabel, BenchmarkValues:Array<IfcConstraint>, LogicalAggregator:IfcLogicalOperatorEnum, ObjectiveQualifier:IfcObjectiveEnum, UserDefinedQualifier:IfcLabel) {
        super(Name, Description, ConstraintGrade, ConstraintSource, CreatingActor, CreationTime, UserDefinedGrade)
        this.BenchmarkValues = BenchmarkValues
        this.LogicalAggregator = LogicalAggregator
        this.ObjectiveQualifier = ObjectiveQualifier
        this.UserDefinedQualifier = UserDefinedQualifier
    }
    /** A list of nested constraints.
     * IFC2X4 CHANGE Modified to be a LIST of nested constraints, which replaces the former IfcConstraintAggregationRelationship.
    */
    BenchmarkValues?: Array<IfcConstraint>
    /** Enumeration that identifies the logical type of aggregation for the benchmark metrics.
     * IFC2X4 CHANGE This attribute replaces replaces the former ResultValues attribute and indicates the aggregation behavior formerly defined at IfcConstraintAggregationRelationship.
    */
    LogicalAggregator?: IfcLogicalOperatorEnum
    /** Enumeration that qualifies the type of objective constraint.
    */
    ObjectiveQualifier: IfcObjectiveEnum
    /** A user defined value that qualifies the type of objective constraint when ObjectiveQualifier attribute of type IfcObjectiveEnum has value USERDEFINED.
    */
    UserDefinedQualifier?: IfcLabel
}

export default IfcObjective