// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcDocumentElectronicFormat

import { IfcLabel } from '../types'

/**  */
 class IfcDocumentElectronicFormat  {
    constructor(FileExtension:IfcLabel, MimeContentType:IfcLabel, MimeSubtype:IfcLabel) {

        this.FileExtension = FileExtension
        this.MimeContentType = MimeContentType
        this.MimeSubtype = MimeSubtype
    }

    FileExtension?: IfcLabel

    MimeContentType?: IfcLabel

    MimeSubtype?: IfcLabel
}

export default IfcDocumentElectronicFormat