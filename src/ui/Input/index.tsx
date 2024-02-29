import * as React from "react";
import styles from "./Input.module.css";
import { type VariantProps, cva } from "class-variance-authority";

const inputVariants = cva(styles.inputwrapper, {
  variants: {
    mirror: {
      true: styles.mirror,
    },
    fill: {
      true: styles.fill,
    },
  },
  defaultVariants: {
    mirror: false,
    fill: false,
  },
});

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  mirror?: boolean;
  fill?: boolean;
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, mirror, fill, icon, ...props }, ref) => {
    return (
      <div
        className={inputVariants({
          mirror,
          fill,
          className,
        })}
      >
        <input ref={ref} {...props} />
        {icon !== undefined && icon}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
export type { InputProps };
