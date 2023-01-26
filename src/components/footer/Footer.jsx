import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import enGB from 'date-fns/locale/en-GB';
registerLocale('enGB', enGB)

export function Footer({ office, setOffice}) {
    const notFuture = (date) => {
        const now = new Date()
        return date <= now
    }
    return (
    <div className="Footer">
        <DatePicker 
            selected={office.date} 
            onChange={(date) => setOffice({ ...office, date })}
            dateFormat='dd/MM/yyyy'
            filterDate={notFuture}
            placeholderText="Cannot look at future dates"
            />
        { office.name }
    </div>
  )
}
