"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import styles from "./Switch.module.css";
import cn from "../../utils/cn";
import { Loader2Icon } from "lucide-react";

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  loading?: boolean;
}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ className, loading, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(styles.root, className)}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb className={cn(styles.thumb)}>
      {loading && <Loader2Icon size={18} className={styles.indicator} />}
    </SwitchPrimitives.Thumb>
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
