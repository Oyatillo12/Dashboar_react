import React, { useContext } from 'react'
import {AddIcon} from '../assets/images/icon'
import { Context } from '../context/Context'

function OverForm() {
    const {todos, addTodos} = useContext(Context)

    function handleSubmitForm(e){
        e.preventDefault()
        const data = {
            id:todos.length ? todos[todos.length - 1].id + 1 :1,
            title: e.target.tasks.value,
            completed:false,
        }
        addTodos(data)
        e.target.reset();
    }
    return (
        <form onSubmit={handleSubmitForm} autoComplete='off' className='flex items-center justify-between py-[17px] px-8 border-b-[1px] border-b-[#DFE0EB]'>
            <input className='outline-none text-[14px] w-[80%] leading-[20px] font-semibold text-[#252733]' required type="text" placeholder='Create new task' name='tasks' />
            <button className='bg-[#F0F1F7] rounded-[8px] p-[7px] text-[#9FA2B4]'><AddIcon/></button>
        </form>
    )
}

export default OverForm
