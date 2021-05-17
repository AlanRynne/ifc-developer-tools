// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRepresentationContext

import { IfcLabel } from '../types'

/** The IfcRepresentationContext defines the context to which the IfcRepresentation of a product is related.
 */
abstract class IfcRepresentationContext  {
    constructor(ContextIdentifier:IfcLabel, ContextType:IfcLabel) {

        this.ContextIdentifier = ContextIdentifier
        this.ContextType = ContextType
    }
    /** The optional identifier of the representation context as used within a project.
    */
    ContextIdentifier?: IfcLabel
    /** The description of the type of a representation context.
     * The supported values for context type are to be specified by implementers agreements.
    */
    ContextType?: IfcLabel
}

export default IfcRepresentationContext