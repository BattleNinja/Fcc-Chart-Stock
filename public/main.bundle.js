webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <app-chart></app-chart>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <app-panel></app-panel>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <app-input></app-input>\n      </div>\n    </div>\n  </div>\n</div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_socket_service__ = __webpack_require__("../../../../../src/app/services/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__ = __webpack_require__("../../../../ng-socket-io/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_socket_io__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(socketService, socket) {
        this.socketService = socketService;
        this.socket = socket;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.socketService.getAdd();
        this.socketService.initialData();
        this.socketService.getRemove();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_socket_service__["a" /* SocketService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__["Socket"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__["Socket"]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io_socket_io_module__ = __webpack_require__("../../../../ng-socket-io/socket-io.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_socket_service__ = __webpack_require__("../../../../../src/app/services/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_chart_chart_component__ = __webpack_require__("../../../../../src/app/components/chart/chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_input_input_component__ = __webpack_require__("../../../../../src/app/components/input/input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_d3_ng2_service__ = __webpack_require__("../../../../d3-ng2-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_panel_panel_component__ = __webpack_require__("../../../../../src/app/components/panel/panel.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var config = { url: '', options: {} };
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_chart_chart_component__["a" /* ChartComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_input_input_component__["a" /* InputComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_panel_panel_component__["a" /* PanelComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3_ng_socket_io_socket_io_module__["SocketIoModule"].forRoot(config),
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_socket_service__["a" /* SocketService */], __WEBPACK_IMPORTED_MODULE_9_d3_ng2_service__["a" /* D3Service */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/chart/chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".axis {\n  font: 10px sans-serif;\n}\n\n.axis path,\n.axis line {\n  fill: none;\n  stroke: #D4D8DA;\n  stroke-width: 2px;\n  shape-rendering: crispEdges;\n}\n\n.line {\n  fill: none;\n  stroke: #6F257F;\n  stroke-width: 5px;\n}\n\n.overlay {\n  fill: none;\n  pointer-events: all;\n}\n\n.focus circle {\n  /*fill: #F1F3F3;*/\n  /*stroke: #6F257F;*/\n  stroke-width: 10px;\n}\n\n.hover-line {\n  stroke: #6F257F;\n  stroke-width: 2px;\n  stroke-dasharray: 3, 3;\n}\n\n#tip {\n  color:#333;\n  background-color: rgba(0,0,0,0.2);\n  visibility: hidden;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/chart/chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"box\">\n\n  <div id=\"tip\">tooltip</div>\n</div>\n\n<br/>\n<br/>\n"

/***/ }),

/***/ "../../../../../src/app/components/chart/chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_socket_service__ = __webpack_require__("../../../../../src/app/services/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3__ = __webpack_require__("../../../../d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChartComponent = (function () {
    function ChartComponent(socketService) {
        this.socketService = socketService;
        this.datas = [];
    }
    ChartComponent.prototype.ngOnInit = function () {
        this.draw();
    };
    ChartComponent.prototype.draw = function () {
        var _this = this;
        // fetch data   - -- - - - -- - - - ---
        this.socketService.dataUpdate.subscribe(function (results) {
            // clear svg
            __WEBPACK_IMPORTED_MODULE_2_d3__["select"]('svg').remove();
            // generate svg
            var svg = __WEBPACK_IMPORTED_MODULE_2_d3__["select"]('#box')
                .append('svg')
                .attr('width', 960)
                .attr('height', 500);
            var margin = { top: 20, right: 20, bottom: 30, left: 50 };
            var width = +svg.attr('width') - margin.left - margin.right;
            var height = +svg.attr('height') - margin.top - margin.bottom;
            var g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
            var bisectDate = __WEBPACK_IMPORTED_MODULE_2_d3__["bisector"](function (d) { return d.date; }).left;
            var x = __WEBPACK_IMPORTED_MODULE_2_d3__["scaleTime"]()
                .rangeRound([0, width]);
            var y = __WEBPACK_IMPORTED_MODULE_2_d3__["scaleLinear"]()
                .rangeRound([height, 0]);
            _this.datas = results;
            var data = [];
            var datacombine = [];
            var stocks = [];
            var focusArray = [];
            var colors = ['#9e0142', '#5e4fa2', '#3288bd', '#66c2a5', '#abdda4', '#e6f598', '#ffffbf',
                '#fee08b', '#fdae61', '#f46d43', '#d53e4f'];
            for (var i = 0; i < results.length; i++) {
                stocks.push(results[i].stock);
                // process data
                var timestamp = results[i].msg.chart.result[0].timestamp;
                var closedata = results[i].msg.chart.result[0].indicators.quote[0].close;
                var formatedtime = timestamp.map(function (time) { return new Date(time * 1000); });
                var tem = [];
                for (var m = 0; m < closedata.length; m++) {
                    tem.push({ 'date': formatedtime[m], 'close': closedata[m] });
                    datacombine.push({ 'date': formatedtime[m], 'close': closedata[m] });
                }
                data.push(tem);
            }
            //            let timestamp = result[0].msg.chart.result[0].timestamp;
            //            const closedata = result[0].msg.chart.result[0].indicators.quote[0].close;
            //            const formatedtime = timestamp.map(time => new Date(time * 1000));
            //            let singledata = [];
            //            for (let i = 0; i < closedata.length; i++) {
            //                singledata.push({'date': formatedtime[i], 'close': closedata[i]});
            //            }
            var line = __WEBPACK_IMPORTED_MODULE_2_d3__["line"]()
                .x(function (d) {
                return x(d.date);
            })
                .y(function (d) {
                return y(d.close);
            });
            x.domain(__WEBPACK_IMPORTED_MODULE_2_d3__["extent"](datacombine, function (d) {
                return d.date;
            }));
            y.domain(__WEBPACK_IMPORTED_MODULE_2_d3__["extent"](datacombine, function (d) {
                return d.close;
            }));
            g.append('g')
                .attr('transform', 'translate(0,' + height + ')')
                .call(__WEBPACK_IMPORTED_MODULE_2_d3__["axisBottom"](x))
                .select('.domain');
            g.append('g')
                .call(__WEBPACK_IMPORTED_MODULE_2_d3__["axisLeft"](y))
                .append('text')
                .attr('fill', '#000')
                .attr('transform', 'rotate(-90)')
                .attr('y', 6)
                .attr('dy', '0.71em')
                .attr('text-anchor', 'end')
                .text('Price ($)');
            for (var i = 0; i < data.length; i++) {
                g.append('path')
                    .datum(data[i])
                    .attr('fill', 'none')
                    .attr('stroke', colors[i])
                    .attr('stroke-linejoin', 'round')
                    .attr('stroke-linecap', 'round')
                    .attr('stroke-width', 1.5)
                    .attr('d', line);
                focusArray[i] = g.append('g')
                    .attr('class', 'focus')
                    .style('display', 'none');
                focusArray[i].append('line')
                    .attr('class', 'x-hover-line hover-line')
                    .attr('y1', 0)
                    .attr('y2', height);
                focusArray[i].append('line')
                    .attr('class', 'y-hover-line hover-line')
                    .attr('x1', width)
                    .attr('x2', width);
                focusArray[i].append('circle')
                    .attr('r', 4)
                    .attr('stroke', colors[i])
                    .attr('fill', colors[i]);
            }
            var focusLine = g.append('g')
                .attr('class', 'focus')
                .style('display', 'none');
            focusLine.append('line')
                .attr('class', 'x-hover-line hover-line')
                .attr('y1', 0)
                .attr('y2', height);
            focusLine.append('line')
                .attr('class', 'y-hover-line hover-line')
                .attr('x1', width)
                .attr('x2', width);
            var rect = svg.append('rect')
                .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
                .attr('class', 'overlay')
                .attr('fill', 'transparent')
                .attr('width', width)
                .attr('height', height)
                .on('mouseover', function () {
                for (var i = 0; i < focusArray.length; i++) {
                    focusArray[i].style('display', null);
                }
                focusLine.style('display', null);
                tooltip.style('visibility', 'visible');
            })
                .on('mouseout', function () {
                for (var i = 0; i < focusArray.length; i++) {
                    focusArray[i].style('display', 'none');
                }
                focusLine.style('display', 'none');
                tooltip.style('visibility', 'hidden');
            })
                .on('mousemove', mousemove);
            function mousemove() {
                var x0 = x.invert(__WEBPACK_IMPORTED_MODULE_2_d3__["mouse"](this)[0]);
                var tooltipContent = '';
                for (var n = 0; n < focusArray.length; n++) {
                    var i = bisectDate(data[n], x0, 1), d0 = data[n][i - 1], d1 = data[n][i], d = x0 - d0.date > d1.date - x0 ? d1 : d0;
                    focusArray[n].attr('transform', 'translate(' + x(d.date) + ',' + y(d.close) + ')');
                    focusArray[n].select('.x-hover-line').attr('y2', 0);
                    focusArray[n].select('.y-hover-line').attr('x2', width);
                    tooltipContent += ('<span><strong style="color:' + colors[n] + '">' + stocks[n] +
                        '</strong>' + ':' + d.close.toFixed(3) + '</span><br/>');
                }
                focusLine.attr('transform', 'translate(' + x(x0) + ',' + 0 + ')');
                tooltip.style('top', (event.pageY - 10) + 'px');
                tooltip.style('left', (event.pageX + 20) + 'px');
                tooltip.html('<div>' + tooltipContent + '</div>');
            }
            //
            var tooltip = __WEBPACK_IMPORTED_MODULE_2_d3__["select"]('#tip')
                .style('position', 'absolute')
                .style('z-index', 1000)
                .style('visibility', 'hidden')
                .text('works');
        });
    };
    return ChartComponent;
}());
ChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-chart',
        template: __webpack_require__("../../../../../src/app/components/chart/chart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/chart/chart.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_socket_service__["a" /* SocketService */]) === "function" && _a || Object])
], ChartComponent);

