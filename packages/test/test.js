import test from "ava";
import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

//
Enzyme.configure({ adapter: new Adapter() });

// example

test("1 + 2 = 3 should ok", t => {
  t.is(1 + 2, 3);
});

test("React simple test", t => {
  const App = ({ children }) => {
    return <div className="container">{children}</div>;
  };
  const wrapper = shallow(
    <App>
      <span>test</span>
    </App>
  );
  t.is(wrapper.find("span").length, 1);
});
