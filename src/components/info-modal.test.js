import React from 'react';
import {shallow} from 'enzyme';
import {toggleInfoModal} from '../actions'
import {InfoModal} from './info-modal';

describe('<InfoModal />', () => {
    it('Renders without crashing', () => {
        shallow(<InfoModal />);
    });

    it('Fires the onClose callback when the close button is clicked', () => {
        const callback = jest.fn();
        const wrapper = shallow(<InfoModal dispatch={callback} />);
        const instance =  wrapper.instance();
        instance.hide({preventDefault(){} });
        expect(callback).toHaveBeenCalledWith(toggleInfoModal());
    });
});