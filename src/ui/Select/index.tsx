import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import styles from "./Select.module.css";
import { cva, type VariantProps } from "class-variance-authority";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const triggerVariants = cva(styles.trigger, {
  variants: {
    small: {
      true: styles.small,
    },
    rounded: {
      true: styles.rounded,
    },
    fit: {
      true: styles.fit,
    },
  },
  defaultVariants: {
    small: false,
    rounded: false,
    fit: false,
  },
});

interface SelectTriggerProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>,
    VariantProps<typeof triggerVariants> {
  small?: boolean;
  rounded?: boolean;
  fit?: boolean;
}

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerProps
>(({ className, small, rounded, fit, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={triggerVariants({
      small,
      rounded,
      fit,
      className,
    })}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDownIcon className={styles.icon} />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "item-aligned", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={`${styles.content} ${className}`}
      position={position}
      {...props}
    >
      <SelectPrimitive.ScrollUpButton className={styles.scrollbutton}>
        <ChevronUpIcon />
      </SelectPrimitive.ScrollUpButton>
      <SelectPrimitive.Viewport className={styles.viewport}>
        {children}
      </SelectPrimitive.Viewport>
      <SelectPrimitive.ScrollDownButton className={styles.scrollbutton}>
        <ChevronDownIcon />
      </SelectPrimitive.ScrollDownButton>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={`${styles.label} ${className}`}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={`${styles.item} ${className}`}
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    <SelectPrimitive.ItemIndicator>
      <CheckIcon size={18} className={styles.icon} />
    </SelectPrimitive.ItemIndicator>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={`${styles.separator} ${className}`}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
};
