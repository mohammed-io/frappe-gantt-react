"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Task = /** @class */ (function () {
    function Task(options) {
        if (options === void 0) { options = {}; }
        this._dependencies = [];
        this.id = "";
        this.name = "";
        this.start = "";
        this.end = "";
        /**
         * Progress in percentage
         */
        this.progress = 0;
        Object.assign(this, options);
    }
    Task.prototype.setDependencies = function (value) {
        this._dependencies = value;
    };
    Object.defineProperty(Task.prototype, "dependencies", {
        get: function () {
            return this._dependencies.join(", ");
        },
        set: function (value) {
            this._dependencies = value.split(",").map(function (d) { return d.trim(); });
        },
        enumerable: true,
        configurable: true
    });
    return Task;
}());
exports.Task = Task;
