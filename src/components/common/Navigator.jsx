import { useState, forwardRef } from 'react'
import DatePicker from 'react-datepicker'
import '../../../node_modules/react-datepicker/dist/react-datepicker.css'

export function Navigator({ office, setOffice}){

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
    
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button 
      className="example-custom-input" 
      onClick={onClick} 
      ref={ref}>
      {formattedDate(value)}
    </button>
  ));

  return (
    <div chassname="navigator" >
      <DatePicker
        todayButton="Back to today"
        selected={office.date}
        onChange={(date) => setOffice({ ...office, date })}
        customInput={<ExampleCustomInput />}
        dateFormat='d MMMM yyyy'
        filterDate={notFuture}
      />
      { office.name }
    </div>
  );
}