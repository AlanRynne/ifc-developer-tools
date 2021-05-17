// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelInteractionRequirements

import { IfcCountMeasure, IfcNormalisedRatioMeasure, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcSpatialStructureElement, IfcSpaceProgram, IfcOwnerHistory, IfcRelConnects } from './'

/**  */
 class IfcRelInteractionRequirements extends IfcRelConnects {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, DailyInteraction:IfcCountMeasure, ImportanceRating:IfcNormalisedRatioMeasure, LocationOfInteraction:IfcSpatialStructureElement, RelatedSpaceProgram:IfcSpaceProgram, RelatingSpaceProgram:IfcSpaceProgram) {
        super(GlobalId, OwnerHistory, Name, Description)
        this.DailyInteraction = DailyInteraction
        this.ImportanceRating = ImportanceRating
        this.LocationOfInteraction = LocationOfInteraction
        this.RelatedSpaceProgram = RelatedSpaceProgram
        this.RelatingSpaceProgram = RelatingSpaceProgram
    }

    DailyInteraction?: IfcCountMeasure

    ImportanceRating?: IfcNormalisedRatioMeasure

    LocationOfInteraction?: IfcSpatialStructureElement

    RelatedSpaceProgram: IfcSpaceProgram

    RelatingSpaceProgram: IfcSpaceProgram
}

export default IfcRelInteractionRequirements