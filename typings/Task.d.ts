export declare class Task {
    private _dependencies;
    id: string;
    name: string;
    start: string;
    end: string;
    constructor(options?: Partial<Task>);
    /**
     * Progress in percentage
     */
    progress: number;
    /**
     * A css custom class for the task chart bar
     */
    custom_class?: string;
    setDependencies(value: string[]): void;
    dependencies: string;
}
