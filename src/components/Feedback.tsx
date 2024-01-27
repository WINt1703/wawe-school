import useFeedback from "../utils/hooks/useFeedback"
import Button from "./Button"
import Input from "./Input"
import { zodResolver } from "@hookform/resolvers/zod"
import { FC } from "react"
import { useForm } from "react-hook-form"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"
import { Link } from "react-router-dom"
import { isAlpha, isMobilePhone } from "validator"
import { z } from "zod"

const schema = z.object({
	feedback: z
		.string()
		.min(1, "Feedback is required. Please write your feedback.")
		.max(400, "Max length for message is 400 symbols"),
	name: z
		.string()
		.min(1, "Name is required. Please enter your name.")
		.max(25, "Max length for name is 25 symbols")
		.refine(isAlpha, "Name should consist of letters"),
	phone: z
		.string()
		.min(12, "Phone is required. Please enter your phone.")
		.refine(isMobilePhone, "Please enter your phone (123456789000)")
})

type ValidationSchema = z.infer<typeof schema>

const Feedback: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid }
	} = useForm<ValidationSchema>({
		mode: "onChange",
		resolver: zodResolver(schema)
	})
	const { handler, loading } = useFeedback()

	return (
		<div className="space-y-28">
			<p className="title">Feedback</p>
			<div className="flex flex-col items-center justify-center gap-7 lg:flex-row">
				<form
					onSubmit={handleSubmit(handler)}
					className="form-control w-full max-w-sm">
					<Input
						className="h-9 w-full"
						placeholder="Name"
						error={errors.name}
						{...register("name")}
					/>
					<Input
						className="h-9 w-full"
						placeholder="Phone"
						error={errors.phone}
						{...register("phone")}
					/>
					<Input
						textarea
						className="h-32 w-full resize-none overflow-scroll align-top"
						placeholder="Leave a message and we will contact you shortly"
						error={errors.feedback}
						{...register("feedback")}
					/>
					<Button
						loading={loading}
						className="mx-auto mt-5 lg:mx-0"
						type="submit"
						disabled={!isValid || loading}>
						Send
					</Button>
				</form>
				<p className="w-full max-w-[600px] self-start justify-self-start bg-gray-100 p-12 text-center lg:text-start">
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
					target="_blank"
					className="hover:text-teal-400 active:text-teal-600"
					to="https://www.instagram.com/">
					<FaInstagram className="h-10 w-10" />
				</Link>
				<Link
					target="_blank"
					className="hover:text-teal-400 active:text-teal-600"
					to="https://www.facebook.com/">
					<FaFacebook className="h-10 w-10" />
				</Link>
				<Link
					target="_blank"
					className="hover:text-teal-400 active:text-teal-600"
					to="https://www.youtube.com/">
					<FaYoutube className="h-10 w-10" />
				</Link>
			</div>
		</div>
	)
}

export default Feedback
