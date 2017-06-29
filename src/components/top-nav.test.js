import React from 'react';
import {shallow} from 'enzyme';
import {toggleInfoModal, newGame, NEW_GAME} from '../actions'
import {TopNav} from './top-nav';

describe('<TopNav />', () => {
    it('Renders without crashing', () => {
        shallow(<TopNav />);
    });

    it('Fires the toggleInfoModal callback when the info button is clicked', () => {
        const callback = jest.fn();
        const wrapper = shallow(<TopNav dispatch={callback} />);
        const instance =  wrapper.instance();
        instance.toggleInfoModal({preventDefault(){} });
        expect(callback).toHaveBeenCalledWith(toggleInfoModal());
    });

    it('Fires the newGame callback when the info button is clicked', () => {
        const callback = jest.fn();
        const wrapper = shallow(<TopNav dispatch={callback} />);
        const instance =  wrapper.instance();
        instance.newGame({preventDefault(){} });
        expect(callback).toHaveBeenCalled();
        expect(typeof callback.mock.calls[0][0].correctAnswer).toEqual("number");
        expect(callback.mock.calls[0][0].type).toEqual(NEW_GAME);
    });
});