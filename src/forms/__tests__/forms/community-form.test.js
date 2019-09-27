import React from "react";
import { render } from "@testing-library/react";
import CommunityForm from "../../CommunityForm/create_edit_community.js";

// smoke test
it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<CommunityForm />, div);
});

it("renders welcome message", () => {
  const { getByText } = render(<CommunityForm />);
  expect(getByText("Community")).toBeInTheDocument();
});

// - test that a form loads (testing a React component with Jest)
// - test that form updates data successfully when you submit
// - test that form doesn't submit data without required field (name)
// - test that form doesn't submit data with invalid input (name with special characters)
