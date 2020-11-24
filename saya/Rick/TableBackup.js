"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/core/styles");

var _reveal = require("../reveal");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _styles.makeStyles)(() => ({
  root: {
    paddingTop: 40,
    fontSize: 14,
    fontFamily: 'FilsonSoft-Bold',
    display: 'flex',
    justifyContent: 'center'
  },
  table: {
    tableLayout: 'fixed',
    borderCollapse: 'collapse',
    border: '1px solid #979797',
    width: 20
  },
  tr: {
    lineHeight: '8px',
    height: 40
  },
  tdth: {
    overflow: 'hidden',
    border: '1px solid #979797',
    padding: 11,
    height: 40
  },
  itemTd: {
    backgroundColor: '#d8d8d8',
    paddingLeft: 42,
    paddingRight: 42
  },
  typeTd: {
    textAlign: 'center',
    paddingLeft: 25,
    paddingRight: 25,
    fontFamily: 'FilsonSoftRegular'
  },
  dataTd: {
    textAlign: 'center',
    fontFamily: 'FilsonSoftRegular',
    padding: 0
  },
  dataTdContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 18,
    paddingBottom: 18
  },
  dataTable: {
    tableLayout: 'fixed',
    borderCollapse: 'collapse',
    width: 20,
    height: 20
  },
  dataTableTr: {
    lineHeight: '0px',
    height: 20,
    padding: 0
  },
  dataTableTd: {
    overflow: 'hidden',
    padding: 0,
    paddingTop: 6
  }
}));

var _default = props => {
  const classes = useStyles();
  const rows = [{
    item: 'STRETCH - Carefree\n(PTT/PET)',
    types: [{
      type: 'DTY',
      denie: [36, 36, 36, 36, 100, 150],
      filame: [36, 36, 36, 36, 108, 36],
      luster: ['SD', 'SD', 'SD', 'FD', 'FD', 'SD']
    }, {
      type: 'FDY',
      denie: [36, 36, 36, 36],
      filame: [36, 36, 36, 36],
      luster: ['SD', 'SD', 'SD', 'FD']
    }]
  }, {
    item: 'STRETCH - HCR',
    types: [{
      type: 'DTY',
      denie: [36, 36, 36],
      filame: [36, 36, 36],
      luster: ['SD', 'SD', 'SD']
    }, {
      type: 'FDY',
      denie: [36, 36],
      filame: [36, 36],
      luster: ['SD', 'SD']
    }, {
      type: 'FDY',
      denie: [36],
      filame: [36],
      luster: ['SD']
    }]
  }, {
    item: 'STRETCH - Carefree2\n(PTT/PET)',
    types: [{
      type: 'FDY',
      denie: [36],
      filame: [36],
      luster: ['SD']
    }]
  }];
  const columnOrder = ['denie', 'filame', 'luster'];

  const renderItemTd = row => _react.default.createElement("td", {
    className: (0, _clsx.default)(classes.tdth, classes.itemTd),
    rowSpan: row.types.length
  }, _react.default.createElement("pre", {
    style: {
      fontFamily: 'FilsonSoft-Bold'
    }
  }, row.item));

  const renderRow = (row, i1) => row.types.map((typeData, i2) => _react.default.createElement("tr", {
    key: `${i1}-${i2}`
  }, i2 === 0 && renderItemTd(row), _react.default.createElement("td", {
    className: (0, _clsx.default)(classes.tdth, classes.typeTd),
    style: {
      borderRight: 'none'
    }
  }, typeData.type), _react.default.createElement("td", {
    className: (0, _clsx.default)(classes.tdth, classes.typeTd),
    style: {
      borderLeft: 'none'
    }
  }), columnOrder.map((columnName, i) => {
    const valueTable = typeData[columnName];
    return _react.default.createElement("td", {
      colSpan: i === columnOrder.length - 1 ? 2 : 1,
      key: columnName,
      className: (0, _clsx.default)(classes.tdth, classes.dataTd)
    }, _react.default.createElement("div", {
      className: classes.dataTdContainer
    }, _react.default.createElement("table", {
      className: classes.dataTable
    }, _react.default.createElement("tbody", null, valueTable.map((value, i) => _react.default.createElement("tr", {
      key: i,
      className: classes.dataTableTr
    }, _react.default.createElement("td", {
      width: 50,
      className: (0, _clsx.default)(classes.dataTableTd)
    }, value)))))));
  })));

  return _react.default.createElement("div", {
    className: classes.root
  }, _react.default.createElement("table", {
    className: classes.table
  }, _react.default.createElement("tbody", null, _react.default.createElement("tr", {
    className: classes.tr
  }, _react.default.createElement("th", {
    width: 264,
    className: classes.tdth
  }, "Item"), _react.default.createElement("th", {
    width: 100,
    className: classes.tdth,
    style: {
      borderRight: 'none'
    }
  }, "Type"), _react.default.createElement("th", {
    width: 12,
    className: classes.tdth,
    style: {
      borderLeft: 'none'
    }
  }), _react.default.createElement("th", {
    width: 80,
    className: classes.tdth
  }, "Denie"), _react.default.createElement("th", {
    width: 80,
    className: classes.tdth
  }, "Filame"), _react.default.createElement("th", {
    width: 80,
    className: classes.tdth,
    style: {
      borderRight: 'none'
    }
  }, "Luster"), _react.default.createElement("th", {
    width: 12,
    className: classes.tdth,
    style: {
      borderLeft: 'none'
    }
  })), rows.map(renderRow))));
};

exports.default = _default;