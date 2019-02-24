import fetch from 'node-fetch'
import { GOOGLE_API_KEY, GEOCODE_API} from '../config'

class GoogleApi {
  constructor() {
    this.uri = GEOCODE_API
  }
  async getCountryByCoords(coords) {
    let response = await (await fetch(`${this.uri}${coords}&sensor=false&key=${GOOGLE_API_KEY}`)).json()
    let address_components = response.results[0].address_components
    let address_filter = address_components.filter(address_component => {
      return address_component.types.includes("country")
    })

    return address_filter.length ? address_filter[0].long_name : null
  }
}

export default new GoogleApi()