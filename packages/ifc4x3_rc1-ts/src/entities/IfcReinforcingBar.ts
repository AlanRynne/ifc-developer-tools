// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcReinforcingBar

import { IfcPositiveLengthMeasure, IfcAreaMeasure, IfcReinforcingBarTypeEnum, IfcReinforcingBarSurfaceEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcReinforcingElement } from './'

/** A reinforcing bar is usually made of steel with manufactured deformations in the surface, and used in concrete and masonry construction to provide additional strength.
 *
 * A single instance of this class may represent one or many of actual rebars, for example a row of rebars
 *
 * Geometry Use DefinitionPlacement and representation are defined at the supertype IfcElementComponent
 *
 * The representation map of a mapped 'Body' representation should contain a representation of type 'AdvancedSweptSolid' which holds an IfcSweptDiskSolid (including subtype IfcSweptDiskSolidPolygonal).
 */
 class IfcReinforcingBar extends IfcReinforcingElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, SteelGrade:IfcLabel, NominalDiameter:IfcPositiveLengthMeasure, CrossSectionArea:IfcAreaMeasure, BarLength:IfcPositiveLengthMeasure, PredefinedType:IfcReinforcingBarTypeEnum, BarSurface:IfcReinforcingBarSurfaceEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag, SteelGrade)
        this.NominalDiameter = NominalDiameter
        this.CrossSectionArea = CrossSectionArea
        this.BarLength = BarLength
        this.PredefinedType = PredefinedType
        this.BarSurface = BarSurface
    }
    /** Deprecated. IFC4 CHANGE Attribute made optional and deprecated.
     * Use respective attribute at IfcReinforcingBarType instead.
    */
    NominalDiameter?: IfcPositiveLengthMeasure
    /** The effective cross-section area of the reinforcing bar or group of bars.
     * IFC4 CHANGE Attribute made optional.
    */
    CrossSectionArea?: IfcAreaMeasure
    /** Deprecated. IFC4 CHANGE Attribute deprecated.
     * Use respective attribute at IfcReinforcingBarType instead.
    */
    BarLength?: IfcPositiveLengthMeasure
    /** The role, purpose or usage of the bar, i.e. the kind of loads and stresses it is intended to carry.
     * IFC4 CHANGE Attribute renamed from BarRole to PredefinedType and made optional.
     * Type changed from IfcReinforcingBarRoleEnum without changes to the range of enumeration items.
    */
    PredefinedType?: IfcReinforcingBarTypeEnum
    /** Deprecated. IFC4 CHANGE Attribute made optional and deprecated.
     * Use respective attribute at IfcReinforcingBarType instead.
    */
    BarSurface?: IfcReinforcingBarSurfaceEnum
}

export default IfcReinforcingBar