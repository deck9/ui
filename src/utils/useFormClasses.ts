import { computed, ComputedRef } from "@vue/runtime-core";
import { Size } from "../types";

interface InputProps {
  size?: Size;
  icon?: string;
  isDisabled?: boolean;
  block?: boolean;
}

export function useFormClasses(props: InputProps): {
  [x: string]: ComputedRef;
} {
  const inputClasses = computed(() => {
    return {
      "pl-3 pr-10 py-2": !props.icon && props.size === "small",
      "pl-4 pr-10 py-3": !props.icon && props.size === "medium",
      "pl-6 pr-10 py-3": !props.icon && props.size === "large",

      "pl-10 pr-10 py-1": props.icon && props.size === "small",
      "pl-12 pr-10 py-3":
        props.icon && (props.size === "medium" || props.size === "large"),

      "w-full block": props.block === true,
    };
  });

  const disabledClasses = computed(() => {
    return {
      "pointer-events-none opacity-50 cursor-not-allowed": props.isDisabled,
    };
  });

  const textSizeClasses = computed(() => {
    return {
      "text-xs leading-4": props.size === "small",
      "text-sm leading-4": props.size === "medium",
      "text-base leading-5": props.size === "large",
    };
  });

  return {
    inputClasses,
    disabledClasses,
    textSizeClasses,
  };
}
