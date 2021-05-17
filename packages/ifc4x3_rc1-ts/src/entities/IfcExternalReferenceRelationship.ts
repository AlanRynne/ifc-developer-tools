// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcExternalReferenceRelationship

import { IfcExternalReference, IfcResourceLevelRelationship } from './'
import { IfcResourceObjectSelect, IfcLabel, IfcText } from '../types'

/** IfcExternalReferenceRelationship is a relationship entity that enables objects from the IfcResourceObjectSelect to have the ability to be tagged by external references.
 */
 class IfcExternalReferenceRelationship extends IfcResourceLevelRelationship {
    constructor(Name:IfcLabel, Description:IfcText, RelatingReference:IfcExternalReference, RelatedResourceObjects:Array<IfcResourceObjectSelect>) {
        super(Name, Description)
        this.RelatingReference = RelatingReference
        this.RelatedResourceObjects = RelatedResourceObjects
    }
    /** An external reference that can be used to tag an object within the range of IfcResourceObjectSelect.
     * External references can be a library reference (for example a dictionary or a catalogue reference), a classification reference, or a documentation reference.
    */
    RelatingReference: IfcExternalReference
    /** Objects within the list of IfcResourceObjectSelect that can be tagged by an external reference to a dictionary, library, catalogue, classification or documentation.
    */
    RelatedResourceObjects: Array<IfcResourceObjectSelect>
}

export default IfcExternalReferenceRelationship