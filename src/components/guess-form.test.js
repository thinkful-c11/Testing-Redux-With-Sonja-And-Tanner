import React from 'react';
import {shallow} from 'enzyme';
import {makeGuess} from '../actions'
import {GuessForm} from './guess-form';

describe('<InfoModal />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessForm />);
    });

    it('Fires the onClose callback when the close button is clicked', () => {
        const callback = jest.fn();
        const wrapper = shallow(<GuessForm dispatch={callback} />);
        const instance =  wrapper.instance();
        instance.input = {value: "34"};
        instance.submitGuess({preventDefault(){} });
        expect(callback).toHaveBeenCalledWith(makeGuess(instance.input.value));
    });
});