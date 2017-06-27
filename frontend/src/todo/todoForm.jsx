import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {
  const keyHandler = (e) => {
    if(e.key == 'Enter') {
      e.shiftKey ? props.handleSearch() : props.handleAdd()
    } else if (e.key == 'Escape') {
      props.handleClean()
    }
  }

  return (
    <div role='form' className='todoForm'>
      <Grid cols='12 9 10'>
        <input id='description' className='form-control' placeholder='Adicione uma tarefa' value={props.description}
        onChange={props.handleChange}
        onKeyUp={keyHandler}/>
      </Grid>

      <Grid cols='12 3 2'>
        <IconButton style='vermelho' icon='plus' onClick={props.handleAdd}></IconButton>
        <IconButton style='bege' icon='search' onClick={props.handleSearch}></IconButton>
        <IconButton style='azul-2' icon='close' onClick={props.handleClean}></IconButton>
      </Grid>
    </div>
  )
}