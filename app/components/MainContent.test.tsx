import { fireEvent, render, screen } from "@testing-library/react";
import MainContent from "./MainContent";

describe("MainContent", () => {
  it("renders the portfolio content and opens the modal callback", () => {
    const onOpenModal = vi.fn();

    render(
      <MainContent
        time="18:30"
        formAction="https://formspree.io/f/example"
        formMethod="POST"
        formStatus={{ type: "", message: "" }}
        onOpenModal={onOpenModal}
        onSubmit={vi.fn()}
      />,
    );

    expect(screen.getByRole("heading", { name: "Abdur Rahman" })).toBeInTheDocument();
    expect(screen.getByText("18:30")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /more info/i }));
    expect(onOpenModal).toHaveBeenCalledTimes(1);
  });
});
