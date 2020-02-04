import React from 'react';
import { mount } from 'enzyme';

import App from './App';

describe('Phone challenge', () => {
  it('renders title', () => {
    const wrapper = mount(<App />);

    const titleElement = wrapper.find('h1.center-text');
    expect(titleElement).toHaveLength(1);

    wrapper.unmount();
  });
});
