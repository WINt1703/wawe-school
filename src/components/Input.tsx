import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react"
import { FieldError, UseFormRegisterReturn } from "react-hook-form"

type InputProp = InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> &
  UseFormRegisterReturn & {
    name: string
    error?: FieldError
    textarea?: boolean
  }

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProp>(
  ({ className, error, textarea, ...rest }, ref) => {
    const styledClassName = `${className ?? ""} ${
      error ? "text-red-400 focus:border-red-600 placeholder:text-red-500" : ""
    } w-64 rounded-none border-0 !border-b-2 text-teal-400 placeholder:text-teal-500 focus:outline-none`

    return (
      <>
        {textarea ? (
          <textarea
            {...rest}
            ref={ref as ForwardedRef<HTMLTextAreaElement>}
            className={`textarea textarea-bordered ${styledClassName}`}
          />
        ) : (
          <input
            {...rest}
            ref={ref as ForwardedRef<HTMLInputElement>}
            className={`input input-bordered ${styledClassName}`}
          />
        )}
        {error && (
          <span className="label text-[5px] text-red-500">
            {error?.message}
          </span>
        )}
      </>
    )
  }
)

export default Input
