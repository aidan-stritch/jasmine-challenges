describe("whatCanIDrink", function(){
    
    beforeEach(function(){
        drink = new whatCanIDrink();
    });
    
    describe("drink age tests", function() {
        it("should return incorrect age", function() {
            var result = whatCanIDrink(-1);
            expect(result).toBe("Sorry, I can't tell what drink because that age is incorrect!");
        });
        it("should return drink toddy", function() {
            var result = whatCanIDrink(13);
            expect(result).toBe("Drink Toddy");
        });
        it("should return drink coke", function() {
            var result = whatCanIDrink(17);
            expect(result).toBe("Drink Coke");
        });
        it("should return drink beer", function() {
            var result = whatCanIDrink(20);
            expect(result).toBe("Drink Beer");
        });
        it("should return drink whisky", function() {
            var result = whatCanIDrink(129);
            expect(result).toBe("Drink Whisky");
        });
        it("should return incorrect age", function() {
            var result = whatCanIDrink(140);
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
    });
});