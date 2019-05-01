
const {add} = require('./../index');

describe('The ADD function tests', ()=>{
    it('Should return 11 for rguments 5 and 6', ()=>{
        const actual = add(5, 6);
        const expectation = 11;
    
        expect(actual).toBe(expectation);
    });

    it('Should throw an error if arguments are not passed in', ()=>{
        expect(() => {
            add()
        }).toThrow()
    });
});
