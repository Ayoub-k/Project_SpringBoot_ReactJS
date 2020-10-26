import axios from 'axios'


const EMPLOYEE_API_BASE_URL='http://localhost:8080/api/groups'
const Group_API_URL='http://localhost:8080/api/'

class ServiceGroup {
  
    getgs(){
        return fetch(EMPLOYEE_API_BASE_URL,{
            method:'get',
            headers:{
                'Accept':"application/json",
                'Content-Type':"application/json"
            }
        }).then((res=>res.json()));
    }

    getGroups(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createGroups(groups){
        return axios.post(`${Group_API_URL}/group`, groups);
    }

    getGroupsById(GroupsId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + GroupsId);
    }

    updateGroups(groupe, GroupsId){
        return axios.put(`${Group_API_URL}/group/`+ GroupsId, groupe);
    }

    deleteGroups(GroupsId){
        return axios.delete(`${Group_API_URL}/group/`+ GroupsId);
    }

    
}
export default new ServiceGroup();



/**
 * 
 * 
 *  {/** getGroups(){
        return axios.get(URL_GROUP);
    } */
 