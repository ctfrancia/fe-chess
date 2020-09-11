import Api from './Api.js'

export const getAllTournaments = async () => {
  return await Api.get('tournament/latest')
}


/*
 * alksjdhflh:w
 *
export const getSingleTournament = (id) => {
  return Api.
}
*/
