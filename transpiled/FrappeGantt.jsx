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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var frappe_gantt_1 = __importDefault(require("frappe-gantt"));
var ViewMode_1 = require("./ViewMode");
var frappeGanttDefaultProps = {
    viewMode: ViewMode_1.ViewMode.Day,
    onTasksChange: function (tasks) { },
    onClick: function (task) { },
    onDateChange: function (task, start, end) { },
    onProgressChange: function (task, progress) { },
    onViewChange: function (mode) { }
};
var FrappeGantt = /** @class */ (function (_super) {
    __extends(FrappeGantt, _super);
    function FrappeGantt() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._target = react_1.createRef();
        _this._svg = react_1.createRef();
        _this._gantt = null;
        _this.state = {
            viewMode: null
        };
        return _this;
    }
    FrappeGantt.getDerivedStateFromProps = function (nextProps, state) {
        return {
            viewMode: nextProps.viewMode
        };
    };
    FrappeGantt.prototype.componentDidUpdate = function () {
        if (this._gantt) {
            this._gantt.change_view_mode(this.state.viewMode);
        }
    };
    FrappeGantt.prototype.componentDidMount = function () {
        var _this = this;
        this._gantt = new frappe_gantt_1.default(this._svg.current, this.props.tasks, {
            on_click: this.props.onClick,
            on_view_change: this.props.onViewChange,
            on_progress_change: function (task, progress) {
                _this.props.onProgressChange(task, progress);
                _this.props.onTasksChange(_this.props.tasks);
            },
            on_date_change: function (task, start, end) {
                _this.props.onDateChange(task, start, end);
                _this.props.onTasksChange(_this.props.tasks);
            }
        });
        if (this._gantt) {
            this._gantt.change_view_mode(this.state.viewMode);
        }
        var midOfSvg = this._svg.current.clientWidth * 0.5;
        this._target.current.scrollLeft = midOfSvg;
    };
    FrappeGantt.prototype.render = function () {
        return (<div style={{ overflow: "scroll" }} ref={this._target}>
        <svg ref={this._svg} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"/>
      </div>);
    };
    FrappeGantt.defaultProps = frappeGanttDefaultProps;
    return FrappeGantt;
}(react_1.default.Component));
exports.FrappeGantt = FrappeGantt;
