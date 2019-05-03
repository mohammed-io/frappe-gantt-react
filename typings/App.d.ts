import React from "react";
import "./App.css";
import { ViewMode } from "./FrappeGantt";
declare class App extends React.Component<any, any> {
    state: {
        mode: ViewMode;
    };
    componentDidMount(): void;
    render(): JSX.Element;
}
export default App;
