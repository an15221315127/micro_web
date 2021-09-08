const sum = require("../src/index")


test("add 1 + 2 to equal 3",()=>{
    expect(sum(1,2)).toBe(4)
})