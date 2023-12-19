import { FC, useState } from "react"
import { useForm } from "react-hook-form"
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
  console.log(errors)
  return (
    <div className="space-y-28">
      <p className="title">Feedback</p>
      <div className="flex justify-center gap-x-7">
        <form onSubmit={handleSubmit(onSubmit)} className="form-control">
          <Input
            className="h-9 w-96 "
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
              maxLength: 20,
            })}
          />
          <Input
            className="h-9 w-96"
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
            className="h-32 w-96 resize-none overflow-scroll align-top"
            placeholder="Leave a message and we will contact you shortly"
            error={errors.feedback}
            {...register("feedback", {
              required: {
                value: true,
                message: "Feedback is required. Please write your feedback.",
              },
            })}
          />
          <Button loading={sending} className="mt-auto" type="submit">
            Send
          </Button>
        </form>
        <p className="w-full max-w-[600px] bg-gray-100 p-12">
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
    </div>
  )
}

export default Feedback
