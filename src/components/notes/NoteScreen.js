import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { activeNote, startDeleting } from '../../action/notes';
import { useForm } from '../../hooks/useForm';
import { NoteAppBar } from './NoteAppBar';


export const NoteScreen = () => {

    const dispatch = useDispatch()
    

    //Los ':' son para renombrar
    const { active:note } =  useSelector( state => state.notes)

    const [ formValues, handleInputChange, reset ] = useForm( note );
    const { body, title, id } = formValues;

    // cambair las notas al darle click
    const activeId = useRef( note.id )
    useEffect(() => {
         
        if( note.id !== activeId.current ){
            reset( note );
            activeId.current = note.id
        }

    }, [note, reset]);

    //actualizar la info en las activas

    useEffect(() => {
        dispatch(activeNote ( formValues.id, {...formValues} ))
    }, [formValues, dispatch]);

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
      }

    const handleDelete = () => {
        dispatch( startDeleting( id ));
    }
    

  return(
      <div className='notes__main-content'>
        
        <NoteAppBar />

        <div className='notes__content'>
            <input
                type='text'
                placeholder='Some awesome title'
                className='notes__title-input'
                name='title'
                value={ title }
                onChange={ handleInputChange }
            ></input>
            <textarea
                placeholder='What happened today'
                className='notes__textarea'
                name='body'
                value={ body }
                onChange={ handleInputChange }
            ></textarea>

            {
                (note.url) &&
                 (<div className='notes__image'>
                    <img
                        src={ note.url }
                        alt='Imagen'
                        onClick={ handlePictureClick }
                    />
                </div>)
            }
        </div>

      </div>
  ) 
}
