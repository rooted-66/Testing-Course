
const {parse, stringify} = require('../query');

describe('The query function', ()=>{
    describe('The parse function', ()=>{
        it('Should return an object of all query params when a query string is passed to it.', ()=>{
            const query = '?by=kati-frantz&popular=true&category=nodejs';
            const actual = parse(query);
            const expectation = {
                by: 'kati-frantz',
                popular: 'true',
                category: 'nodejs'
            }
            expect(actual).toEqual(expectation);
        });

        it('Should return an object:{number:3} when number=3 is passed into it', ()=>{
            expect(parse('number=3')).toEqual({number: '3'});
        });
    });

    describe('The stringify function', ()=>{
        it('Should return query string when an object is passed into it', ()=>{
            const object = {
                by: 'kati-frantz',
                popular: 'true',
                category: 'nodejs'
            }
            const actual = stringify(object);
            const expectation = 'by=kati-frantz&popular=true&category=nodejs';
            
            expect(actual).toBe(expectation);
        });

        it('Should eliminate all undefined and null values', ()=>{
            const object = {
                by: 'kati-frantz',
                popular: 'true',
                category: 'nodejs',
                student: null,
                teacher: undefined
            }
            const actual = stringify(object);
            const expectation = 'by=kati-frantz&popular=true&category=nodejs';
            expect(actual).toBe(expectation);
        });
    });
});
