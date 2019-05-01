
const {findUserById, findUserByEmail} = require('../async')

describe('The async tests', () => {
    describe('The findUserById function', () => {
        //using promise, returning a promise
        it('Should return found user data by id', () => {
            return findUserById(1).then(result => { 
                expect(result.user.name).toBe('icando');
            });
        });
        it('Should throw an error if user was not found', () => {
            return findUserById(364).catch(error => {
                expect(error.message).toBe('User with id: 364 was not found.');
            })
        });
        //using async and await instead of promise
        it('Should return user found by id', async () => {
            const result = await findUserById(1);
            expect(result.user.name).toBe('icando');
        });
    });
    describe('The findUserByEmail function', () =>{
        //using promise, returning a promise
        it('Should return found user data by email', () => {
            return findUserByEmail('icando@gmail.com').then(result => {
                expect(result.user.id).toBe(1);
                expect(result.user.email).toBe('icando@gmail.com')
            });
        });
        it('Should throw an error if user was not found by eamil', () => {
            return findUserByEmail('hecando@gmail.com').catch(error => {
                expect(error.message).toBe('User with email: hecando@gmail.com was not found.');
            });
        });
        // it('Should throw an error if user was not found by email', async () => {
        //     try{
        //         await findUserByEmail('bahd@me.com');
        //         assert.fail('EXPECTED_ERROR');
        //     }catch (error){
        //         if(error.message === 'EXPECTED_ERROR'){
        //             throw error;
        //         }
        //         expect(error.message).toBe('User with email: bahd@me.com was not found.');
        //     }
        // })
        it('Should return user found by email', async () => {
            const result = await findUserByEmail('icando@gmail.com');
            expect(result.user.name).toBe('icando');
        })
    });
});