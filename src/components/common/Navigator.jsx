import { useState, forwardRef } from 'react'
import DatePicker from 'react-datepicker'
import '../../../node_modules/react-datepicker/dist/react-datepicker.css'

export function Navigator({ office, setOffice}) {
    const notFuture = (date) => {
        const now = new Date()
        return date <= now
    }

    const formattedDate = office.date.toLocaleDateString('en-GB', {
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
    })
    
    return (
    <div className="Navigator">
        <DatePicker 
            // selected={office.date} 
            selected={ office.date }
            onChange={(date) => setOffice({ ...office, date })}
            dateFormat='d MMMM yyyy'
            filterDate={notFuture}
            placeholderText="Cannot look at future dates"
            />
        { office.name }
    </div>
  )
}
export function Navigator1({ office, setOffice}) {
    const [isOpen, setIsOpen] = useState(false);
    const handleChange = (date) => {
      setIsOpen(!isOpen)
      setOffice({ ...office, date })
    }

    const handleClick = (e) => {
      e.preventDefault()
      setIsOpen(!isOpen)
    }

    const formattedDate = office.date.toLocaleDateString('en-GB', {
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
    })
    
    return (
      <>
        <button className='react-datepicker3' onClick={handleClick}>
          { formattedDate }
        </button>
            {isOpen && (
                <DatePicker 
                    todayButton="Back to today"
                    selected={office.date} 
                    onChange={handleChange} 
                    inline 
                />
            )}
      </>
    );
  };

export function Navigator2({ office, setOffice}){

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
        <DatePicker
            todayButton="Back to today"
            selected={office.date}
            onChange={(date) => setOffice({ ...office, date })}
            customInput={<ExampleCustomInput />}
        />
      );
      }