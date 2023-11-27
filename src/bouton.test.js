import Bouton from './bouton';
import {render,screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('test un bouton',async function (){
render(
    <Bouton/>
)

let test = await userEvent.click(screen.getByText('Increment'))
let result = screen.getByText('You clicked 1 times')

expect(result).toBeInTheDocument()


})