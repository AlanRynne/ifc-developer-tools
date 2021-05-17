// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcQuantityVolume

import { IfcVolumeMeasure, IfcLabel, IfcText } from '../types'
import { IfcNamedUnit, IfcPhysicalSimpleQuantity } from './'

/** IfcQuantityVolume is a physical quantity that defines a derived volume measure to provide an element's physical property.
 *
 * It is normally derived from the physical properties of the element under the specific measure rules given by a method of measurement.
 */
 class IfcQuantityVolume extends IfcPhysicalSimpleQuantity {
    constructor(Name:IfcLabel, Description:IfcText, Unit:IfcNamedUnit, VolumeValue:IfcVolumeMeasure) {
        super(Name, Description, Unit)
        this.VolumeValue = VolumeValue
    }
    /** Volume measure value of this quantity.
    */
    VolumeValue: IfcVolumeMeasure
}

export default IfcQuantityVolume