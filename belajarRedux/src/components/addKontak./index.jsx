import { useDispatch, useSelector } from "react-redux"
import {useState,useEffect } from "react"
import { addKontak, getListKontak } from "../../actions/KontakAction"



const AddContact = () => {

    const dispatch = useDispatch()
    const {addKontakResult} =  useSelector((state) => state.KontakReducer ) //use selector didapati dari  combine reducer()
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
        dispatch(addKontak({ nama: form.name, numberPhone: form.noHP }))
        setForm({
            name:'',
            noHP:''})
    }
    useEffect(() => {
        if(addKontakResult){
            dispatch(getListKontak())
        }
    },[addKontakResult,dispatch])

    return (<>
        <h4>Add contact</h4>
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

export default AddContact