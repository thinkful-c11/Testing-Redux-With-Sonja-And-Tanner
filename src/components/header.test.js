import React from 'react';
import {shallow} from 'enzyme';
import {toggleInfoModal, TOGGLE_INFO_MODAL} from '../actions';

import {Header} from './header';
import InfoModal from './info-modal';

describe('<Header />', () => {
    it('Renders without crashing', () => {
        shallow(<Header />);
    });

    it('Hides the info modal initially', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find(InfoModal).exists()).toEqual(false);
    });

    it('Should render the info modal when toggled', () => {
        const wrapper = shallow(<Header showInfoModal={true}/>);
        expect(wrapper.find(InfoModal).exists()).toEqual(true);
    });

});