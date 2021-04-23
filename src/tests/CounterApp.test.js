import React from "react";
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe("Pruebas en <CounterApp />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CounterApp />);  //sirve pare resetear cada vez que se ejecuta un test
  })

  test("debe de mostrar <CounterApp /> correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar el valor por defecto de 100", () => {
    const wrapper = shallow(<CounterApp value={100} />);
    const counterText = wrapper.find("h2").text().trim();

    expect(counterText).toBe("100");
  });

  test("debe de incrementar con el botón +1", () => {
    wrapper.find("button").at(0).simulate("click");

    const counterText = wrapper.find("h2").text().trim();

    expect(counterText).toBe("11");
  });

  test("debe de decrementar con el botón -1", () => {
    
    wrapper.find("button").at(2).simulate("click");

    const counterText = wrapper.find("h2").text().trim();

    expect(counterText).toBe("9");
  });
});
