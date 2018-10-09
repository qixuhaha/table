export const fetchData = (uri) => {
  return fetch(uri)
    .then(response => response.json())
    .then(result => {
      return result
    })
}