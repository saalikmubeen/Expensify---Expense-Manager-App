import React from "react";
import { shallow } from "enzyme";
import { ExpenseList } from "../components/ExpenseList";
import expenses from "./expenses";

test("Expect to render ExpenseList component with expenses", () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />);

    expect(wrapper).toMatchSnapshot();
});

test("Expect to render ExpenseList component without expenses", () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />);

    expect(wrapper).toMatchSnapshot();
});
