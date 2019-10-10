describe('SCRABBLE', function(){
    it('returns 0 when string is []', function(){
        var string = []
        var result = getScore(string)
        expect(result).toEqual(0)
    })
    it('returns 0 when string is empty', function(){
        var string =''
        var result = getScore(string)
        expect(result).toEqual(0)
    })
    it('returns 0 when string includes line breaks', function(){
        var string = '\t\n'
        var result = getScore(string)
        expect(result).toEqual(0)
    })
    it('returns 1 when string is a', function(){
        var string = 'a'
        var result = getScore(string)
        expect(result).toEqual(1)
    })
    it('returns 4 when string is f', function(){
        var string ='f'
        var result = getScore(string)
        expect(result).toEqual(4)
    })
    it('returns 6 when string is street', function(){
        var string = 'street'
        var result = getScore(string)
        expect(result).toEqual(6)
    })
    it('returns 22 when word is quirky', function(){
        var string = 'quirky'
        var result = getScore(string)
        expect(result).toEqual(22)
    })
    it('returns 41 when string is OXYPHENBUTAZONE', function(){
        var string = 'OXYPHENBUTAZONE'
        var result = getScore(string)
        expect(result).toEqual(41)
    })
})