const { apiInstance } = require("./common")

export const getAPI = (endpoint,body,successCallback,errorCallback) => {
    apiInstance.get(endpoint,{params:body})
    .then((response)=>{
        successCallback(response)
    }).catch((error)=>{
        errorCallback(error)
    })
}

export const postAPI = (endpoint,body,successCallback,errorCallback) => {
    apiInstance.get(endpoint,{params:body})
    .then((response)=>{
        successCallback(response)
    }).catch((error)=>{
        errorCallback(error)
    })
}
export const putApi = (endpoint,body,successCallback,errorCallback) => {
    apiInstance.get(endpoint,{params:body})
    .then((response)=>{
        successCallback(response)
    }).catch((error)=>{
        errorCallback(error)
    })
}