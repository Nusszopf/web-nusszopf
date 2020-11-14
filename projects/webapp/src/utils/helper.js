import { formatISO, parse } from 'date-fns'

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

export const parseDate = dateString => {
  const format = dateString.split('.')[2].length > 2 ? 'dd.MM.yyyy' : 'dd.MM.yy'
  const date = parse(dateString, format, new Date(2000, 0, 1), { locale: 'de' })
  return date
}

export const parseDateISOString = dateString => {
  if (!dateString) return dateString
  const date = parseDate(dateString)
  return formatISO(date)
}
