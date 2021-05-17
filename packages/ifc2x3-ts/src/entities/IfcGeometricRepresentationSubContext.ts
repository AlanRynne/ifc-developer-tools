// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcGeometricRepresentationSubContext

import { IfcGeometricRepresentationContext, IfcDirection } from './'
import { IfcPositiveRatioMeasure, IfcGeometricProjectionEnum, IfcLabel, IfcDimensionCount, IfcAxis2Placement } from '../types'

/** IfcGeometricRepresentationSubContext defines the context that applies to several shape representations of a product being a sub context, sharing the WorldCoordinateSystem, CoordinateSpaceDimension, Precision and TrueNorth attributes with the parent IfcGeometricRepresentationContext
 *
 * The IfcGeometricRepresentationSubContext is used to define semantically distinguished representation types for different information content, dependent on the representation view and the target scale.
 *
 * It can be used to control the level of detail of the shape representation that is most applicable to this geometric representation context.
 *
 * In addition the sub context is used to control the later appearance of the IfcShapeRepresentation within a plot view
 *
 * Each IfcProduct can then have several instances of subtypes of IfcRepresentation, each being assigned to a different IfcGeometricRepresentationSubContext).
 *
 * The applicable values for the inherited ContextIdentifier attribute shall be identical to the RepresentationIdentifier attrubute defined at IfcShapeRepresentation.
 */
 class IfcGeometricRepresentationSubContext extends IfcGeometricRepresentationContext {
    constructor(ContextIdentifier:IfcLabel, ContextType:IfcLabel, CoordinateSpaceDimension:IfcDimensionCount, Precision:number, WorldCoordinateSystem:IfcAxis2Placement, TrueNorth:IfcDirection, ParentContext:IfcGeometricRepresentationContext, TargetScale:IfcPositiveRatioMeasure, TargetView:IfcGeometricProjectionEnum, UserDefinedTargetView:IfcLabel) {
        super(ContextIdentifier, ContextType, CoordinateSpaceDimension, Precision, WorldCoordinateSystem, TrueNorth)
        this.ParentContext = ParentContext
        this.TargetScale = TargetScale
        this.TargetView = TargetView
        this.UserDefinedTargetView = UserDefinedTargetView
    }
    /** Parent context from which the sub context derives its world coordinate system, precision, space coordinate dimension and true north.
    */
    ParentContext: IfcGeometricRepresentationContext
    /** The target plot scale of the representation to which this representation context applies.
     * Scale indicates the target plot scale for the representation sub context, all annotation styles are given in plot dimensions according to this target plot scale.
     * If multiple instances of IfcGeometricRepresentationSubContext are given having the same TargetView value, the target plot scale applies up to the next smaller scale, or up to unlimited small scale.
     * Scale 1:100 (given as 0.01 within TargetScale) is bigger then 1:200 (given as 0.005 within TargetScale).
    */
    TargetScale?: IfcPositiveRatioMeasure
    /** Target view of the representation to which this representation context applies.
    */
    TargetView: IfcGeometricProjectionEnum
    /** User defined target view, this attribute value shall be given, if the TargetView attribute is set to USERDEFINED.
    */
    UserDefinedTargetView?: IfcLabel
}

export default IfcGeometricRepresentationSubContext