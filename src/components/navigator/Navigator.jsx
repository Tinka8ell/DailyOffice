import { useState, forwardRef } from 'react'
import DatePicker from 'react-datepicker'
import '../../../node_modules/react-datepicker/dist/react-datepicker.css'

export function Navigator({ office, updateOffice}){

  const notFuture = (date) => {
    const now = new Date()
    return date <= now
  }

  function formattedDate(value){
    const date = new Date(value)
    return date.toLocaleDateString('en-GB', {
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
    })
  }
    
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => {
    return (
      <button 
        className="navigatior-date" 
        onClick={onClick} 
        ref={ref}>
        {formattedDate(value)}
      </button>
    )
  });

  function previousOffice(){
    const previous = { ...office }
    previous.office -= 1
    updateOffice(previous)
  }

  function nextOffice(){
    const previous = { ...office }
    previous.office += 1
    updateOffice(previous)
  }

  return (
    <div className="navigator" >
      <DatePicker
        todayButton="Back to today"
        selected={office.date}
        onChange={(date) => updateOffice({ ...office, date: new Date(date) })}
        customInput={<ExampleCustomInput />}
        dateFormat='d MMMM yyyy'
        filterDate={notFuture}
      />
      <div className="office-selector">
      <button onClick={previousOffice}>
          &lt;
        </button>
        { office.name }
        <button onClick={nextOffice}>
          &gt;
        </button>
      </div>
    </div>
  );
}