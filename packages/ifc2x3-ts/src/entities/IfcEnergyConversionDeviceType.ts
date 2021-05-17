// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcEnergyConversionDeviceType

import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcDistributionFlowElementType } from './'

/** The element type IfcEnergyConversionType defines a list of commonly shared property set definitions of an energy conversion device and an optional set of product representations.
 *
 * It is used to define an energy conversion device specification (the specific product information, that is common to all occurrences of that product type)
 *
 * A energy conversion type is used to define the common properties of a energy conversion device that may be applied to many occurrences of that type.
 *
 * An energy conversion device is a building systems device that converts energy from one form into another such as a boiler (combusting gas to heat water), chiller (using a refrigeration cycle to cool a liquid), or a cooling coil (using the phase-change characteristics of a refrigerant to cool air).
 *
 * Energy conversion types (or the instantiable subtypes) may be exchanged without being already assigned to occurrences
 *
 * Occurrences of the IfcEnergyConversionType are represented by instances of IfcEnergyConversionDevice or its subtypes.
 */
abstract class IfcEnergyConversionDeviceType extends IfcDistributionFlowElementType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcLabel, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)

    }

}

export default IfcEnergyConversionDeviceType