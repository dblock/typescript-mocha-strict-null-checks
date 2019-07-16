import { assert, expect } from 'chai';
import Spline from '../src/spline';

describe("Spline", () => {
  const spline = new Spline();

  it("is not reticulated by default", () => {
    expect(spline.reticulatedCount).to.eq(0);
  });

  it("is reticulated once with a parent", () => {
    expect(new Spline(spline).reticulatedCount).to.eq(1);
  });

  it("always can be reticulated again", () => {
    const reticulatedSpline = spline.reticulate();
    expect(reticulatedSpline).to.not.be.null;
    expect(reticulatedSpline.reticulatedCount).to.eq(1);
  });
});