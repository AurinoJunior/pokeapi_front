import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("button", () => {
  it("should render button", () => {
    render(<Button>Ok</Button>);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
