import { renderHook } from "@testing-library/react";
import { useDhakaClock } from "./useDhakaClock";

describe("useDhakaClock", () => {
  it("returns a formatted time string", () => {
    const { result } = renderHook(() => useDhakaClock());

    expect(result.current).toMatch(/^\d{2}:\d{2}$/);
  });
});
