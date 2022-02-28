import React from "react";
import { shallow } from 'enzyme';
import '@testing-library/jest-dom'
import ComponentOne from "../../components/ComponentOne/ComponentOne";
import {createSerializer} from 'enzyme-to-json';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({mode:'deep'}))



describe('tests in <ComponentOne />', () => {
      test('<ComponentOne /> it renders well', () => {
        const title = "Hi there! I'm a component!";
        const componentOne = shallow(<ComponentOne title={title} />);
        expect(componentOne).toMatchSnapshot();
      });
    });