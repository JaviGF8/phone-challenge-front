import React from 'react';
import { shallow, render } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import jest from 'jest-mock';

import PhoneInfoPage from './PhoneInfoPage';

const phone = {
  id: '1',
  image:
    'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6316/6316066_sd.jpg;maxHeight=640;maxWidth=550',
  title: 'iPhone X',
  description:
    'iPhone X features an all-screen design with a 5.8" Super Retina HD display with HDR and True Tone.¹ Designed with durable glass and a surgical-grade stainless steel band. Charges wirelessly.² Resists water and dust.³ 12.0MP dual cameras with dual optical image stabilization for great low-light photos. TrueDepth camera with Portrait selfies and new Portrait Lighting.⁴ Face ID lets you unlock and use Apple Pay with just a glance. Powered by A11 Bionic, the powerful and smart chip. Supports augmented reality experiences in games and apps. With iPhone X, the next era of iPhone has begun. SIM included in the box, not required for activation, will not lock to any carrier upon activation.',
  color: 'Silver',
  price: '$699.99',
  seller: 'Apple',
};

const defaultFn = jest.fn();

describe('Phone extended component', () => {
  it('PhoneInfoPage render correctly', () => {
    const wrapper = shallow(<PhoneInfoPage getAllPhones={defaultFn} getPhoneData={defaultFn} />);

    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });

  it('render phone info', () => {
    const wrapper = render(
      <Router>
        <PhoneInfoPage getAllPhones={defaultFn} getPhoneData={defaultFn} phone={phone} />
      </Router>,
    );

    const element = wrapper.find('.phone-extended');
    expect(element).toHaveLength(1);
  });

  it('render no phone', () => {
    const wrapper = render(
      <Router>
        <PhoneInfoPage getAllPhones={defaultFn} getPhoneData={defaultFn} />
      </Router>,
    );

    const element = wrapper.find('.no-phone');
    expect(element.text()).toEqual('No phone found');
  });

  it('render loading', () => {
    const wrapper = render(
      <Router>
        <PhoneInfoPage getAllPhones={defaultFn} getPhoneData={defaultFn} loading />
      </Router>,
    );

    const element = wrapper.find('.loading-container');
    expect(element).toHaveLength(1);
  });
});
