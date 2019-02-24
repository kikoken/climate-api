import fetch from 'node-fetch'

import { DARKSKY_TOKEN, DARKSKY_URL} from '../config'

class DarkSkyApi {
  constructor(_url_, _token_) {
    this.darksky = `${_url_}${_token_}`
  }
  
  async getByCoordsCity(_coords_) {
    console.log('[DARKSSKY]',_coords_)
    let url = `${this.darksky}/${_coords_}` 
    let response = await fetch(url)
    let data = await response.json()
    console.log('[DARKSSKY]',data)
    return data.currently
  }
}

export default new DarkSkyApi(DARKSKY_URL, DARKSKY_TOKEN)