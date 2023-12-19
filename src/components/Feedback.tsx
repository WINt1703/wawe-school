import { FC, useState } from "react"
import { useForm } from "react-hook-form"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"
import { Link } from "react-router-dom"
import { baseUrl } from "../utils/hooks/fetcher"
import Button from "./Button"
import Input from "./Input"
const phoneNumberRegex =
  /^(?:(?:\+|00)\d{1,3}\s?)?[\s().-]?(\d{1,4})[\s().-]?(\d{1,4})[\s().-]?(\d{1,9})$/

const nameRegex = /^[A-Za-z]+([ -]?[A-Za-z]+)*$/

interface FormInputs {
  name: string
  phone: string
  feedback: string
}

const Feedback: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    mode: "onChange",
  })
  const [sending, setSending] = useState(false)

  const onSubmit = async (data: FormInputs): Promise<void> => {
    setSending(true)

    try {
      await fetch(baseUrl + "/feedback", {
        method: "POST",
        body: JSON.stringify(data),
      })
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="space-y-28">
      <p className="title">Feedback</p>
      <div className="flex flex-col items-center justify-center gap-7 lg:flex-row">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form-control w-full max-w-sm"
        >
          <Input
            className="h-9 w-full"
            placeholder="Name"
            error={errors.name}
            {...register("name", {
              required: {
                value: true,
                message: "Name is required. Please enter your name.",
              },
              pattern: {
                value: nameRegex,
                message:
                  "Name should consist of letters and may include dashes or spaces.",
              },
              maxLength: {
                value: 20,
                message: "Max length for name is 20 symbols",
              },
            })}
          />
          <Input
            className="h-9 w-full"
            placeholder="Phone"
            error={errors.phone}
            {...register("phone", {
              pattern: {
                value: phoneNumberRegex,
                message: "Please use the format XXX-XXX-XXXX.",
              },
              required: {
                value: true,
                message: "Phone is required. Please enter your phone.",
              },
            })}
          />
          <Input
            textarea
            className="h-32 w-full resize-none overflow-scroll align-top"
            placeholder="Leave a message and we will contact you shortly"
            error={errors.feedback}
            {...register("feedback", {
              required: {
                value: true,
                message: "Feedback is required. Please write your feedback.",
              },
            })}
          />
          <Button
            loading={sending}
            className="mx-auto mt-5 lg:mx-0"
            type="submit"
          >
            Send
          </Button>
        </form>
        <p className="h-full w-full max-w-[600px] bg-gray-100 p-12 text-center lg:text-start">
          Have a question?
          <br />
          You can contact us:
          <br />
          <br />
          WhatsApp, Viber, Telegram
          <br />
          +3 467 486-37-88
          <br />
          <br />
          Avenida grandes playas 79, Corralejo la Oliva Fuerteventura, Spain.
          35660
        </p>
      </div>
      <div className="flex justify-center gap-5 uppercase">
        <Link
          className="hover:text-teal-400 active:text-teal-600"
          to="https://www.instagram.com/"
        >
          <FaInstagram className="h-10 w-10" />
        </Link>
        <Link
          className="hover:text-teal-400 active:text-teal-600"
          to="https://www.facebook.com/"
        >
          <FaFacebook className="h-10 w-10" />
        </Link>
        <Link
          className="hover:text-teal-400 active:text-teal-600"
          to="https://www.youtube.com/"
        >
          <FaYoutube className="h-10 w-10" />
        </Link>
      </div>
    </div>
  )
}

export default Feedback
