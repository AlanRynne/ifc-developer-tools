// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcExternallyDefinedSurfaceStyle

import { IfcLabel, IfcIdentifier } from '../types'
import { IfcExternalReference } from './'

/** IfcExternallyDefinedSurfaceStyle is a definition of a surface style through referencing an external source, such as a material library for rendering information.
 */
 class IfcExternallyDefinedSurfaceStyle extends IfcExternalReference {
    constructor(Location:IfcLabel, ItemReference:IfcIdentifier, Name:IfcLabel) {
        super(Location, ItemReference, Name)

    }

}

export default IfcExternallyDefinedSurfaceStyle