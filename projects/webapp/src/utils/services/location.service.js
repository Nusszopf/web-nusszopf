import { throttle } from 'lodash'

const fetchLocations = async searchTerm => {
  let url = new URL('https://api.locationiq.com/v1/autocomplete.php')
  const params = {
    format: 'json',
    q: searchTerm,
    limit: 7,
    countrycodes: 'de',
    'accept-language': 'de',
    key: 'pk.7d433f0b958fb7c6515ca301ebfde756', // process.env.LOCATIONIQ,
    tag: 'place:suburb,place:quarter,place:city,place:town,place:village,place:hamlet',
  }
  url.search = new URLSearchParams(params).toString()
  const res = await fetch(url)
  if (res.ok) {
    return res.json()
  } else {
    return null
  }
}

export const findLocations = throttle(async (searchTerm, oldLocations) => {
  let results = oldLocations
  const locations = await fetchLocations(searchTerm)
  if (!locations) {
    return results
  }
  results = locations.map(location => ({
    key: location.place_id,
    value: location.display_name,
    postcode: location.address.postcode,
    city: location.address.name,
    countryCode: location.address.country_code,
    geo: {
      lat: location.lat,
      lon: location.lon,
    },
    osm: {
      id: location.osm_id,
      type: location.osm_type,
    },
  }))
  return results
}, 500)
