import * as useBlog from "../utils/hooks/useBlog"
import { ReturnBlogType } from "../utils/hooks/useBlog"
import Blog from "./Blog"
import { render, screen } from "@testing-library/react"
import { FC, PropsWithChildren } from "react"
import { MemoryRouter } from "react-router-dom"

const hookResult: ReturnBlogType = {
	error: false,
	isLoading: false,
	isValidating: true,
	slides: [
		{
			id: 1,
			description: "Slide 1",
			photo:
				"https://www.google.com/url?sa=i&url=https%3A%2F%2Fgithub.com%2Fvercel%2Fswr%2Fdiscussions%2F2077&psig=AOvVaw0XFK0A4iODyTwUGaVI21d5&ust=1703990477728000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJDBy66RtoMDFQAAAAAdAAAAABAD",
			theme: "Test slide 1"
		},
		{
			id: 2,
			description: "Slide 2",
			photo:
				"https://www.google.com/url?sa=i&url=https%3A%2F%2Ffrontend-digest.com%2Fmocking-rest-apis-with-msw-af2353012daa&psig=AOvVaw0XFK0A4iODyTwUGaVI21d5&ust=1703990477728000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJDBy66RtoMDFQAAAAAdAAAAABAI",
			theme: "Test slide 2"
		}
	],
	mutate: jest.fn()
}

const wrapper: FC<PropsWithChildren> = ({ children }) => (
	<MemoryRouter basename="/">{children}</MemoryRouter>
)

describe("Blog component", () => {
	test("should render Blog with slides", async () => {
		jest.spyOn(useBlog, "default").mockReturnValueOnce(hookResult)
		render(<Blog />, {
			wrapper
		})

		const carouselItems = await screen.findAllByTestId(/^blog_item\d/)
		expect(carouselItems.length).toBe(2)
	})

	test("should render Blog without slides", async () => {
		jest
			.spyOn(useBlog, "default")
			.mockReturnValueOnce({ ...hookResult, slides: undefined })
		render(<Blog />, { wrapper })

		const carouselItems = screen.queryAllByTestId(/^blog_item\d/)
		expect(carouselItems.length).toBe(0)
	})

	test("should select last slide", async () => {
		jest.spyOn(useBlog, "default").mockReturnValueOnce(hookResult)
		render(
			<MemoryRouter initialEntries={["/#blog_item2"]}>
				<Blog />
			</MemoryRouter>
		)

		const archon = await screen.findByTestId("#blog_item2")
		expect(archon.className).toContain("bg-teal-400")
	})
})
