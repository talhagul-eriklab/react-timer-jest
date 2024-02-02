import React from "react";
import { shallow } from "enzyme";
import TimerButton from "../TimerButton";

describe("TimerButton Component", () => {
  it("should render the TimerButton component", () => {
    const wrapper = shallow(
      <TimerButton buttonAction={() => {}} buttonValue="Start" />
    );
    expect(wrapper.find(".button-value").text()).toBe("Start");
  });

  it("should call the buttonAction prop when clicked", () => {
    const mockButtonAction = jest.fn();
    const wrapper = shallow(
      <TimerButton buttonAction={mockButtonAction} buttonValue="Start" />
    );
    wrapper.find(".button-container").simulate("click");
    expect(mockButtonAction).toHaveBeenCalled();
  });
});
