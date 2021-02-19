const fetchLocations = async searchTerm => {
  let url = new URL('https://api.locationiq.com/v1/autocomplete.php')
  const params = {
    format: 'json',
    q: searchTerm,
    limit: 5,
    countrycodes: 'de',
    'accept-language': 'de',
    key: process.env.LOCATIONIQ_KEY,
    tag: 'place:city,place:town,place:village', // place:suburb,place:quarter
    dedupe: 1,
    normalizecity: 1,
  }
  url.search = new URLSearchParams(params).toString()
  const res = await fetch(url)
  if (res.ok) {
    return res.json()
  } else {
    return null
  }
}

export const findLocations = async (searchTerm, oldLocations) => {
  let results = oldLocations
  const locations = await fetchLocations(searchTerm)
  if (!locations) {
    return results
  }
  results = locations.map(location => ({
    key: location.place_id,
    value: `${location.display_place}, ${location.display_address}`,
    postcode: location.address.postcode,
    city: location.display_place,
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
}
