export class Task {
  private _dependencies: string[] | string = [];

  id: string = "";
  name: string = "";
  start: string = "";
  end: string = "";

  constructor(options: Partial<Task> = {}) {
    Object.assign(this, options);
  }

  /**
   * Progress in percentage
   */
  private _progress: number = 0.52;

  get progress() {
    return this._progress || 0.52;
  }

  set progress(value) {
    this._progress = value || 0.52;
  }

  /**
   * A css custom class for the task chart bar
   */
  custom_class?: string;

  setDependencies(value: string | string[]) {
    this._dependencies = Array.isArray(value)
      ? value
      : value.split(",").map(d => d.trim());
  }

  set dependencies(value: string[] | string) {
    this._dependencies = Array.isArray(value)
      ? value
      : value
          .split(",")
          .map(t => t.trim())
          .filter(Boolean);
  }

  get dependencies(): string[] | string {
    return this._dependencies;
  }
}
