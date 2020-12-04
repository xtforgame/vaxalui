"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _styles.makeStyles)(() => ({
  root: {
    paddingTop: 40,
    fontSize: 14,
    fontFamily: 'FilsonSoft-Bold',
    display: 'flex'
  },
  table: {
    tableLayout: 'fixed',
    borderCollapse: 'collapse',
    width: 20
  },
  tr0base: {
    borderTop: '1px solid #434343',
    borderBottom: '1px solid #434343'
  },
  tr1base: {
    borderTop: '1px solid #434343'
  },
  tr2base: {
    borderTop: '1px solid #d8d8d8',
    borderBottom: '1px solid #d8d8d8'
  },
  tr3base: {
    borderTop: '1px solid #d8d8d8',
    borderBottom: '1px solid #434343'
  },
  tr: {
    lineHeight: '8px',
    height: 40
  },
  tdth: {
    overflow: 'hidden',
    padding: 11,
    height: 35
  },
  itemTh: {
    paddingLeft: 0,
    paddingRight: 0,
    textAlign: 'center'
  },
  itemTd: {
    backgroundColor: '#d8d8d8',
    paddingLeft: 0,
    paddingRight: 0
  },
  itemTdLast: {
    borderBottom: '1px solid #434343'
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
  const {
    rows = [{
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
    }]
  } = props;
  const columnOrder = ['denie', 'filame', 'luster'];

  const renderItemTd = (row, i, rows) => _react.default.createElement("td", {
    className: (0, _clsx.default)(classes.tdth, classes.itemTd, {
      [classes.itemTdLast]: i === rows.length - 1
    }),
    rowSpan: row.types.length
  }, _react.default.createElement("pre", {
    style: {
      fontFamily: 'FilsonSoft-Bold'
    }
  }, row.item));

  const getTrClass = (types, i) => {
    if (i === 0 && types.length === 1) {
      return classes.tr0base;
    }

    if (i === 0) {
      return classes.tr1base;
    }

    if (i === types.length - 1) {
      return classes.tr3base;
    }

    return classes.tr2base;
  };

  const renderRow = (row, i1, rows) => row.types.map((typeData, i2, types) => _react.default.createElement("tr", {
    className: getTrClass(types, i2),
    key: `${i1}-${i2}`
  }, i2 === 0 && renderItemTd(row, i1, rows), _react.default.createElement("td", {
    className: (0, _clsx.default)(classes.tdth, classes.typeTd),
    style: {
      borderRight: '1px solid #d8d8d8'
    }
  }, typeData.type), _react.default.createElement("td", {
    className: (0, _clsx.default)(classes.tdth, classes.typeTd),
    style: {
      borderLeft: '1px solid #d8d8d8'
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
    className: (0, _clsx.default)(classes.tr)
  }, _react.default.createElement("th", {
    width: 191,
    className: (0, _clsx.default)(classes.tdth, classes.itemTh)
  }, "Item"), _react.default.createElement("th", {
    width: 80,
    className: classes.tdth
  }, "Type"), _react.default.createElement("th", {
    width: 12,
    className: classes.tdth
  }), _react.default.createElement("th", {
    width: 80,
    className: classes.tdth
  }, "Denie"), _react.default.createElement("th", {
    width: 80,
    className: classes.tdth
  }, "Filame"), _react.default.createElement("th", {
    width: 80,
    className: classes.tdth
  }, "Luster"), _react.default.createElement("th", {
    width: 12,
    className: classes.tdth
  })), rows.map(renderRow))));
};

exports.default = _default;