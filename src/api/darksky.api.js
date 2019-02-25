import fetch from 'node-fetch'

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

export default new DarkSkyApi(process.env.DARKSKY_URL, process.env.DARKSKY_TOKEN)