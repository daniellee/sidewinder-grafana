'use strict';

System.register(['app/plugins/sdk', './css/query-editor.css!'], function (_export, _context) {
  "use strict";

  var QueryCtrl, _createClass, SidewinderDatasourceQueryCtrl;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [function (_appPluginsSdk) {
      QueryCtrl = _appPluginsSdk.QueryCtrl;
    }, function (_cssQueryEditorCss) {}],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _export('SidewinderDatasourceQueryCtrl', SidewinderDatasourceQueryCtrl = function (_QueryCtrl) {
        _inherits(SidewinderDatasourceQueryCtrl, _QueryCtrl);

        function SidewinderDatasourceQueryCtrl($scope, $injector) {
          _classCallCheck(this, SidewinderDatasourceQueryCtrl);

          var _this = _possibleConstructorReturn(this, (SidewinderDatasourceQueryCtrl.__proto__ || Object.getPrototypeOf(SidewinderDatasourceQueryCtrl)).call(this, $scope, $injector));

          _this.scope = $scope;
          _this.target.target = _this.target.target;
          _this.target.type = 'timeserie';
          if (!_this.target.raw) {
            _this.target.raw = '';
          }
          if (!_this.target.filters) {
            _this.target.filters = [];
          }
          if (!_this.target.aggregator) {
            _this.target.aggregator = { name: "none", args: [{ index: 0, type: "int", value: 10 }], unit: "secs" };
          }
          return _this;
        }

        _createClass(SidewinderDatasourceQueryCtrl, [{
          key: 'toggleEditorMode',
          value: function toggleEditorMode() {
            this.target.rawQuery = !this.target.rawQuery;
          }
        }, {
          key: 'onChangeInternal',
          value: function onChangeInternal() {
            this.panelCtrl.refresh(); // Asks the panel to refresh data.
          }
        }, {
          key: 'getMeasurementOptions',
          value: function getMeasurementOptions() {
            return this.datasource.metricFindQuery(this.target);
          }
        }, {
          key: 'getTagOptions',
          value: function getTagOptions() {
            var res = this.datasource.tagFindQuery(this.target);
            return res;
          }
        }, {
          key: 'getConditionOptions',
          value: function getConditionOptions() {
            return this.datasource.conditionTypes(this.target);
          }
        }, {
          key: 'getFieldOptions',
          value: function getFieldOptions() {
            return this.datasource.fieldOptionsQuery(this.target);
          }
        }, {
          key: 'getAggregators',
          value: function getAggregators() {
            return this.datasource.getAggregators(this.target);
          }
        }, {
          key: 'getUnits',
          value: function getUnits() {
            return this.datasource.getUnits(this.target);
          }
        }, {
          key: 'removeAggregator',
          value: function removeAggregator() {
            this.target.aggregator = {};
          }
        }, {
          key: 'addFilter',
          value: function addFilter() {
            if (this.target.filters.length > 0) {
              this.target.filters.push({ 'type': 'condition', 'value': 'AND' });
            }
            this.target.filters.push({});
            this.panelCtrl.refresh();
          }
        }, {
          key: 'addArgs',
          value: function addArgs() {
            if (this.target.aggregator.name && !this.target.aggregator.args) {
              this.target.aggregator.args = [];
            }
            this.panelCtrl.refresh();
          }
        }, {
          key: 'removeFilter',
          value: function removeFilter(index, segment) {
            this.target.filters.splice(index, 1);
            if (index > 1 || index == 0 && this.target.filters.length > 0) {
              this.target.filters.splice(index, 1);
            }
            if (index >= this.target.filters.length) {
              this.target.filters.splice(this.target.filters.length - 1, 1);
            }
            this.panelCtrl.refresh();
          }
        }, {
          key: 'onChangeFilter',
          value: function onChangeFilter(index, segment) {
            this.target.filters[index] = segment;
            this.panelCtrl.refresh(); // Asks the panel to refresh data.
          }
        }]);

        return SidewinderDatasourceQueryCtrl;
      }(QueryCtrl));

      _export('SidewinderDatasourceQueryCtrl', SidewinderDatasourceQueryCtrl);

      SidewinderDatasourceQueryCtrl.templateUrl = 'partials/query.editor.html';
    }
  };
});
//# sourceMappingURL=query_ctrl.js.map
