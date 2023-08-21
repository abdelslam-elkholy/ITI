//problem 1
//input: "hamada" ===> output: HAMADA. expect
//input: 12 ===> output: error.   expect

const expect = require("chai").expect;

const capitalizeText = (input) => {
  if (typeof input !== "string") {
    throw new TypeError("parameter should be string");
  }
  return input.toUpperCase();
};

describe("Capitalizing Strings Function", () => {
  it("should return a string", () => {
    expect(capitalizeText("hamada")).to.a("string");
  });

  it("should passed a param of type a string and Capitalize it", () => {
    expect(capitalizeText("hamada")).to.equal("HAMADA");
  });

  it("should throw error if it passed a param of type is not a string", () => {
    expect(() => {
      capitalizeText(2).to.throw();
    });
  });
});

//test that the function takes a string  it will return a string

//test that the function takes a string and return it after capitalize it

//test if the function takes number it will throw type error says parameter should be string

//problem 2

// input number 3 ==> output should be [0,1,2]

const createArray = (number) => {
  const myArray = Array.from(Array(number).keys());
  return myArray;
};

describe("Convert To Array", function () {
  it("should return a array", () => {
    expect(createArray(3)).to.a("array");
  });

  it("ishould return a array with length 3", () => {
    expect(createArray(3)).to.have.lengthOf(3);
  });
});

//test that the return value of type array
//test if we pass 3 it will return array of length 3 and test it's include 1
//try to delay the testing process 5 seconds
//try to use different styles (expect , should , assert)
//after finishing your test process try to  run it on a browser//bonus

//createArray(3)>>>>>[0,1,2]

//createArray(5)>>>[0,1,2,3,4]
