import request from "axios"

function requestProcess() {
  return {
    type: 'REQUEST_RANKING_PROCESS'
  }
}
export function get(){
  return dispatch => {
    dispatch( requestProcess() )
    return request.get('https://itunes.apple.com/rss/topsongs/limit=50/json')
          .then(res => {
            dispatch({
              type: 'SUCCESS_GET_RANKING',
              list: res.data.feed.entry
            })
          })
          .catch(res => dispatch({ type: 'FAILED_GET_RANKING' }))
  }
}
