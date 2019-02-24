import fetch from 'node-fetch'

import { REST_COUNTRY } from '../config'
class CapitalApi {
  constructor() {
    this.uri = REST_COUNTRY
  }

  async getCoordByName(country) {
    let responseCountry = await fetch(`${this.uri}name/${country}`)
    let dataCountry = await responseCountry.json()
    let responseCapital = await fetch(`${this.uri}capital/${dataCountry[0].capital}`)
    
    let data = await responseCapital.json()
    return data[0].latlng.join(',')
  }
}

export default new CapitalApi()