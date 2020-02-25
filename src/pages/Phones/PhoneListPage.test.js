import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import jest from 'jest-mock';

import PhoneListPage from './PhoneListPage';

const defaultFn = jest.fn();

const props = {
  getAllPhones: defaultFn,
  setPhone: defaultFn,
  phones: [],
};

const phones = [
  {
    id: '1',
    image:
      'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6316/6316066_sd.jpg;maxHeight=640;maxWidth=550',
    title: 'iPhone X',
    description:
      'iPhone X features an all-screen design with a 5.8" Super Retina HD display with HDR and True Tone.¹ Designed with durable glass and a surgical-grade stainless steel band. Charges wirelessly.² Resists water and dust.³ 12.0MP dual cameras with dual optical image stabilization for great low-light photos. TrueDepth camera with Portrait selfies and new Portrait Lighting.⁴ Face ID lets you unlock and use Apple Pay with just a glance. Powered by A11 Bionic, the powerful and smart chip. Supports augmented reality experiences in games and apps. With iPhone X, the next era of iPhone has begun. SIM included in the box, not required for activation, will not lock to any carrier upon activation.',
    color: 'Silver',
    price: '$699.99',
    seller: 'Apple',
  },
  {
    id: '2',
    image:
      'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6316/6316066_sd.jpg;maxHeight=640;maxWidth=550',
    title: 'iPhone X',
    description:
      'iPhone X features an all-screen design with a 5.8" Super Retina HD display with HDR and True Tone.¹ Designed with durable glass and a surgical-grade stainless steel band. Charges wirelessly.² Resists water and dust.³ 12.0MP dual cameras with dual optical image stabilization for great low-light photos. TrueDepth camera with Portrait selfies and new Portrait Lighting.⁴ Face ID lets you unlock and use Apple Pay with just a glance. Powered by A11 Bionic, the powerful and smart chip. Supports augmented reality experiences in games and apps. With iPhone X, the next era of iPhone has begun. SIM included in the box, not required for activation, will not lock to any carrier upon activation.',
    color: 'Silver',
    price: '$699.99',
    seller: 'Apple',
  },
];

describe('Phone extended component', () => {
  it('PhoneListPage render correctly', () => {
    const component = shallow(<PhoneListPage {...props} />);

    expect(component).toMatchSnapshot();
    component.unmount();
  });

  it('render container', () => {
    const wrapper = mount(<PhoneListPage {...props} />);

    const element = wrapper.find('#phone-list-container');
    expect(element).toHaveLength(1);

    wrapper.unmount();
  });

  it('render loading', () => {
    const wrapper = mount(<PhoneListPage {...props} loading />);

    const element = wrapper.find('.loading-container');
    expect(element).toHaveLength(1);

    wrapper.unmount();
  });

  it('render loading with phones', () => {
    const wrapper = mount(<PhoneListPage {...props} loading phones={phones} />);

    const element = wrapper.find('.loading-container');
    expect(element).toHaveLength(1);

    wrapper.unmount();
  });

  it('render the phones list', () => {
    const wrapper = shallow(<PhoneListPage {...props} />);

    const element = wrapper.find('.phone-list');
    expect(element).toHaveLength(1);
    wrapper.unmount();
  });

  it('render two phones', () => {
    const wrapper = render(
      <Router>
        <PhoneListPage {...props} phones={phones} />
      </Router>,
    );

    const element = wrapper.find('.phone-list > .phone');
    expect(element).toHaveLength(2);
  });

  it('render no phones', () => {
    const wrapper = shallow(<PhoneListPage {...props} />);

    const element = wrapper.find('.phone');
    expect(element).toHaveLength(0);

    wrapper.unmount();
  });
});
