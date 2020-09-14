import Api from './Api.js'

export const getAllTournaments = async () => {
  try {
    const res = await Api.get('tournament/latest')
    return res.data
  } catch(error) {
    throw new Error('error in getAllTournaments', error)
  }
}

export const getSingleTournament = async (id) => {
  try {
    const res =  await Api.get(`/tournament/${id}`)
    return res.data
  } catch (err) {
    throw new Error('error while getting single tournament')
  }
}

