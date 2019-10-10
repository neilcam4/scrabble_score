describe('Scrabble Solver', function(){
    it('method retuns 0 when string is empty', function(){
        var string = ''
        var score = getScore(string)
        expect(score).toEqual(0)
    })
    it('returns 0 when nil entered', function(){
        var string = [] 
        var score = getScore(string)
        expect(score).toEqual(0)
    })
    it("should return 1 when 'a' is the string", function(){
        var string ='a'
        var score = getScore(string)
        expect(score).toEqual(1)
    } )
    it('should return 4 when string is f', function(){
        var string = 'f'
        var score = getScore(string)
        expect(score).toEqual(4)
    })
    it("should return 6 when string is 'street'", function(){
        var string = "street"
        var score = getScore(string)
        expect(score).toEqual(6)
    })
    it("should return 22 when string is 'quirky'", function(){
        var string = 'quirky'
        var score = getScore(string)
        expect(score).toEqual(22)
    })
})