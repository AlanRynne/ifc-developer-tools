// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcConnectionPortGeometry

import { IfcAxis2Placement } from '../types'
import { IfcProfileDef, IfcConnectionGeometry } from './'

/**  */
 class IfcConnectionPortGeometry extends IfcConnectionGeometry {
    constructor(LocationAtRelatingElement:IfcAxis2Placement, LocationAtRelatedElement:IfcAxis2Placement, ProfileOfPort:IfcProfileDef) {
        super()
        this.LocationAtRelatingElement = LocationAtRelatingElement
        this.LocationAtRelatedElement = LocationAtRelatedElement
        this.ProfileOfPort = ProfileOfPort
    }

    LocationAtRelatingElement: IfcAxis2Placement

    LocationAtRelatedElement?: IfcAxis2Placement

    ProfileOfPort: IfcProfileDef
}

export default IfcConnectionPortGeometry