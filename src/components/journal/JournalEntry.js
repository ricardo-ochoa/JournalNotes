import React from 'react';
import moment from 'moment';
import { activeNote } from '../../action/notes';
import { useDispatch } from 'react-redux';

export const JournalEntry = ({id, title, date, body, url}) => {

    const noteDate = moment(date);
    const dispatch = useDispatch ();

    const handleEntryClick = () => {
        dispatch( activeNote( id, {title, date, body, url}) )
    }

  return(
    <div className='journal__entry' 
        onClick={handleEntryClick}
    >

        {
            url &&
            <div 
                className='journal__entry-picture'
                style={
                    {
                        backgroundSize: 'cover',
                        backgroundImage: `url( ${url} )`
                    }
                }
            ></div>
        }

        <div className='journal__entry-body'>
            <p className='journal__entry-title' >{ title }</p>
            <p className='journal__entry-content'>{ body } </p>
        </div>

        <div className='journal__entry-date-box'>
            <span>{ noteDate.format('dddd') }</span>
            <h4>{ noteDate.format('Do') }</h4>
        </div>
    </div>
    
  )
}
