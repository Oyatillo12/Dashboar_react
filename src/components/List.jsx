import React, { useContext } from 'react'
import { Context } from '../context/Context'
import { CheckIcon } from '../assets/images/icon'

function List() {
    const { todos, setTodos } = useContext(Context)

    function handleRange(id) {
        const findedTask = todos.find(item => item.id == id)
        findedTask.completed = !findedTask.completed
        setTodos([...todos])
        console.log(findedTask)
    }

    return (
        <div>
            {todos.map(item => (
                <div className='flex items-center justify-between px-[32px] py-[18px] border-b-[1px] border-b-[#DFE0EB]' key={item.id}>
                    <div className='flex items-center justify-start'>
                        <button className={item.completed ? "mr-4 " : `w-5 h-5 mr-4 rounded-full border-[2px] border-[#C5C7CD]`} onClick={() => handleRange(item.id)}>{item.completed ? <CheckIcon /> : ""}</button>
                        <strong>{item.title}</strong><span></span>
                    </div>
                    <span className='w-[76px] bg-[#F0F1F7] rounded-[8px] text-center py-[5px] text-[#9FA2B4] text-[11px] font-bold leading-[14px] tracking-[0.5px]'>Default</span>
                </div>
            ))}
        </div>
    )
}

export default List
