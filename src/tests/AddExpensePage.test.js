import React from "react";
import { shallow } from "enzyme";
import { AddExpensePage } from "../components/AddExpensePage";
import expenses from "./expenses";

let addExpenseSpy, history, wrapper;

beforeEach(() => {
    addExpenseSpy = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <AddExpensePage addExpense={addExpenseSpy} history={history} />
    );
});

test("Should render AddExpensePage correctly", () => {
    expect(wrapper).toMatchSnapshot();
});

test("Should render AddExpensePage correctly", () => {
    wrapper.find("ExpenseForm").prop("saveExpense")(expenses[0]);

    // expect(history.push).toHaveBeenLastCalledWith("/");
    expect(addExpenseSpy).toHaveBeenLastCalledWith(expenses[0]);

    expect(wrapper).toMatchSnapshot();
});
