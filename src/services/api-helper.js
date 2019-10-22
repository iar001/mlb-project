import axios from 'axios'

export const historicalPlayerID = async (id) => {
  const response = await axios.get(`http://lookup-service-prod.mlb.com/json/named.sport_career_hitting.bam?league_list_id='mlb'&game_type='R'&player_id='${id}'`)
  return response.data.sport_career_hitting.queryResults.row
}
export const historicalPlayerName = async (name) => {
  const response = await axios.get(`http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code=%27mlb%27&active_sw=%27N%27&name_part=%27${name}%27`)
  return response.data.search_player_all.queryResults.row
}

export const playerIDVariable = async (id) => {
  const response = await axios.get(`http://lookup-service-prod.mlb.com/json/named.sport_career_hitting.bam?league_list_id='mlb'&game_type='R'&player_id='${id}'`)
  return response.data.sport_career_hitting.queryResults.row
}
export const playerNameVariable = async (name) => {
  const response = await axios.get(`http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code=%27mlb%27&active_sw=%27Y%27&name_part=%27${name}%27`)
  return response.data.search_player_all.queryResults.row
}

export const pitcherIDVariable = async (id) => {
  const response = await axios.get(`http://lookup-service-prod.mlb.com/json/named.sport_career_pitching.bam?league_list_id='mlb'&game_type='R'&player_id='${id}'`)
  return response.data.sport_career_pitching.queryResults.row
}
export const pitcherNameVariable = async (name) => {
  const response = await axios.get(`http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code=%27mlb%27&active_sw=%27Y%27&name_part=%27${name}%27`)
  return response.data.search_player_all.queryResults.row
}

export const historicalPitcherID = async (id) => {
  const response = await axios.get(`http://lookup-service-prod.mlb.com/json/named.sport_career_pitching.bam?league_list_id='mlb'&game_type='R'&player_id='${id}'`)
  return response.data.sport_career_pitching.queryResults.row
}
export const historicalPitcherName = async (name) => {
  const response = await axios.get(`http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code=%27mlb%27&active_sw=%27N%27&name_part=%27${name}%27`)
  return response.data.search_player_all.queryResults.row
}

// 4424 mlb idea sports db website



