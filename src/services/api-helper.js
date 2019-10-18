import axios from 'axios'

// https://appac.github.io/mlb-data-api-docs/#player-data

export const playerID = async () => {
  const response = await axios.get("http://lookup-service-prod.mlb.com/json/named.sport_career_hitting.bam?league_list_id='mlb'&game_type='R'&player_id='493316'")
  return response.data.sport_career_hitting.queryResults.row
}


export const playerName = async () => {
  const response = await axios.get("http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code=%27mlb%27&active_sw=%27Y%27&name_part=%27aaron_judge%27")
  return response.data.search_player_all.queryResults.row
}


// http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code=%27mlb%27&active_sw=%27Y%27&name_part=%27aaron_judge%27
// this is the call for searching by player name




