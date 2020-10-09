export const uniqByKeepLast = (array, fn) => {
  return [...new Map(array.map(item => [fn(item), item])).values()]
}

export const sortByDate = (timestampA, timestampB, order) => {
  var dateA = new Date(timestampA).getTime()
  var dateB = new Date(timestampB).getTime()
  if (order === 'asc') {
    return dateA > dateB ? 1 : -1
  } else {
    return dateA < dateB ? 1 : -1
  }
}
