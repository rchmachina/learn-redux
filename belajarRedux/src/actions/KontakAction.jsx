import axios from 'axios';

export const GET_LIST_KONTAK = "GET_LIST_KONTAK";
export const ADD_KONTAK = "ADD_KONTAK"
export const DELETE_KONTAK = "DELETE_KONTAK"
export const UPDATE_KONTAK = "UPDATE_KONTAK"

export const getListKontak =() =>{
    console.log("berhasil masuk")
    return (dispatch)=>{
        
        //loading
        dispatch({
            type: GET_LIST_KONTAK,
            payload:{
                loading:true,
                data:false,
                errorMessage:false
            }
        })

        //get API
        axios({
            method: 'GET',
            url: 'http://localhost:3000/kontaks',
            timeout :120000
        }).then((response)=>{

            //berhasil get api
            dispatch({
                type: GET_LIST_KONTAK,
                payload:{
                    loading:false,
                    data:response.data,
                    errorMessage:false
                }
            })
        }).catch((error)=>{

            //gagal mendapatkan api
            dispatch({
                type: GET_LIST_KONTAK,
                payload:{
                    loading:false,
                    data:"",
                    errorMessage:error.message
                }
            })
            
        })

    }
}

export const addKontak =(data) =>{
    console.log("berhasil masuk")
    return (dispatch)=>{
        
        //loading
        dispatch({
            type: ADD_KONTAK,
            payload:{
                loading:true,
                data:false,
                errorMessage:false
            }
        })

        //get API
        axios({
            method: 'POST',
            url: 'http://localhost:3000/kontaks',
            data:{
                name:data.nama,
                numberPhone:data.numberPhone
            },
            timeout :120000
        }).then((response)=>{
            console.log("berhasil dpt api masuk" ,response.data)
            //berhasil get api
            dispatch({
                type: ADD_KONTAK,
                payload:{
                    loading:false,
                    data:response.data,
                    errorMessage:false
                }
            })
        }).catch((error)=>{
            console.log("gagal dpt api")
            //gagal mendapatkan api
            dispatch({
                type: ADD_KONTAK,
                payload:{
                    loading:false,
                    data:"",
                    errorMessage:error.message
                }
            })
            
        })

    }
}


export const deleteKontak =(id) =>{
    console.log("berhasil masuk")
    return (dispatch)=>{
        
        //loading
        dispatch({
            type: DELETE_KONTAK,
            payload:{
                loading:true,
                data:false,
                errorMessage:false
            }
        })

        //get API
        axios({
            method: 'DELETE',
            url: 'http://localhost:3000/kontaks/'+id,
            timeout :120000
        }).then((response)=>{
            console.log("berhasil dpt api masuk" ,response.data)
            //berhasil get api
            dispatch({
                type: DELETE_KONTAK,
                payload:{
                    loading:false,
                    data:response.data,
                    errorMessage:false
                }
            })
        }).catch((error)=>{
            console.log("gagal dpt api")
            //gagal mendapatkan api
            dispatch({
                type: DELETE_KONTAK,
                payload:{
                    loading:false,
                    data:"",
                    errorMessage:error.message
                }
            })
            
        })

    }
}



export const updateKontak =(data) =>{
    console.log("data id di edit" ,data.id)
    return (dispatch)=>{
        
        //loading
        dispatch({
            type: UPDATE_KONTAK,
            payload:{
                loading:true,
                data:false,
                errorMessage:false
            }
        })

        //get API
        axios({
            method: 'PUT',
            url: 'http://localhost:3000/kontaks/'+data.id,
            data:{
                name:data.nama,
                numberPhone:data.numberPhone
            },
            timeout :120000
        }).then((response)=>{
            console.log("berhasil dpt api masuk" ,response.data)
            //berhasil get api
            dispatch({
                type: UPDATE_KONTAK,
                payload:{
                    loading:false,
                    data:response.data,
                    errorMessage:false
                }
            })
        }).catch((error)=>{
            console.log("gagal dpt api")
            //gagal mendapatkan api
            dispatch({
                type: UPDATE_KONTAK,
                payload:{
                    loading:false,
                    data:"",
                    errorMessage:error.message
                }
            })
            
        })

    }
}