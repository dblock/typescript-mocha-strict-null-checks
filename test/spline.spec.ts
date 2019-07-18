import { expect } from 'chai';
import Spline from '../src/spline';

describe("Spline", () => {
  const spline = new Spline();

  it("is not reticulated by default", () => {
    expect(spline.reticulatedCount).to.eq(0);
  });

  it("is reticulated once with a parent", () => {
    expect(new Spline(spline).reticulatedCount).to.eq(1);
  });

  describe("with extracting assertNotNull", () => {
    function assertNotNull<T>(v: T | null): T {
      if (!v) throw new Error();
  
      return v;
    }
  
    it("can be reticulated", () => {
      const reticulatedSpline = assertNotNull(spline.reticulate());
      expect(reticulatedSpline.reticulatedCount).to.eq(1);
    });
  });

  describe("with expect inside the assert", () => {
    function assertNotNull<T>(v: T | null): T {
      expect(v).to.exist;
      if (!v) throw new Error();
  
      return v;
    }
  
    it("can be reticulated", () => {
      const reticulatedSpline = assertNotNull(spline.reticulate());
      expect(reticulatedSpline.reticulatedCount).to.eq(1);
    });
  });

  describe("allowing null", () => {
    it("can be reticulated", () => {
      const reticulatedSpline = spline.reticulate();
      expect(reticulatedSpline).to.exist;
      expect(reticulatedSpline!.reticulatedCount).to.eq(1);
    });
  });

  describe("allowing null without existence check", () => {
    it("can be reticulated", () => {
      const reticulatedSpline = spline.reticulate();
      expect(reticulatedSpline!.reticulatedCount).to.eq(1);
    });
  });

  describe("using a cast", () => {
    it("can be reticulated", () => {
      const reticulatedSpline = spline.reticulate() as Spline;
      expect(reticulatedSpline).to.exist;
      expect(reticulatedSpline.reticulatedCount).to.eq(1);
    });
  });
});