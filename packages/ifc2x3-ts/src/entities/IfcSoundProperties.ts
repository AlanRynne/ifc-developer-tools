// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSoundProperties

import { IfcBoolean, IfcSoundScaleEnum, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcSoundValue, IfcOwnerHistory, IfcPropertySetDefinition } from './'

/**  */
 class IfcSoundProperties extends IfcPropertySetDefinition {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, IsAttenuating:IfcBoolean, SoundScale:IfcSoundScaleEnum, SoundValues:Array<IfcSoundValue>) {
        super(GlobalId, OwnerHistory, Name, Description)
        this.IsAttenuating = IsAttenuating
        this.SoundScale = SoundScale
        this.SoundValues = SoundValues
    }

    IsAttenuating: IfcBoolean

    SoundScale?: IfcSoundScaleEnum

    SoundValues: Array<IfcSoundValue>
}

export default IfcSoundProperties