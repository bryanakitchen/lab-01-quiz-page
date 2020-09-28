// IMPORT MODULES under test here:
import { countsAsYes } from '../counts-as-yes.js';

const test = QUnit.test;

test('countsAsYes should take yes-like inputs and return true', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const yes = 'yeah';
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = countsAsYes(yes);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('countsAsYes should take no-like inputs and return false', (expect) => {

    const no = 'nope';
    const expected = false;
    
    const actual = countsAsYes(no);

    expect.equal(actual, expected);
});