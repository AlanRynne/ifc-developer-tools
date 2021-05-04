@{%
import { lexer } from "./tokens"
import { extractPair, extractArray } from "./utilities"
%}
@preprocessor typescript
@lexer lexer

main -> type {% id %} 
        | comment {% id %}
        | schemaTag {% id %}
        | entity {% id %}
        | function {% id %}
        | rule {% id %}
        | %schema_end _ ";" {%
            function(data: any[]) {
                return null
            }
        %}

schemaTag -> %schema _ word _ ";" {%
    function(data: any[]) {
        return {
            name: "schema",
            version: data[2]
        }
    }
%}

comment -> %cmnt_start (_ %anything):+ _ %cmnt_end {% 
    function(data: any[]) {
        let newData: any[] = []
        data[1].forEach((array:any[]) => {
            newData.push(array[1].text)
        });
        return {
            ifcType: "comment",
            name: "comment",
            value: newData
        }
    }
%}

rule -> "RULE" 
        _ word 
        _ "FOR" 
        _ "(" _ word _ ")" _ ";" 
        _ functionContent 
        _ "END_RULE" _ ";" 
        {%
            function(data: any[]) {
                return {
                    ifcType: "rule",
                    name: data[2],
                    for: data[8]
                }
            }
        %}

function -> "FUNCTION" 
            _ word 
            _ "(" _ functionArgs _ ")" 
            _ ":" 
            _ functionReturn _ ";"
            _ functionContent
            _ "END_FUNCTION" _ ";"
            {%
                function(data: any[]) {
                    return {
                        ifcType: "function",
                        name: data[2],
                        arguments: data[6],
                        code: null,
                        returns: data[12]
                    }
                }
            %}

functionArgs -> functionArg (_ ";" _ functionArg):* {%
    function(data: any[]) {
        var obj = {}
        data[0].names.forEach((name: string) => obj[name] = data[0].type)
        if(data[1]) data[1].forEach((d: any[]) => {
            d[3].names.forEach((name: string) => obj[name] = d[3].type)
        })
        return obj
    }
%}

functionArg -> word (_ "," _ word):* _ ":" _ (("GENERIC"|"Generic") _ ":"):? _ typeInput {%
    function(data: any[]){
        var names = [data[0]]
        data[1].forEach((d:any[])=> names.push(d[3]))
        return {
            names: names,
            type: {
                type: data[7],
                generic: data[5] ? true : false
            }
        }
    }
%}

functionReturn -> (("GENERIC"|"Generic") _ ":"):? _ typeInput{%
    function(data: any[]){
        return {
            type: data[2],
            generic:  data[0] ? true : false
        }
    }
%}

functionContent -> %unsupported (( _ (anything|string)):+ _ ";"):+ {% 
    function(data: any[]) {
        return null
    }
%}

entity -> "ENTITY" 
        _ word 
        _ "ABSTRACT":? 
        _ subtypes:? _ supertype:? _ ";" 
        _ entityProps:? 
        _ entDerive:? 
        _ uniques:? 
        _ inverse:? 
        _ typeWhere:? 
        _ %ent_end _ ";" 
        {%
            function(data: any[]) {
                var props: any = {};
                if(data[12] == null) props = null
                else data[12].forEach((d:any)=> props[d.name] = {type: d.type, optional: d.optional})
                return {
                    ifcType: "entity",
                    name: data[2],
                    abstract: data[4]? true:false,
                    supertype: data[8],
                    subtypes: data[6],
                    properties: props,
                    unique: data[16],
                    derive: null,
                    inverse: data[18],
                    where: null
                }
            }
        %}

supertype -> "SUBTYPE" _ "OF" _ "(" _ word _ ")" {% (data: any[]) => data[6] %}
subtypes -> "SUPERTYPE" _ "OF" _ "(" _ supertypeInput _ ")" {% (data: any[]) => data[6]%}
supertypeInput -> word {% id %}
                | "ONEOF" _ parenList {% (data:any[]) => data[2] %}

entityProps -> entityProp:* {% id %}
entityProp -> _ word _ ":" _ "OPTIONAL":? _ entityPropType _ ";" {%
    function(data:any[]) {
        return {
            name: data[1],
            type: data[7],
            optional: data[5]? true : false
        }
    }
%}
entityPropType -> typeInput {% id %}