var _a;
//# sourceMappingURL=chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/input/input.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/input/input.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n  <div class=\"row\">\n    <div class=\"col-sm-9\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter Stock Symbol\" ngModel name=\"stock\" required>\n    </div>\n    <div class=\"col-sm-3\">\n      <button class=\"btn btn-default btn-group-justified\" type=\"submit\">Find</button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/input/input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_socket_service__ = __webpack_require__("../../../../../src/app/services/socket.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputComponent = (function () {
    function InputComponent(socketService) {
        this.socketService = socketService;
    }
    InputComponent.prototype.ngOnInit = function () {
    };
    InputComponent.prototype.onSubmit = function (form) {
        var stockName = form.value.stock.replace(/\s/g, '');
        this.socketService.sendAdd(stockName);
        form.reset();
    };
    return InputComponent;
}());
InputComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-input',
        template: __webpack_require__("../../../../../src/app/components/input/input.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/input/input.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_socket_service__["a" /* SocketService */]) === "function" && _a || Object])
], InputComponent);

var _a;
//# sourceMappingURL=input.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/panel/panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".delet {\n  position:absolute;\n  top:15px;\n  left:10px\n}\n\n.col-sm-6{\n  position:relative;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/panel/panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-4 col-md-3 text-center\" *ngFor=\"let stock of stocks\">\n    <div class=\"thumbnail\">\n      <div class=\"caption\">\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <h3>{{stock}}</h3>\n\n          </div>\n          <div class=\"col-sm-6\">\n            <button class=\"btn btn-danger delet\" (click)=\"onDelet(stock)\">X</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/panel/panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_socket_service__ = __webpack_require__("../../../../../src/app/services/socket.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PanelComponent = (function () {
    function PanelComponent(socketService) {
        this.socketService = socketService;
    }
    PanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socketService.dataUpdate.subscribe(function (result) {
            _this.stocks = [];
            result.forEach(function (item) {
                _this.stocks.push(item.stock);
            });
            console.log(_this.stocks);
        });
    };
    PanelComponent.prototype.onDelet = function (stock) {
        console.log(stock);
        this.socketService.sendRemove(stock);
    };
    return PanelComponent;
}());
PanelComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-panel',
        template: __webpack_require__("../../../../../src/app/components/panel/panel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/panel/panel.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_socket_service__["a" /* SocketService */]) === "function" && _a || Object])
], PanelComponent);

