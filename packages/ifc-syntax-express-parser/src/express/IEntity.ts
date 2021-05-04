
export interface IEntity {
    ifcType: string,
    name: string,
    abstract: boolean,
    supertype: string,
    subtypes: string[],
    properties: any,
    unique: any,
    derive: any,
    inverse: any,
    where: any
}