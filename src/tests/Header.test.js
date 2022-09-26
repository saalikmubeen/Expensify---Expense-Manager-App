import React from "react";
import { shallow } from "enzyme";
import { Header } from "../components/Header";

test("Expect to render Header component", () => {
    expect.assertions(2);
    const wrapper = shallow(<Header />);
    expect(wrapper.find("h1").text()).toBe("Expensify");
    expect(wrapper).toMatchSnapshot();
});