var _a;
//# sourceMappingURL=panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__ = __webpack_require__("../../../../ng-socket-io/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SocketService = (function () {
    function SocketService(socket, http) {
        this.socket = socket;
        this.http = http;
        this.stocks = [];
        this.dataUpdate = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
    }
    // add a new stock - - -- - - ------ - - - -- - - - - - - --- - -
    SocketService.prototype.getAdd = function () {
        var _this = this;
        this.socket
            .fromEvent('add')
            .map(function (data) { return data; })
            .subscribe(function (data) {
            _this.stocks.push({ stock: data.stock, msg: data.msg });
            console.log(_this.stocks);
            _this.dataUpdate.next(_this.stocks);
        });
    };
    SocketService.prototype.sendAdd = function (msg) {
        this.socket
            .emit('add', msg);
    };
    // delete a stock - - -- - - ------ - - - -- - - - - - - --- - -
    SocketService.prototype.sendRemove = function (msg) {
        this.socket
            .emit('remove', msg);
    };
    SocketService.prototype.getRemove = function () {
        var _this = this;
        this.socket
            .fromEvent('remove')
            .map(function (data) { return data.msg; })
            .subscribe(function (stock) {
            console.log(stock, 'has been removed');
            _this.stocks = _this.stocks.filter(function (item) {
                return item.stock !== stock;
            });
            _this.dataUpdate.next(_this.stocks);
        });
    };
    // initialize data - - -- - - ------ - - - -- - - - - - - --- - -
    SocketService.prototype.initialData = function () {
        var _this = this;
        var url = '/api/initialize';
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        this.http.get(url, { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            _this.stocks = data;
            console.log(_this.stocks);
            _this.dataUpdate.next(_this.stocks);
        });
    };
    return SocketService;
}());
SocketService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__["Socket"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__["Socket"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */]) === "function" && _b || Object])
], SocketService);

var _a, _b;
//# sourceMappingURL=socket.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map