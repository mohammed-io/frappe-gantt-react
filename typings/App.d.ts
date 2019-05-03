import React from "react";
import { ViewMode } from "./ViewMode";
declare class App extends React.Component<any, any> {
    state: {
        mode: ViewMode;
    };
    componentDidMount(): void;
    render(): JSX.Element;
}
export default App;
