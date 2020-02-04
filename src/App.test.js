import React from 'react';
import { mount, shallow } from 'enzyme';

import App from './App';

describe('Phone challenge', () => {
  it('App render correctly', () => {
    const component = shallow(<App />);

    expect(component).toMatchSnapshot();
    component.unmount();
  });

  it('render title', () => {
    const wrapper = mount(<App />);

    const titleElement = wrapper.find('h1.center-text');
    expect(titleElement).toHaveLength(1);

    wrapper.unmount();
  });
});
