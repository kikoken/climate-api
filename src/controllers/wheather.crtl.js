import { promisify } from 'util'
import client from '../redis'

// services
import { 
  DarkSkyApi, 
  GoogleApi, 
  CapitalApi 
} from '../api'

class WheatherCtrl {
  constructor(_wheatherApi_, _googleApi_, _capitalApi_, _client_) {
    this.wheatherApi = _wheatherApi_
    this.geocodeApi = _googleApi_
    this.capitalApi = _capitalApi_
    this.client = _client_
    this.getCache = promisify(this.client.get).bind(this.client)
  }

  async getDataByCity(_coords_) {
    try {
      
      let country = await this.geocodeApi.getCountryByCoords(_coords_)
      if(!country) return {}
      
      let capital = await this.capitalApi.getCoordByName(country)
      let cacheCity = await this.getCache(`/${capital.name}`)
      if(cacheCity) return JSON.parse(cacheCity)
      
      let city = await this.wheatherApi.getByCoordsCity(capital.coord)
      
      this.client.setex(`/${capital.name}`, 3600, JSON.stringify({...city, capital: capital.name}))
      return {...city, capital: name}
    } catch (error) {
      console.error('[ERROR_WHEATHER_CTRL]', error.message)
    }    
  }
}

export default new WheatherCtrl(DarkSkyApi, GoogleApi, CapitalApi, client)