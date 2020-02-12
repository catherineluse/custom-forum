import ReactDOM from "react-dom";
import App from "../App";
import * as serviceWorker from "../serviceWorker";
import { mount } from "enzyme";

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("has the right user in state", () => {
  const wrapper = mount(<App />);
  //   expect(wrapper.state().username).to.equal("cluse");
  wrapper.unmount();
});
