import React from "react";
import { Moment } from "moment";
import { Task } from "./Task";
import { ViewMode } from "./ViewMode";
export declare type FrappeGanttProps = {
    tasks: Task[];
} & Partial<FrappeGanttOptionalProps>;
export declare type FrappeGanttOptionalProps = Readonly<typeof frappeGanttDefaultProps>;
declare const frappeGanttDefaultProps: {
    viewMode: ViewMode;
    onTasksChange: (tasks: Task[]) => void;
    onClick: (task: Task) => void;
    onDateChange: (task: Task, start: Moment, end: Moment) => void;
    onProgressChange: (task: Task, progress: number) => void;
    onViewChange: (mode: ViewMode) => void;
};
export declare class FrappeGantt extends React.Component<FrappeGanttProps, any> {
    private _target;
    private _svg;
    private _gantt;
    static defaultProps: {
        viewMode: ViewMode;
        onTasksChange: (tasks: Task[]) => void;
        onClick: (task: Task) => void;
        onDateChange: (task: Task, start: Moment, end: Moment) => void;
        onProgressChange: (task: Task, progress: number) => void;
        onViewChange: (mode: ViewMode) => void;
    };
    state: {
        viewMode: null;
    };
    static getDerivedStateFromProps(nextProps: FrappeGanttProps, state: any): {
        viewMode: ViewMode | undefined;
    };
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
