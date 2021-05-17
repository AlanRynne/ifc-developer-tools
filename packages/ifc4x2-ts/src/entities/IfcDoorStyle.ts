// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcDoorStyle

import { IfcDoorStyleOperationEnum, IfcDoorStyleConstructionEnum, IfcBoolean, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcTypeProduct } from './'

/** Definition: The door style, IfcDoorStyle, defines a particular style of doors, which may be included into the spatial context of the building model through instances of IfcDoor.
 *
 * A door style defines the overall parameter of the door style and refers to the particular parameter of the lining and one (or several) panels through the IfcDoorLiningProperties and the IfcDoorPanelProperties
 *
 * The door entity, IfcDoor, defines a particular occurrence of a door inserted in the spatial context of a project.
 *
 * The actual parameter of the door and/or its shape is defined at the IfcDoorStyle, to which the IfcDoor is related by the inverse relationship IsDefinedBy pointing to IfcRelDefinedByType.
 *
 * The IfcDoorStyle also defines the particular attributes for the lining, IfcDoorLiningProperties, and panels, IfcDoorPanelProperties
 *
 * The IfcDoorStyle defines the baseline geometry, or the representation map, for all occurrences of the door style, given by the IfcDoor, pointing to this style.
 *
 * The representation of the door style may be given by the agreed set of minimal parameters, defined for the door lining and the door panel(s), or it may be given by a geometric representation used by the IfcRepresentationMap.
 *
 * The attribute ParameterTakesPrecedence decides, whether the set of parameters can be used to exactly represent the shape of the door style (TRUE), or whether the attached IfcRepresentationMap holds the exact representation (FALSE)
 *
 * The IfcDoorStyleOperationTypeEnum defines the general layout of the door style.
 *
 * Depending on the enumerator, the appropriate instances of IfcDoorLiningProperties and IfcDoorPanelProperties are attached in the list of HasPropertySets.
 *
 * The IfcDoorStyleOperationTypeEnum mainly determines the hinge side (left hung, or right hung), the operation (swinging, sliding, folding, etc.) and the number of panels
 *
 * See geometry use definitions at IfcDoorStyleOperationTypeEnum for the correct usage of opening symbols for different operation types.
 */
 class IfcDoorStyle extends IfcTypeProduct {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, OperationType:IfcDoorStyleOperationEnum, ConstructionType:IfcDoorStyleConstructionEnum, ParameterTakesPrecedence:IfcBoolean, Sizeable:IfcBoolean) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag)
        this.OperationType = OperationType
        this.ConstructionType = ConstructionType
        this.ParameterTakesPrecedence = ParameterTakesPrecedence
        this.Sizeable = Sizeable
    }
    /** Type defining the general layout and operation of the door style.
    */
    OperationType: IfcDoorStyleOperationEnum
    /** Type defining the basic construction and material type of the door.
    */
    ConstructionType: IfcDoorStyleConstructionEnum
    /** The Boolean value reflects, whether the parameter given in the attached lining and panel properties exactly define the geometry (TRUE), or whether the attached style shape take precedence (FALSE).
     * In the last case the parameter have only informative value.
    */
    ParameterTakesPrecedence: IfcBoolean
    /** The Boolean indicates, whether the attached IfcMappedRepresentation (if given) can be sized (using scale factor of transformation), or not (FALSE).
     * If not, the IfcMappedRepresentation should be IfcShapeRepresentation of the IfcDoor (using IfcMappedItem as the Item) with the scale factor = 1.
    */
    Sizeable: IfcBoolean
}

export default IfcDoorStyle