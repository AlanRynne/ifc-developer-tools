// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcDimensionalExponents



/** 
 */
 class IfcDimensionalExponents  {
    constructor(LengthExponent:number, MassExponent:number, TimeExponent:number, ElectricCurrentExponent:number, ThermodynamicTemperatureExponent:number, AmountOfSubstanceExponent:number, LuminousIntensityExponent:number) {

        this.LengthExponent = LengthExponent
        this.MassExponent = MassExponent
        this.TimeExponent = TimeExponent
        this.ElectricCurrentExponent = ElectricCurrentExponent
        this.ThermodynamicTemperatureExponent = ThermodynamicTemperatureExponent
        this.AmountOfSubstanceExponent = AmountOfSubstanceExponent
        this.LuminousIntensityExponent = LuminousIntensityExponent
    }
    /** The power of the length base quantity.
    */
    LengthExponent: number
    /** The power of the mass base quantity.
    */
    MassExponent: number
    /** The power of the time base quantity.
    */
    TimeExponent: number
    /** The power of the electric current base quantity.
    */
    ElectricCurrentExponent: number
    /** The power of the thermodynamic temperature base quantity.
    */
    ThermodynamicTemperatureExponent: number
    /** The power of the amount of substance base quantity.
    */
    AmountOfSubstanceExponent: number
    /** The power of the luminous intensity base quantity.
    */
    LuminousIntensityExponent: number
}

export default IfcDimensionalExponents