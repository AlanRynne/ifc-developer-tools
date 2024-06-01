export function parseQueryString(query: string): any {
  let pairs = query.split("&")
  let queryObj = {}
  pairs.forEach(pair => {
    let [key, value] = pair.split("=")
    queryObj[key] = value
  })
  return queryObj
}
