import Api from './Api.js'

export const getAllTournaments = async () => {
  return await Api.get('tournament/latest')
}


/*
export const getSingleTournament = (id) => {
  return Api.
}
*/
