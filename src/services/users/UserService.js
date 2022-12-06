import {mainUrl} from "store/constant"

class UserService {
/*   
    addRole(serviceCaller, requestBody,callback,errorCallBack){
    let headers= { 'Content-Type': 'application/json'};
        serviceCaller.post(mainUrl + "/role", undefined, headers, requestBody, callback, errorCallBack)
    } */
    getUsers(serviceCaller, queryParams, callback,errorCallBack){
        serviceCaller.get(mainUrl+"/user", queryParams, undefined  ,  callback, errorCallBack)
    }
/*     updateProduct(serviceCaller, requestBody,callback,errorCallBack){
        let headers= { 'Content-Type': 'application/json'};
        serviceCaller.update(mainUrl + "/products", undefined, headers, requestBody, callback, errorCallBack)
    }*/
    /*deleteRole(serviceCaller, requestBody, callback,errorCallBack){
        let headers = {'Accept': 'application/json','Content-Type': 'application/json'};
        serviceCaller.delete(mainUrl + "/role", undefined, headers  , requestBody, callback, errorCallBack)
    } */
}

export default new UserService();