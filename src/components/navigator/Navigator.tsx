import DatePicker from 'react-datepicker'
import '../../../node_modules/react-datepicker/dist/react-datepicker.css'

import type { office } from '../../hooks/useOffice'

export function Navigator({ office, updateOffice}: { office: office; updateOffice: (office: office) => void }) {

  const notFuture = (date: Date) => {
    const now = new Date()
    return date <= now
  }

  function formattedDate(value: Date | number){
    const date = new Date(value)
    return date.toLocaleDateString('en-GB', {
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
    })
  }

  function previousOffice(){
    const previous = { ...office }
    previous.office = previous.office ? previous.office : 0
    previous.office -= 1
    updateOffice(previous)
  }

  function nextOffice(){
    const previous = { ...office }
    previous.office = previous.office ? previous.office : 0
    previous.office += 1
    updateOffice(previous)
  }

  return (
    <div className="navigator" >
      <DatePicker
        todayButton="Back to today"
        selected={office.date}
        onChange={(date) => updateOffice({
           ...office, 
           date: date ? new Date(date) : new Date()
          })}
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