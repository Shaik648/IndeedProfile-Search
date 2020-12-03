import api from '../Services/api'
// import * as ActionConstants from '../Constants/Action_Constants'


export function AdminSearch_Action(data, res) {
    return api.adminSearch_API(data, (response) => {
       console.log("data api",response)
 
        return res(response);
     })
  }
 