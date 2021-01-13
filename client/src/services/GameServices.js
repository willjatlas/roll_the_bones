
// TODO: Game services
const baseURL= 'http://localhost:5000/api/players/'

// GET: get highScores
export const getScores = () => {
    return fetch(baseURL)
      .then(res => res.json())
}
// POST: addHighScore
export const postScores = (payload) => {
  return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'content-Type': 'application/json' }
  })
  .then(res => res.json())
}

// Delete: delete by ID
export const deleteScore = (id)=> {
  return fetch(baseURL + id, {
    method: 'DELETE'
  });
}