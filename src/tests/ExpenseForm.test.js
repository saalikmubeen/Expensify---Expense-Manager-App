import React from "react";
import { shallow } from "enzyme";
import moment from "moment";
import ExpenseForm from "../components/ExpenseForm";
import expenses from "./expenses";

test("Expect to render ExpenseForm without expense data", () => {
    const wrapper = shallow(<ExpenseForm />);
    // console.log(wrapper.length);

    expect(wrapper).toMatchSnapshot();
});

test("Expect to render ExpenseForm with expense data", () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[2]} />);
    // console.log(wrapper.length);

    expect(wrapper).toMatchSnapshot();
});

test("Expect form submission without description or without amount", () => {
    const wrapper = shallow(<ExpenseForm />);

    expect(wrapper).toMatchSnapshot();

    wrapper.find("form").simulate("submit", {
        preventDefault: () => {},
    }); // second argument passed to simulate is the event object onSubmit expects

    expect(wrapper.state("error")).toBe("Provide a description and amount!");
    expect(wrapper.state("error").length).toBeGreaterThan(0);

    expect(wrapper).toMatchSnapshot();
});

test("Expect form submission with valid form submission", () => {
    const saveExpenseSpy = jest.fn();
    const wrapper = shallow(
        <ExpenseForm expense={expenses[1]} saveExpense={saveExpenseSpy} />
    );

    wrapper.find("form").simulate("submit", {
        preventDefault: () => {},
    });

    expect(wrapper.state("error")).toBe("");
    expect(saveExpenseSpy).toHaveBeenLastCalledWith({
        description: expenses[1].description,
        note: expenses[1].note,
        amount: expenses[1].amount,
        createdAt: expenses[1].createdAt,
    });

    expect(wrapper).toMatchSnapshot();
});

test("Should set description on input change", () => {
    const wrapper = shallow(<ExpenseForm />);

    wrapper
        .find("input")
        .at(0)
        .simulate("change", {
            target: { name: "description", value: "hi" },
        });

    expect(wrapper.state("description")).toBe("hi");

    expect(wrapper).toMatchSnapshot();
});

test("Should set note on input change", () => {
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find("textarea").simulate("change", {
        target: { name: "note", value: "note it" },
    });

    expect(wrapper.state("note")).toBe("note it");

    expect(wrapper).toMatchSnapshot();
});

test("Should set new Date on date change", () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find("#datePicker").prop("onDateChange")(now);

    expect(wrapper.state("createdAt")).toEqual(now);

    expect(wrapper).toMatchSnapshot();
});
