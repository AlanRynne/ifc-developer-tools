// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPerformanceHistory

import { IfcLabel, IfcPerformanceHistoryTypeEnum, IfcGloballyUniqueId, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcControl } from './'

/** IfcPerformanceHistory is used to document the actual performance of an occurrence instance over time.
 *
 * It includes machine-measured data from building automation systems and human-specified data such as task and resource usage.
 *
 * The data may represent actual conditions, predictions, or simulations
 *
 * The realtime data tracked by performance history takes the form of property sets where all properties are based on time series.
 *
 * Unlike design-based data at occurrences and types, performance-driven data is time-sensitive and may change in realtime by some measurement device.
 *
 * Data may be captured at irregular intervals such as when values change beyond established thresholds, or at regular intervals of specified duration
 *
 * IfcPerformanceHistory may be declared within a project using IfcRelDeclares where RelatingContext refers to the IfcProject and RelatedDefinitions includes the IfcPerformanceHistory.
 *
 * Default units (used for property sets) are indicated by the declaring project.
 *
 * Only top-level objects are declared; nested performance history objects (through IfcRelNests) do not participate in such relationship.
 */
 class IfcPerformanceHistory extends IfcControl {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, Identification:IfcIdentifier, LifeCyclePhase:IfcLabel, PredefinedType:IfcPerformanceHistoryTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, Identification)
        this.LifeCyclePhase = LifeCyclePhase
        this.PredefinedType = PredefinedType
    }
    /** Describes the applicable building life-cycle phase.
     * Typical values should be DESIGNDEVELOPMENT, SCHEMATICDEVELOPMENT, CONSTRUCTIONDOCUMENT, CONSTRUCTION, ASBUILT, COMMISSIONING, OPERATION, etc.
    */
    LifeCyclePhase: IfcLabel
    /** Predefined generic type for a performace history that is specified in an enumeration.
     * IFC4 CHANGE The attribute has been added at the end of the entity definition.
    */
    PredefinedType?: IfcPerformanceHistoryTypeEnum
}

export default IfcPerformanceHistory