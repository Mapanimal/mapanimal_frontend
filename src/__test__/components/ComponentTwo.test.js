import React from "react";
import { shallow } from 'enzyme';
import '@testing-library/jest-dom'
import ComponentOne from "../../components/ComponentTwo/ComponentTwo";
import {createSerializer} from 'enzyme-to-json';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({mode:'deep'}))



describe('tests in <ComponentTwo />', () => {
      test('<ComponentTwo /> it renders well', () => {
        const title = "Hi there! I'm another component!";
        const componentTwo = shallow(<ComponentOne title={title}/>);
        expect(componentTwo).toMatchSnapshot();
      });
    });