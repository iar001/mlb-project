import axios from 'axios'



export const player = async () => {
  const response = await axios.get("http://lookup-service-prod.mlb.com/json/named.sport_career_hitting_lg.bam?league_list_id='mlb'&game_type='R'&player_id='493316'")
  console.log(response)
  return response.data.sport_career_hitting_lg.queryResults.row
}





