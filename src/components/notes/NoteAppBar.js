import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { startDeleting, startSaveNote, startUploading } from '../../action/notes';
import { useForm } from '../../hooks/useForm';

export const NoteAppBar = () => {

  const dispatch = useDispatch()
  const { active } = useSelector( state => state.notes )

  const handleSave = () => {
    dispatch( startSaveNote ( active ))
  }

  const handlePictureClick = () => {
    document.querySelector('#fileSelector').click();
  }
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if( file ){
      dispatch( startUploading( file ) );
    }
  }

  const [ formValues ] = useForm( active );
  const { id } = formValues;

  const handleDelete = () => {
    dispatch( startDeleting( id ));
}

  return(
    <div className='notes__appbar'>
        <span>28 de Agosto de 2022</span>

        <input
          id="fileSelector" 
          type= "file"
          name='file'
          style={{ display: 'none' }}
          onChange={ handleFileChange }
        />

        <div>
            <button className='btn'
              onClick={ handlePictureClick }
            >
                Picture
            </button>
            <button className='btn'
              onClick={ handleSave }
            >
                Save
            </button>
            <button
            className=' btn btn-danger'
            onClick={ handleDelete }
            >
            <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    </div>
  )
};
