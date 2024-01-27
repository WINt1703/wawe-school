import * as useBlog from "../utils/hooks/useBlog"
import { ReturnBlogType } from "../utils/hooks/useBlog"
import BlogSection from "./BlogSection"
import { render, screen } from "@testing-library/react"
import { FC, PropsWithChildren } from "react"
import { MemoryRouter } from "react-router-dom"

const hookResult: ReturnBlogType = {
	loading: false,
	slides: [
		{
			id: 1,
			description: "Slide 1",
			photo:
				"https://sxqlzlelwdslochdutgr.supabase.co/storage/v1/object/public/blog/slide-1.jpg?t=2024-01-27T01%3A03%3A56.790Z",
			theme: "Test slide 1"
		},
		{
			id: 2,
			description: "Slide 2",
			photo:
				"https://sxqlzlelwdslochdutgr.supabase.co/storage/v1/object/public/`blog/slide-2.jpg?t=2024-01-27T01%3A04%3A11.394Z",
			theme: "Test slide 2"
		}
	]
}

const wrapper: FC<PropsWithChildren> = ({ children }) => (
	<MemoryRouter basename="/">{children}</MemoryRouter>
)

describe("Blog component", () => {
	test("should render Blog with slides", async () => {
		jest.spyOn(useBlog, "default").mockReturnValueOnce(hookResult)
		render(<BlogSection />, {
			wrapper
		})

		const carouselItems = await screen.findAllByTestId(/^blog_item\d/)
		expect(carouselItems.length).toBe(2)
	})

	test("should render Blog without slides", async () => {
		jest
			.spyOn(useBlog, "default")
			.mockReturnValueOnce({ ...hookResult, slides: undefined })
		render(<BlogSection />, { wrapper })

		const carouselItems = screen.queryAllByTestId(/^blog_item\d/)
		expect(carouselItems.length).toBe(0)
	})

	test("should select last slide", async () => {
		jest.spyOn(useBlog, "default").mockReturnValueOnce(hookResult)
		render(
			<MemoryRouter initialEntries={["/#blog_item2"]}>
				<BlogSection />
			</MemoryRouter>
		)

		const archon = await screen.findByTestId("#blog_item2")
		expect(archon.className).toContain("bg-teal-400")
	})
})
