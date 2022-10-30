import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { JournalEntries } from './JournalEntries';
import { startLogout } from '../../action/auth';
import { startNewNote } from '../../action/notes';

export const Sidebar = () => {

    const dispatch = useDispatch()

    const { name } = useSelector( state => state.auth)
    
   const handleLogout = () => {
        dispatch( startLogout() )
        
   } 

   const handleAddNew = () => {
        dispatch(startNewNote());
   }

  return(
    <aside className='journal__sidebar mt-5'>
        <div className='journal__sidebar-navbar'>
            <p className='mt-5'>
                <i className='fa-solid fa-skull-crossbones fa-beat'></i>
                <span className='name'>{ name }</span>
            </p>
            <button 
                className='btn'
                onClick={ handleLogout }
            >
                    Logout
            </button>
        </div>
        <div className='journal__new-entry'
            onClick={ handleAddNew }
        >
            <i className='far fa-calendar-plus fa-2x'></i>
            <p>
                New
            </p>
        </div>

        <JournalEntries />
    </aside>
  )
}
