# Frappé Gantt React Wrapper

It's a React Component, a Wrapper for the awesome [Gantt chart library](https://github.com/frappe/gantt) from Frappé

For the live demo, you can check their live demo [here](https://frappe.github.io/gantt/)

## Install

> npm install frappe-gantt-react

or

> yarn add frappe-gantt-react

## Usage

Import it to your project

Using ES6 modules

`import { FrappeGantt } from 'frappe-gantt-react`

Or using CommonJS

`const { FrappeGantt } = require('frappe-gantt-react')`

Then you can use it in your react app:

    class App extends React.Component {

        ...

        render() {

            return (
                ...
                <div>
                    <FrappeGantt
                        tasks={tasks}
                        viewMode={this.state.mode}
                        onClick={task => console.log(task)}
                        onDateChange={(task, start, end) => console.log(task, start, end)}
                        onProgressChange={(task, progress) => console.log(task, progress)}
                        onTasksChange={tasks => console.log(tasks)}
                    />
                </div>
                ...

            )

        }

    }

## The API

### The component `props`

|      Property      | Description                                                                                         |
| :----------------: | :-------------------------------------------------------------------------------------------------- |
|      `tasks`       | Accepts array of class `Task`                                                                       |
|  `onTasksChange`   | Accepts a `(tasks: Task[]) => void`, where `tasks` is the new copy —manipulated— of array of tasks  |
|     `onClick`      | Accepts a `(task: Task) => void`, where `task` is the clicked task                                  |
|   `onDateChange`   | Accepts a `(task: Task, start: Moment, end: Moment) => void`, both start and end are Moment objects |
| `onProgressChange` | Accepts a `(task: Task, progress: number) => void`                                                  |
|   `onViewChange`   | Accepts a `(mode: ViewMode) => void`                                                                |
