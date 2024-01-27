import FeedbackSection from "./FeedbackSection"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { FC, PropsWithChildren } from "react"
import { MemoryRouter } from "react-router-dom"

const wrapper: FC<PropsWithChildren> = ({ children }) => (
	<MemoryRouter basename="/">{children}</MemoryRouter>
)

describe("Feedback component", () => {
	test("should get error messages from field Name", async () => {
		render(<FeedbackSection />, {
			wrapper
		})

		const nameInput = screen.getByPlaceholderText("Name")

		await userEvent.type(nameInput, "test")
		await userEvent.clear(nameInput)
		const requiredName = await screen.findByText(
			"Name is required. Please enter your name."
		)
		expect(requiredName).toBeInTheDocument()

		await userEvent.type(nameInput, "4")
		const incorrectFormat = await screen.findByText(
			"Name should consist of letters"
		)
		expect(incorrectFormat).toBeInTheDocument()

		await userEvent.clear(nameInput)
		await userEvent.type(nameInput, "qwertyuiopasdfghjklzxqwertyy")
		const maxLength = await screen.findByText(
			"Max length for name is 25 symbols"
		)
		expect(maxLength).toBeInTheDocument()
	})

	test("should get error messages from field Phone", async () => {
		render(<FeedbackSection />, {
			wrapper
		})

		const phoneInput = screen.getByPlaceholderText("Phone")

		await userEvent.type(phoneInput, "123-123-1234")
		await userEvent.clear(phoneInput)
		const requiredPhone = await screen.findByText(
			"Phone is required. Please enter your phone."
		)
		expect(requiredPhone).toBeInTheDocument()

		await userEvent.type(phoneInput, "testsssssssssssssssssssss")
		const incorrectFormat = await screen.findByText(
			"Please enter your phone. Example: 122333444455"
		)
		expect(incorrectFormat).toBeInTheDocument()
	})

	test("should get error message from field Feedback", async () => {
		render(<FeedbackSection />, {
			wrapper
		})

		const feedbackInput = screen.getByPlaceholderText(
			"Leave a message and we will contact you shortly"
		)
		fireEvent.change(feedbackInput, {
			target: {
				value: "test"
			}
		})
		await userEvent.clear(feedbackInput)
		const requiredFeedback = await screen.findByText(
			"Feedback is required. Please write your feedback."
		)
		expect(requiredFeedback).toBeInTheDocument()
	})

	test("should be submit button disabled", () => {
		render(<FeedbackSection />, {
			wrapper
		})

		const button = screen.getByRole("button", {
			name: "Send"
		})

		expect(button).toBeDisabled()
	})

	test("should submit form", async () => {
		render(<FeedbackSection />, {
			wrapper
		})

		const nameInput = screen.getByPlaceholderText("Name")
		const phoneInput = screen.getByPlaceholderText("Phone")
		const feedbackInput = screen.getByPlaceholderText(
			"Leave a message and we will contact you shortly"
		)

		await userEvent.type(nameInput, "Stiv")
		await userEvent.type(phoneInput, "123456789000")
		await userEvent.type(feedbackInput, "Surfing")

		const button = await screen.findByRole("button", {
			name: "Send"
		})
		expect(button).toBeEnabled()

		await userEvent.click(button)

		const spinner = await screen.findByTestId("spinner")
		await waitFor(
			() => {
				expect(spinner).not.toBeInTheDocument()
			},
			{
				timeout: 5000
			}
		)
	})
})
