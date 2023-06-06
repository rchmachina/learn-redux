import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteKontak, getListKontak, updateKontak} from "../../actions/KontakAction";
import {EditContact} from "../index"



function ListKontak(){
    const {updateKontakResult, deleteKontakResult,getListKontakResult, getListKontakLoading, getListKontakError} = useSelector((state) => state.KontakReducer )
    const dispatch = useDispatch();

    const [edit,setEdit]= useState(true)
    const [editID,setEditID]= useState(false)

    useEffect(() => {
        //panggil action get list kontak
        dispatch(getListKontak())

    },[dispatch,deleteKontakResult])

    useEffect(() => {
        //panggil action get list kontak
        dispatch(getListKontak())

    },[dispatch,deleteKontakResult])
    useEffect(() => {
        console.log("data berubah")
        

    },[setEditID,setEdit])

    const editor =(id) =>{
        // setEdit(!edit)
        setEditID(id)

    }
    useEffect(() => {
        if(updateKontakResult){
            dispatch(getListKontak())
        }
    },[updateKontakResult,dispatch])




    return(<>
            <h4>list contact</h4>
            {getListKontakResult? (
                getListKontakResult.map((kontak)=>{
                    
                    return(
                    <p key={kontak.id}>
                        {kontak.name}-
                        {kontak.numberPhone} 
                        -<button onClick={()=>dispatch(deleteKontak(kontak.id))}>delete</button>
                        -<button onClick={()=>editor(kontak.id)}>edit</button></p>
                    
                    )
                }
                )): getListKontakLoading ? <p> Loading</p> 
                  : getListKontakError ? <p> Error</p>:"there is no data"}

                <EditContact id ={editID}/>
                
        </>
    )
}

export default ListKontak