import { ButtonHTMLAttributes, FC } from "react"

type ButtonProp = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean
}

const Button: FC<ButtonProp> = ({ loading, children, className, ...props }) => {
  return (
    <button
      {...props}
      className={`${
        className ?? ""
      } btn w-56 rounded-none border border-neutral-300 py-2 font-normal`}
    >
      {loading && (
        <span
          className={`loading loading-spinner loading-sm -ml-7 mr-3 align-middle text-teal-400`}
        />
      )}
      {children}
    </button>
  )
}

export default Button
