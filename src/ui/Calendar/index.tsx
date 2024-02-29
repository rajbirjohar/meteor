"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker, DropdownProps } from "react-day-picker";
import { buttonVariants } from "../Button";
import cn from "../../utils/cn";
import styles from "./Calendar.module.css";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../Select";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

const DateSelect = (props: DropdownProps) => {
  const items = React.Children.map(props.children, (child) => {
    // Ensure the child is a valid React element before attempting to access its props
    if (React.isValidElement(child)) {
      return {
        value: child.props.value,
        children: child.props.children,
      };
    }
    // Return null or an appropriate default value if the child is not a valid React element
    return {
      value: "",
      children: "",
    };
  });

  const changeEvent = (item: string) => {
    if (!props.onChange) return;

    props.onChange({
      target: { value: item },
    } as React.ChangeEvent<HTMLSelectElement>);
  };

  return (
    <Select
      value={props.value as string}
      onValueChange={(value) => changeEvent(value)}
    >
      <SelectTrigger small fit>
        <SelectValue>{props.caption}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        {items &&
          items.length > 0 &&
          items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.children}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  );
};

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(styles.calendar, className)}
      classNames={{
        multiple_months: styles.multiplemonths,
        month: styles.month,
        months: styles.months,
        caption: styles.caption,
        caption_label: styles.captionlabel,
        nav: styles.nav,
        nav_button: cn(
          buttonVariants({ variant: "outline", icon: true, small: true })
        ),
        table: styles.table,
        head_row: styles.headrow,
        head_cell: styles.headcell,
        row: styles.row,
        cell: styles.cell,
        day: cn(buttonVariants({ variant: "ghost", icon: true, small: true })),
        day_range_start: styles.dayrangestart,
        day_range_end: styles.dayrangeend,
        day_selected: styles.dayselected,
        day_today: styles.daytoday,
        day_outside: styles.dayoutside,
        day_disabled: styles.daydisabled,
        day_range_middle: styles.dayrangemiddle,
        day_hidden: styles.dayhidden,
        caption_dropdowns: styles.captiondropdowns,
        vhidden: styles.vhidden,
        caption_start: styles.captionstart,
        caption_end: styles.captionend,
        ...classNames,
      }}
      components={{
        IconLeft: (props) => <ChevronLeft className={styles.icon} {...props} />,
        IconRight: (props) => (
          <ChevronRight className={styles.icon} {...props} />
        ),
        Dropdown: (props) => <DateSelect {...props} />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
