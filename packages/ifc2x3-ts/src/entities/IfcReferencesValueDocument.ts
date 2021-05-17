// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcReferencesValueDocument

import { IfcDocumentSelect, IfcLabel, IfcText } from '../types'
import { IfcAppliedValue } from './'

/**  */
 class IfcReferencesValueDocument  {
    constructor(ReferencedDocument:IfcDocumentSelect, ReferencingValues:Array<IfcAppliedValue>, Name:IfcLabel, Description:IfcText) {

        this.ReferencedDocument = ReferencedDocument
        this.ReferencingValues = ReferencingValues
        this.Name = Name
        this.Description = Description
    }

    ReferencedDocument: IfcDocumentSelect

    ReferencingValues: Array<IfcAppliedValue>

    Name?: IfcLabel

    Description?: IfcText
}

export default IfcReferencesValueDocument