// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcAnnotation

import { IfcAnnotationTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcProduct } from './'

/** An annotation is a graphical representation within the geometric (and spatial) context of a project, that adds a note or meaning to the objects which constitutes the project model.
 *
 * Annotations include additional points, curves, text, dimensioning, hatching and other forms of graphical notes.
 *
 * It also include symbolic representations of additional model components, not representing products or spatial structures, such as survey points, contour lines or similar.
 *
 * If available, the annotation should be related to the spatial context of the project, by containing the annotation within the appropriate level of the building structure (site, building, storey, or space).
 *
 * This is handled by the IfcRelContainedInSpatialStructure relationship
 *
 * The IfcAnnotation can provide specific 0D, 1D, and 2D geometric items as representation of the annotation, offering annotation point, curves, and surfaces.
 *
 * The following values shall be used for the ObjectType.
 */
 class IfcAnnotation extends IfcProduct {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, PredefinedType:IfcAnnotationTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation)
        this.PredefinedType = PredefinedType
    }
    /** undefined
    */
    PredefinedType?: IfcAnnotationTypeEnum
}

export default IfcAnnotation