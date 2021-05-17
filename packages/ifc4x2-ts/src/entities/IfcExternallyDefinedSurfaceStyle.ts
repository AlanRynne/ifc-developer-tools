// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcExternallyDefinedSurfaceStyle

import { IfcURIReference, IfcIdentifier, IfcLabel } from '../types'
import { IfcExternalReference } from './'

/** IfcExternallyDefinedSurfaceStyle is a definition of a surface style through referencing an external source, such as a material library for rendering information.
 */
 class IfcExternallyDefinedSurfaceStyle extends IfcExternalReference {
    constructor(Location:IfcURIReference, Identification:IfcIdentifier, Name:IfcLabel) {
        super(Location, Identification, Name)

    }

}

export default IfcExternallyDefinedSurfaceStyle