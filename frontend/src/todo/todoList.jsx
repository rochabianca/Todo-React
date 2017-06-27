import React from 'react'
import IconButton from '../template/iconButton'

export default props => {
  const renderRows = () => {
    const list = props.list || []
    return list.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
        <td>
          <IconButton style='azul' icon='check' onClick={() => props.handleMarkAsDone(todo)} hide={todo.done} ></IconButton>
          <IconButton style='laranja' icon='undo' onClick={() => props.handleMarkAsPending(todo)} hide={!todo.done} ></IconButton>
          <IconButton style='cinza' icon='trash-o' onClick={() => props.handleRemove(todo)} hide={!todo.done} ></IconButton>
        </td>
      </tr>
    ))
  }

  return (
    <table className='table'>
      <thead>
        <tr>
          <th className='tira-padding'>Descrição</th>
          <th className='tableActions'>Ações</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}