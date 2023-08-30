import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Toast } from "./Toast";
import { notifyToast } from "./notifyToast";

describe("Toast", () => {
  it("should render Toast", async () => {
    render(
      <>
        <div>
          <button onClick={() => notifyToast("Error")}>show toast</button>
        </div>
        <Toast />
      </>
    );

    const button = screen.getByText("show toast");
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText("Error")).toBeInTheDocument();
    });
  });
});
