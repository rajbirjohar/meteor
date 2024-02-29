import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import styles from "./Badge.module.css";

const badgeVariants = cva(styles.badge, {
  variants: {
    variant: {
      default: styles.default,
      solid: styles.solid,
      destructive: styles.destructive,
      warning: styles.warning,
      subtle: styles.subtle,
    },
    rounded: {
      true: styles.rounded,
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  variant?: "default" | "solid" | "destructive" | "warning" | "subtle";
  rounded?: boolean;
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      className,
      variant,

      rounded,

      children,

      ...props
    },
    ref
  ) => {
    return (
      <div
        className={badgeVariants({
          variant,
          rounded,
          className,
        })}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Badge.displayName = "Badge";

export { Badge };
