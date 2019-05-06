describe("fizzBuzz", function(){
    
    beforeEach(function(){
        fizzbuzz = new fizzBuzz();
    });
    
    describe("fizzBuzz test", function() {
        it("should return FizzBuzz", function() {
            var fbResult = fizzBuzz(15);
            expect(fbResult).toBe("FizzBuzz");
        });
        it("should return Fizz", function() {
            var fbResult = fizzBuzz(9);
            expect(fbResult).toBe("Fizz");
        });
        it("should return Buzz", function() {
            var fbResult = fizzBuzz(10);
            expect(fbResult).toBe("Buzz");
        });
        it("should return the number", function() {
            var fbResult = fizzBuzz(2);
            expect(fbResult).toBe(2);
        });
    });
});