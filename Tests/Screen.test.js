import { shallow } from 'enzyme';
import React from 'react';
import Screen from '../App/Containers/Screen';

describe('Screen', () => {
  let wrapper;
  let screen;

  beforeEach(() => {
    wrapper = shallow(<Screen />);
    screen = wrapper
      .dive()
      .dive()
      .dive()
      .dive();
  });

  it('should render a Screen', () => {
    console.log('Wrapper: \n', wrapper.debug());
    console.log('Screen: \n', screen.debug());
    expect(wrapper).toBeTruthy();
  });

  it('should increment counter when Increment Button clicked', () => {
    const incrementButton = screen.find('[accessibilityLabel="IncrementButton"]');
    incrementButton.simulate('press');
    wrapper.update();
    const expectedResult = 1;
    const actualResult = wrapper.props().counter;
    expect(actualResult).toEqual(expectedResult);
  });

  it('should decrement counter when Decrement Button clicked', () => {
    const incrementButton = screen.find('[accessibilityLabel="DecrementButton"]');
    incrementButton.simulate('press');
    wrapper.update();
    const expectedResult = -1;
    const actualResult = wrapper.props().counter;
    expect(actualResult).toEqual(expectedResult);
  });
});
