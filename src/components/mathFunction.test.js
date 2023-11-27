import {add} from './mathFunction';

import { render, screen } from '@testing-library/react';

it('testComposant', ()=>{
    const result = add(1,2);
     

    expect(result ).toBe(3)
})