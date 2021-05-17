// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcMetric

import { IfcBenchmarkEnum, IfcLabel, IfcMetricValueSelect, IfcText, IfcConstraintEnum, IfcActorSelect, IfcDateTime } from '../types'
import { IfcReference, IfcConstraint } from './'

/** An IfcMetric is used to capture quantitative resultant metrics that can be applied to objectives.
 *
 * IfcMetric is a subtype of IfcConstraint and may be associated with any subtype of IfcRoot through the IfcRelAssociatesConstraint relationship in the IfcControlExtension schema, or may be associated with IfcProperty by IfcResourceConstraintRelationship.
 *
 * The aim of IfcMetric is to capture the quantitative aspects of a constraint.
 */
 class IfcMetric extends IfcConstraint {
    constructor(Name:IfcLabel, Description:IfcText, ConstraintGrade:IfcConstraintEnum, ConstraintSource:IfcLabel, CreatingActor:IfcActorSelect, CreationTime:IfcDateTime, UserDefinedGrade:IfcLabel, Benchmark:IfcBenchmarkEnum, ValueSource:IfcLabel, DataValue:IfcMetricValueSelect, ReferencePath:IfcReference) {
        super(Name, Description, ConstraintGrade, ConstraintSource, CreatingActor, CreationTime, UserDefinedGrade)
        this.Benchmark = Benchmark
        this.ValueSource = ValueSource
        this.DataValue = DataValue
        this.ReferencePath = ReferencePath
    }
    /** Enumeration that identifies the type of benchmark data.
    */
    Benchmark: IfcBenchmarkEnum
    /** Reference source for data values.
     * If DataValue refers to an IfcTable, this attribute identifies the relevent column identified by IfcTableColumn.Identifier.
    */
    ValueSource?: IfcLabel
    /** The value to be compared on associated objects.
     * A null value indicates comparison to null.
     * IFC4 ADD1 CHANGE This attribute is now optional.
    */
    DataValue?: IfcMetricValueSelect
    /** Optional path to an attribute to be constrained on associated objects.
     * If provided, the metric may be validated by resolving the path to the current value on associated object(s), and comparing such value with DataValue according to the Benchmark.
    */
    ReferencePath?: IfcReference
}

export default IfcMetric