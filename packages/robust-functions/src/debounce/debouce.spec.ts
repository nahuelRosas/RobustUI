import { debounce } from ".";

jest.useFakeTimers();

describe("test _robust_functions", function () {
  it("test @robust/functions.debounce", function () {
    const mockFunction = jest.fn();
    const debouncedFunction = debounce({
      options: {
        fn: mockFunction,
        delay: 1000,
        immediate: false,
      },
    });
    debouncedFunction();

    expect(mockFunction).not.toHaveBeenCalled();

    jest.runAllTimers();

    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
});
