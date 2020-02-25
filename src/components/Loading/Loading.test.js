import React from 'react';
import { shallow } from 'enzyme';

import Loading from './Loading';

describe('Phone extended component', () => {
  it('Loading render correctly', () => {
    const wrapper = shallow(<Loading />);

    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });

  it('render first circle', () => {
    const wrapper = shallow(<Loading />);

    const element = wrapper.find('.loader');
    expect(element).toHaveLength(1);

    wrapper.unmount();
  });

  it('render second circle', () => {
    const wrapper = shallow(<Loading />);

    const element = wrapper.find('.loader-second');
    expect(element).toHaveLength(1);

    wrapper.unmount();
  });

  it('render third circle', () => {
    const wrapper = shallow(<Loading />);

    const element = wrapper.find('.loader-third');
    expect(element).toHaveLength(1);

    wrapper.unmount();
  });
});
