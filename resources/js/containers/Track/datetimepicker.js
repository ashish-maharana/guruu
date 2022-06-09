import React, { useState } from "react";
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.css'

export default function DateTimePicker() {
    const [date, setDate] = useState(new Date());
    return (
        <Flatpickr
            data-enable-time
            value={date}
            options={{ inline:true }}
            onChange={date => {
            this.setState({ date });
            }}
        />
    );
}