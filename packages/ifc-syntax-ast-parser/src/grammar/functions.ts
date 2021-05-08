import { ASTNode } from '../ast/core/ASTNode'

export function createTag(name: string, value: any) {
    return {
        type: 'tag',
        name: name,
        value: value
    }
}

export function first(d: any) { return d[0] };

export function extractPair(kv, output) {
    if (kv[0]) { output[kv[0]] = kv[1]; }
}

export function extractObject(d: any) {
    let output = {};
    extractPair(d[2], output);

    for (let i in d[3]) {
        extractPair(d[3][i][3], output);
    }
    return output;
}

export function extractArray(d: any) {
    let output = [d[2]];
    for (let i in d[3]) {
        output.push(d[3][i][3]);
    }
    return output;
}