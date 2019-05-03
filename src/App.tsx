"use strict";
import React from "react";

import { FrappeGantt } from "./FrappeGantt";
import { Task } from "./Task";
import { ViewMode } from "./ViewMode";

const tasks = [
  {
    id: "Task 1",
    name: "Redesign website",
    start: "2016-12-28",
    end: "2016-12-31",
    progress: 10,
    dependencies: ""
  },
  {
    id: "Task 2",
    name: "Redesign website",
    start: "2016-12-28",
    end: "2016-12-31",
    progress: 20,
    dependencies: "Task 1"
  },
  {
    id: "Task 3",
    name: "Redesign website",
    start: "2016-12-28",
    end: "2016-12-31",
    progress: 0,
    dependencies: "Task 2, Task 1"
  }
] as Task[];

class App extends React.Component<any, any> {
  state = { mode: ViewMode.Month };

  componentDidMount() {
    console.log("test");

    setTimeout(() => {
      console.log("Setting State!");
      this.setState({ mode: ViewMode.Week });

      setTimeout(() => {
        console.log("Setting State!");
        this.setState({ mode: ViewMode.HalfDay });
      }, 3000);
    }, 3000);
  }

  render() {
    return (
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
    );
  }
}

export default App;
