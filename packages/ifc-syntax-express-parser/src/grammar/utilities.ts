export function extractPair(kv: any[], output: any[]) {
    if (kv[0]) { output[kv[0]] = kv[1]; }
}

export function extractArray(d: any[]) {
    let output = [d[2]];

    for (let i in d[3]) {
        output.push(d[3][i][3]);
    }

    return output;
}