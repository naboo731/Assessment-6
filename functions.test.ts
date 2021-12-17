const {shuffleArray} = require('./utils')


describe('shuffleArray should', () => {
    test('shuffleArray should return an array', () => {
        let argArr = [1,2,3,4,5,6,7,8]
        let returnArr = shuffleArray(argArr)
        expect(typeof returnArr).toEqual('array')
    }), 
    test('shuffleArray return length is equal to argument length', () => {
        let argArr = [1,2,3,4,5,6,7,8]
        let returnArr = shuffleArray(argArr)
        expect(returnArr.length).toEqual(argArr.length)
    })
})