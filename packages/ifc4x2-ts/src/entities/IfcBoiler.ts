// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcBoiler

import { IfcBoilerTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcEnergyConversionDevice } from './'

/** A boiler is a closed, pressure-rated vessel in which water or other fluid is heated using an energy source such as natural gas, heating oil, or electricity.
 *
 * The fluid in the vessel is then circulated out of the boiler for use in various processes or heating applications
 *
 * IfcBoiler is a vessel solely used for heating of water or other fluids.
 *
 * Storage vessels, such as for drinking water storage are considered as tanks and use the IfcTank entity.
 */
 class IfcBoiler extends IfcEnergyConversionDevice {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcBoilerTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.PredefinedType = PredefinedType
    }
    /** 
    */
    PredefinedType?: IfcBoilerTypeEnum
}

export default IfcBoiler