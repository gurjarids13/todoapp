import React from 'react'

function TodoList(props) {
  return (
    <li className='list-item'>

        {props.item}
        <samp className='icons'>
        <i className="fa-sharp fa-solid fa-trash __className_36bd41
        icon-delete"
        onClick={e=>{
            props.deleteListItem(props.index)
        }}
        ></i>
        </samp>
    </li>
    
  )
}

export default TodoList
