class GoogleApi {
  constructor() {
    this.uri = process.env.GEOCODE_API
  }
  async getCountryByCoords(coords) {
    let response = await (await fetch(`${this.uri}${coords.lat},${coords.lng}&sensor=false&key=${process.env.GOOGLE_API_KEY}`)).json()
    let address_components = response.results.address_components

    let address_filter = address_components.filter(address_component => {
      return address_component.types.includes("country")
    })

    return address_filter.length ? address_filter[0].long_name : null
  }
}

export default new GoogleApi()