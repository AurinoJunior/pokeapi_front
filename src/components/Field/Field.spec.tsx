import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Field } from "./Field";

describe("Field", () => {
  it("should render field", () => {
    render(<Field label="test" name="test" value="" onChange={() => {}} />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("should update input value", () => {
    const handleOnChange = vi.fn();

    const { getByRole } = render(
      <Field label="test" name="test" value="Teste" onChange={handleOnChange} />
    );

    const input = getByRole("textbox", {
      name: /test/i,
    });

    fireEvent.change(input, { target: { value: "New value" } });

    expect(handleOnChange).toHaveBeenCalledTimes(1);
  });
});
