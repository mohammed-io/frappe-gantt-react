export class Task {
  private _dependencies: string[] = [];

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
  progress: number = 0;

  /**
   * A css custom class for the task chart bar
   */
  custom_class?: string;

  setDependencies(value: string[]) {
    this._dependencies = value;
  }

  set dependencies(value: string) {
    this._dependencies = value.split(",").map(d => d.trim());
  }

  get dependencies(): string {
    return this._dependencies.join(", ");
  }
}