uniques -> "UNIQUE" _ uniqueProps {%
    function(data: any[]) {
        return data[2]
    }
%}
uniqueProps -> (_ uniqueProp):* {%
    function(data: any[]) {
        var  obj = {}
        data[0].forEach((d:any[])=> {
            obj[d[1].name] = { type: d[1].type }
            if (d[1].other) obj[d[1].name]["other"] = d[1].other
        })
        return obj
    }
%}
uniqueProp -> word _ ":" _ word (_ "," _ word):? _ ";" {% 
    function(data: any[]) {
        return {
            name: data[0],
            type: data[4],
            other: data[5]? data[5][3]:null
            
        }
    }
%}

type -> "TYPE" _ word _ "=" _ typeInput _ ";" _ typeWhere:? _ "END_TYPE" _ ";" {%
    function(data: any[]) {
        return {
            ifcType: "type",
            name: data[2],
            type: data[6],
        }
    }
%}

typeInput -> listDef {% id %}
            | binaryDef {% id %}
            | word {% id %}
            | stringDef {% id %}
            | enumeration {% id %}
            | select {% id %}
            | %primitive {% (data:any) => data[0].text %}


listDef -> %list 
        _ ("[" _ (number | word) _ ":" _ (number | "?" {%(data:any[]) => [null] %} | word) _ "]"):? 
        _ ("OF" | "Of")
        _ ("UNIQUE" | "GENERIC" _ ":"):? 
        _ ( listDef | binaryDef | %word {%(data:any[])=> [data[0].text] %} |  %primitive {%(data:any[])=>[data[0].text] %}) {%
    function(data:any[]) {
        return {
            type: data[0].text,
            contains: data[8][0],
            minSize: data[2] ? data[2][2][0] : null,
            maxSize: data[2]? data[2][6][0] : null,
        }
    }
%}

entDerive -> "DERIVE" (( _ (anything|string)):+ _ ";"):+ {% 
    function(data:any[]) {
        let newData: any[] = []
        if(data[1] == null) return null
        data[1].forEach((array:any[]) => {
            newData.push(array[1][0])
        });
        return {
            type: "anything",
            value: newData
        }
    }
%}

inverse -> "INVERSE" (_ inverseProp):* {%
    function(data:any[]) {
        let obj: any = {}
        data[1].forEach((d: any[]) => {
            obj[d[1].name] = {
                type: d[1].type,
                for: d[1].for
            }
        })
        return obj
    }
%}

inverseProp -> word _ ":" _ (listDef | word) _ "FOR" _ word _ ";"{%
    function(data: any) {
        return {
            name: data[0],
            type: data[4][0],
            for: data[8]
        }
    }
%}

entInverse -> "INVERSE" (( _ (anything|string)):+ _ ";"):+ {% 
    function(data: any[]) {
        let newData: any[] = []
        if(data[1] == null) return null
        data[1].forEach((array:any) => {
            newData.push(array[1][0])
        });
        return {
            type: "anything",
            value: newData
        }
    }
%}

typeWhere -> "WHERE" (( _ (anything|string)):+ _ ";"):+ {% 
    function(data: any[]) {
        let newData: any[] = []
        if(data[1] == null) return null
        data[1].forEach((array:any[]) => {
            newData.push(array[1][0])
        });
        return {
            type: "anything",
            value: newData
        }
    }
%}

enumeration -> "ENUMERATION" _ "OF" _ parenList {% 
    function(data:any[]) {
        return {
            type: "enum",
            values: data[4]
        }
    }
%}

select -> "SELECT" _ parenList {% 
    function(data:any[]) {
        return {
            type: "select",
            values: data[2]
        }
    }
%}

binaryDef -> "BINARY" _ "(" _ number _ ")" {%
    data => {
        return {
            type: "BINARY()",
            maxSize: data[2]
        }
    }
%}

stringDef -> "STRING" _ "(" _ number _ ")" (_ "FIXED"):? {%
    function(data:any[]) {
        return {
            type: "STRING",
            maxSize: data[4],
            fixed: data[7] ? true : false
        }
    }
%}

parenList -> "(" _ word (_ "," _ word):* _ ")" {% extractArray %}

word -> %word {% (data:any[]) => data[0].text %}
anything -> %anything {% (data:any[]) => data[0].text %}
string -> "'" %string "'" {% (data:any[]) => data[1].text %}
number -> %number {% (data:any[]) => data[0].text %}
_ -> null | %space {% function(d: any[]) { return null; } %}
