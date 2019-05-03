"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var FrappeGantt_1 = require("./FrappeGantt");
var ViewMode_1 = require("./ViewMode");
var tasks = [
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
];
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { mode: ViewMode_1.ViewMode.Month };
        return _this;
    }
    App.prototype.componentDidMount = function () {
        var _this = this;
        console.log("test");
        setTimeout(function () {
            console.log("Setting State!");
            _this.setState({ mode: ViewMode_1.ViewMode.Week });
            setTimeout(function () {
                console.log("Setting State!");
                _this.setState({ mode: ViewMode_1.ViewMode.HalfDay });
            }, 3000);
        }, 3000);
    };
    App.prototype.render = function () {
        return (<div>
        <FrappeGantt_1.FrappeGantt tasks={tasks} viewMode={this.state.mode}/>
      </div>);
    };
    return App;
}(react_1.default.Component));
exports.default = App;
