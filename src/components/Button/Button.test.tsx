import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

const user = userEvent.setup();

describe("Given the Button component", () => {
  const expectedButtonText = "Click for fun";

  describe("When it receives 'Click for fun' and an action", () => {
    test("Then it should show a 'Click for fun' button", () => {
      render(
        <Button
          text={expectedButtonText}
          action={() => {}}
          classModifierName="test"
        />,
      );

      const buttonElement = screen.getByRole("button", {
        name: new RegExp(expectedButtonText, "i"),
      });

      expect(buttonElement).toBeVisible();
    });

    describe("And the user clicks the 'Click for fun' button", () => {
      test("Then it should call the action", async () => {
        const action = vitest.fn();

        render(
          <Button
            text={expectedButtonText}
            action={action}
            classModifierName="test"
          />,
        );

        const buttonElement = screen.getByRole("button", {
          name: new RegExp(expectedButtonText, "i"),
        });

        await user.click(buttonElement);

        expect(action).toHaveBeenCalled();
      });
    });
  });
});
