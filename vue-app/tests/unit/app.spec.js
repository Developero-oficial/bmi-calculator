import "@testing-library/jest-dom";
import { screen, render, fireEvent, waitFor } from "@testing-library/vue";

import App from "@/App";

beforeEach(() => render(App));

test("calculator UI", () => {
  expect(screen.queryByLabelText("Height (KG)")).toBeInTheDocument();
  expect(screen.queryByLabelText("Weight (M)")).toBeInTheDocument();
  expect(screen.queryByRole("button", { name: "Send" })).toBeInTheDocument();
});

test("calculator Thinness result", async () => {
  const heightInput = screen.queryByLabelText("Height (KG)");
  const weightInput = screen.queryByLabelText("Weight (M)");
  const submitBtn = screen.queryByRole("button", { name: "Send" });

  heightInput.value = "1.7";
  weightInput.value = "50";

  fireEvent.click(submitBtn);

  await waitFor(() =>
    expect(screen.queryByText("Result: 17.301")).toBeInTheDocument()
  );
  await waitFor(() =>
    expect(screen.queryByText("Estimation: Thinness")).toBeInTheDocument()
  );
});

test("calculator Normal result", async () => {
  const heightInput = screen.queryByLabelText("Height (KG)");
  const weightInput = screen.queryByLabelText("Weight (M)");
  const submitBtn = screen.queryByRole("button", { name: "Send" });

  heightInput.value = "1.7";
  weightInput.value = "60";

  fireEvent.click(submitBtn);

  await waitFor(() =>
    expect(screen.queryByText("Result: 20.761")).toBeInTheDocument()
  );
  await waitFor(() =>
    expect(screen.queryByText("Estimation: Normal")).toBeInTheDocument()
  );
});

test("calculator Overweight result", async () => {
  const heightInput = screen.queryByLabelText("Height (KG)");
  const weightInput = screen.queryByLabelText("Weight (M)");
  const submitBtn = screen.queryByRole("button", { name: "Send" });

  heightInput.value = "1.7";
  weightInput.value = "80";

  fireEvent.click(submitBtn);

  await waitFor(() =>
    expect(screen.queryByText("Result: 27.682")).toBeInTheDocument()
  );
  await waitFor(() =>
    expect(screen.queryByText("Estimation: Overweight")).toBeInTheDocument()
  );
});

test("calculator Obese result", async () => {
  const heightInput = screen.queryByLabelText("Height (KG)");
  const weightInput = screen.queryByLabelText("Weight (M)");
  const submitBtn = screen.queryByRole("button", { name: "Send" });

  heightInput.value = "1.7";
  weightInput.value = "100";

  fireEvent.click(submitBtn);

  await waitFor(() =>
    expect(screen.queryByText("Result: 34.602")).toBeInTheDocument()
  );
  await waitFor(() =>
    expect(screen.queryByText("Estimation: Obese")).toBeInTheDocument()
  );
});
