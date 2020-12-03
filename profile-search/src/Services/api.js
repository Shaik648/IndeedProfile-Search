import axios from 'axios'
import * as API from '../Constants/API_Constatnts'
// import * as APP from '../Constants/APP_Constants'

export default {
  adminSearch_API(data, res) {
    axios.get(API.SEARCH +'/title=' +data.title,
      {
        headers: {
          'Authorization': "Bearer " 
        }
      })
      .then(response => {
        if (response) {

          res(response.data)
        }
        else if (response.data.response == 401) {
          // logoutSession()
        }
      })
  }
}
