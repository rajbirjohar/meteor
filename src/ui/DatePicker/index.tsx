import { useState } from "react";
import { Button } from "../Button";
import { Popover, PopoverContent, PopoverTrigger } from "../Popover";
import styles from "./DatePicker.module.css";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "../Calendar";

const DatePicker = () => {
  const [date, setDate] = useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className={styles.trigger}>
          <CalendarIcon />{" "}
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className={styles.popover}>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          captionLayout="dropdown"
          fromYear={2010}
          toYear={2025}
          // DO NOT USE initialFocus 
          // This causes the calendar to attempt to focus 
          // on an element that is undefined (I assume one of 
          // the buttons or the current day) when 
          // opening the select menu for the year.
          // initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export { DatePicker };
