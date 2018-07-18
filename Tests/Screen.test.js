import { shallow } from 'enzyme';
import React from 'react';
import Screen from '../App/Containers/Screen';

describe('Screen', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Screen />);
  });

  it('should render a Screen', () => {
    console.log('Wrapper: \n', wrapper.debug());
    expect(wrapper).toBeTruthy();
  });
});
