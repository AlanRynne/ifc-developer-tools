// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcWindowStyle

import { IfcWindowStyleConstructionEnum, IfcWindowStyleOperationEnum, IfcBoolean, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcTypeProduct } from './'

/** The window style defines a particular style of windows, which may be included into the spatial context of the building model through instances of IfcWindow.
 *
 * A window style defines the overall parameter of the window style and refers to the particular parameter of the lining and one (or several) panels through IfcWindowLiningProperties and IfcWindowPanelProperties
 *
 * The window entity (IfcWindow) defines a particular occurrence of a window inserted in the spatial context of a project.
 *
 * The actual parameter of the window and/or its shape is defined at the IfcWindowStyle, to which the IfcWindow related by the inverse relationship IsDefinedBy pointing to IfcRelDefinesByType.
 *
 * The IfcWindowStyle also defines the particular attributes for the lining (IfcWindowLiningProperties) and panels (IfcWindowPanelProperties)
 *
 * The IfcWindowStyle defines the baseline geometry, or the representation map, for all occurrences of the window style, given by the IfcWindow, pointing to this style.
 *
 * The representation of the window style may be given by the agreed set of minimal parameters, defined for the window lining and the window panel(s), or it may be given by a geometric representation used by the IfcRepresentationMap.
 *
 * The attribute ParameterTakesPrecedence decides, whether the set of parameters can be used to exactly represent the shape of the window style (TRUE), or whether the attached IfcRepresentationMap holds the exact representation (FALSE)
 *
 * The IfcWindowStyleOperationTypeEnum defines the general layout of the window style.
 *
 * Depending on the enumerator, the appropriate instances of IfcWindowLiningProperties and IfcWindowPanelProperties are attached in the list of HasPropertySets.
 *
 * See geometry use definitions there.
 */
 class IfcWindowStyle extends IfcTypeProduct {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ConstructionType:IfcWindowStyleConstructionEnum, OperationType:IfcWindowStyleOperationEnum, ParameterTakesPrecedence:IfcBoolean, Sizeable:IfcBoolean) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag)
        this.ConstructionType = ConstructionType
        this.OperationType = OperationType
        this.ParameterTakesPrecedence = ParameterTakesPrecedence
        this.Sizeable = Sizeable
    }
    /** Type defining the basic construction and material type of the window.
    */
    ConstructionType: IfcWindowStyleConstructionEnum
    /** Type defining the general layout and operation of the window style.
    */
    OperationType: IfcWindowStyleOperationEnum
    /** The Boolean value reflects, whether the parameter given in the attached lining and panel properties exactly define the geometry (TRUE), or whether the attached style shape take precedence (FALSE).
     * In the last case the parameter have only informative value.
    */
    ParameterTakesPrecedence: IfcBoolean
    /** The Boolean indicates, whether the attached ShapeStyle can be sized (using scale factor of transformation), or not (FALSE).
     * If not, the ShapeStyle should be inserted by the IfcWindow (using IfcMappedItem) with the scale factor = 1.
    */
    Sizeable: IfcBoolean
}

export default IfcWindowStyle