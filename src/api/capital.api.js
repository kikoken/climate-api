import fetch from 'node-fetch'

class CapitalApi {
  constructor() {
    this.uri = process.env.REST_COUNTRY
  }

  async getCoordByName(capital) {
    let data = await fetch(`${this.uri}${capital}`)
    
    return data.latlng.join(',')
  }
}

export default new CapitalApi()