export default class Spline {
  public reticulatedCount: number;

  constructor(parent?: Spline) {
    this.reticulatedCount = parent && parent.reticulatedCount + 1 || 0;
  }
  
  public reticulate(): Spline | null {
    return null; // new Spline(this);
  }
}