import React from "react";
import { mount } from "enzyme";
import Timer from "../Timer";

describe("Timer Component", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  it("should have correct initial values", () => {
    const wrapper = mount(<Timer />);
    expect(wrapper.find(".time-display").text()).toBe("25:00");
  });

  it("should start countdown when Start button is clicked", () => {
    const wrapper = mount(<Timer />);
    wrapper.find(".start-timer").simulate("click");
    jest.advanceTimersByTime(2000);
    expect(wrapper.find(".time-display").text()).toBe("24:58");
  });

  it("should pause countdown when Stop button is clicked", () => {
    const wrapper = mount(<Timer />);
    wrapper.find(".start-timer").simulate("click");
    jest.advanceTimersByTime(1000);
    wrapper.find(".stop-timer").simulate("click");
    expect(wrapper.find(".time-display").text()).toBe("24:59");
  });

  it("should reset time when Reset button is clicked", () => {
    const wrapper = mount(<Timer />);
    wrapper.find(".start-timer").simulate("click");
    jest.advanceTimersByTime(3000);
    wrapper.find(".reset-timer").simulate("click");
    expect(wrapper.find(".time-display").text()).toBe("25:00");
  });

  it("should stop countdown when time is up", () => {
    const wrapper = mount(<Timer />);
    wrapper.find(".start-timer").simulate("click");
    jest.advanceTimersByTime(1500000);
    expect(wrapper.find(".time-display").text()).toBe("0:00");
  });
});
