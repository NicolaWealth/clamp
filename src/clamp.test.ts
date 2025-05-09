import assert from "assert";
import {clamp} from "./clamp";

describe("clamp", () => {
  it("basics", () => {
    assert.strictEqual(clamp(5,1,10,0),5);
    assert.strictEqual(clamp(15,1,10,0),10);
    assert.strictEqual(clamp(0,1,10,0),1);
    assert.strictEqual(clamp(undefined,1,10,5),5);
    assert.strictEqual(clamp(undefined,1,10,15),10);
    assert.strictEqual(clamp(undefined,1,10,0),1);
    assert.strictEqual(clamp(5,4,5,0),5);
    assert.strictEqual(clamp(4,4,5,0),4);
  });
});
