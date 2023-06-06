import { useDispatch, useSelector } from "react-redux"
import {useState,useEffect } from "react"
import { updateKontak } from "../../actions/KontakAction"



const EditContact = (props) => {

    const dispatch = useDispatch()
    const {updateKontakResult} =  useSelector((state) => state.KontakReducer ) //use selector didapati dari  combine reducer()
    const [form, setForm] = useState({
        name: '',
        noHP: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateKontak({id:props.id , nama: form.name, numberPhone: form.noHP }))
        setForm({
            name:'',
            noHP:''})
    }
    // useEffect(() => {
    //     if(updateKontakResult){
    //         dispatch(updateKontak())
    //     }
    // },[updateKontakResult,dispatch])

    return (<>
        <h4>Edit contact id {props.id}</h4>
        <form 
            onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="nama"

            />
            &nbsp;
            <input
                type="text"
                name="noHP"
                value={form.noHP}
                onChange={handleChange}
                placeholder="no hp"
            />
            <button type="submit"> submit </button>
        </form>
    </>)
}

export default EditContact