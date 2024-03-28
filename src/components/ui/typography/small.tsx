import { cn } from "@/lib/utils"
import { DetailedHTMLProps, HTMLAttributes } from "react"

export function Small({
  children,
  className,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) {
  return (
    <small
      className={cn(
        "text-sm font-medium leading-none", className
      )}
      {...props}
    >
      { children }
    </small>
  )
}
