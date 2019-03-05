import fetch from 'node-fetch'
class CapitalApi {
  constructor() {
    this.uri = process.env.REST_COUNTRY
  }

  async getCoordByName(country) {
    let responseCountry = await fetch(`${this.uri}name/${country}`)
    let dataCountry = await responseCountry.json()
    let responseCapital = await fetch(`${this.uri}capital/${String(dataCountry[0].capital).normalize('NFD').replace(/[\u0300-\u036f]/g, "")}`)
    
    let data = await responseCapital.json()
    return {name: dataCountry[0].capital , coord: data[0].latlng.join(',')}
  }
}

export default new CapitalApi()