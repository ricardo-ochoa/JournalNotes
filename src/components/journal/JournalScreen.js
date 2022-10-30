import React from 'react';
import { NothingSelected } from './NothingSelected';
import { Sidebar } from './Sidebar';
import { NoteScreen } from '../notes/NoteScreen';
import { useSelector } from 'react-redux';

export const JournalScreen = () => {

  const { active } =  useSelector( state => state.notes );
  return (

  <div className='journal__main-content animate__animated animate__backInUp'>
    <Sidebar />

    <main>

      {
        (active ) ? ( <NoteScreen /> ) : ( <NothingSelected /> )
      }

    </main>
  </div>
)
};
