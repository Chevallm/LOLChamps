var request = require('superagent');

class LeagueAPI {

  constructor() {
    this.API_KEY = "RGAPI-f8b31e70-9be7-4938-ab58-affdc3a70d00"
    this.REGION = "EUW1"
    this.HTTPS = "https://"
    this.BASE_URL = ".api.riotgames.com/lol"
  }

  getChampions() {
    request
      .get(this.HTTPS + this.REGION + this.BASE_URL + "/static-data/v3/champions?dataById=true&api_key=" + this.API_KEY)
      .end( function(err, res) {
        if(!err)
          return res;
      });
  }

}
export default LeagueAPI;
