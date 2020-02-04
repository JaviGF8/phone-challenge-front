import React from 'react';
import { mount, shallow } from 'enzyme';

import PhoneExtended from './PhoneExtended';

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

describe('Phone extended component', () => {
  it('PhoneExtended render correctly', () => {
    const component = shallow(<PhoneExtended />);

    expect(component).toMatchSnapshot();
    component.unmount();
  });

  it('render parent', () => {
    const wrapper = mount(<PhoneExtended phone={phone} />);

    const element = wrapper.find('div.phone-extended');
    expect(element).toHaveLength(1);

    wrapper.unmount();
  });

  it('render phone', () => {
    const wrapper = shallow(<PhoneExtended phone={phone} />);

    const element = wrapper.find('.phone-extended');
    expect(element).toHaveLength(1);

    wrapper.unmount();
  });

  it('render image', () => {
    const wrapper = shallow(<PhoneExtended phone={phone} />);

    const element = wrapper.find('.phone-image');
    expect(element).toHaveLength(1);

    wrapper.unmount();
  });

  it('render title', () => {
    const wrapper = shallow(<PhoneExtended phone={phone} />);

    const element = wrapper.find('.phone-title');
    expect(element).toHaveLength(1);

    wrapper.unmount();
  });

  it('render desc', () => {
    const wrapper = shallow(<PhoneExtended phone={phone} />);

    const element = wrapper.find('.phone-desc');
    expect(element).toHaveLength(1);

    wrapper.unmount();
  });
});
