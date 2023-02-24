const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
  
  it("should return a hash of the input data when partition key is not specified", () => {
    const event = {
      id: 'abc123',
      data: {
        message: 'hello world',
      },
    };
    const expectedPartitionKey = '4e4d07efc3e3d3e1fa3a9b9a1da28c46edfc5cde24a666d26c813e2e73bfb5e5';

    expect(deterministicPartitionKey(event)).toBe(expectedPartitionKey);
  });
  
  it("should return the partition key when it is specified",() =>{
    const event = {
      id: 'abc123',
      data: {
        message: 'hello world',
      },
      partitionKey: 'my-custom-partition-key',
    };
    const expectedPartitionKey = 'my-custom-partition-key';

    expect(deterministicPartitionKey(event)).toBe(expectedPartitionKey);
  });
  
  it("should return a hash of the input string when input is a string",() => {
      const input = 'hello world';
    const expectedPartitionKey = 'd8612c68f562f232f7a5a5b5e7a1d465a5a7de5f3f3d7b83cc651ef5a7f34c63';

    expect(deterministicPartitionKey(input)).toBe(expectedPartitionKey);
   });
});
