import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import styles from "./Button.module.css";
import { LoaderIcon } from "lucide-react";

const buttonVariants = cva(styles.button, {
  variants: {
    variant: {
      default: styles.default,
      subtle: styles.subtle,
      destructive: styles.destructive,
      outline: styles.outline,
      ghost: styles.ghost,
    },
    icon: {
      true: styles.icon,
    },
    rounded: {
      true: styles.rounded,
    },
    small: {
      true: styles.small,
    },
    fill: {
      true: styles.fill,
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLElement>,
    VariantProps<typeof buttonVariants> {
  variant?: "default" | "subtle" | "destructive" | "outline" | "ghost";
  icon?: boolean;
  rounded?: boolean;
  small?: boolean;
  fill?: boolean;
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      icon,
      rounded,
      small,
      fill,
      children,
      loading,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={buttonVariants({
          variant,
          icon,
          rounded,
          small,
          fill,
          className,
        })}
        ref={ref}
        {...props}
        onClick={(e) => {
          // Prevent click event if button is loading
          if (loading) {
            e.preventDefault();
            e.stopPropagation();
            return;
          }
          // Call the original onClick handler
          if (props.onClick) {
            props.onClick(e);
          }
        }}
      >
        {loading && (
          <span className={styles.loader}>
            <LoaderIcon className={styles.loadingicon} />
          </span>
        )}
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants };
