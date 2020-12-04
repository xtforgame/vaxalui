import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: 40,
    fontSize: 14,
    fontFamily: 'FilsonSoft-Bold',
    display: 'flex',
    // justifyContent: 'center',
  },
  table: {
    tableLayout: 'fixed',
    borderCollapse: 'collapse',
    // border: '1px solid #979797',
    width: 20,
  },
  tr0base: {
    borderTop: '1px solid #434343',
    borderBottom: '1px solid #434343',
  },
  tr1base: {
    borderTop: '1px solid #434343',
    // borderBottom: '1px solid #d8d8d8',
  },
  tr2base: {
    borderTop: '1px solid #d8d8d8',
    borderBottom: '1px solid #d8d8d8',
  },
  tr3base: {
    borderTop: '1px solid #d8d8d8',
    borderBottom: '1px solid #434343',
  },
  tr: {
    lineHeight: '8px',
    height: 40,
  },
  tdth: {
    overflow: 'hidden',
    // border: '1px solid #979797',
    padding: 11,
    height: 40,
  },
  itemTh: {
    paddingLeft: 42,
    paddingRight: 42,
    textAlign: 'left',
  },
  itemTd: {
    backgroundColor: '#d8d8d8',
    paddingLeft: 42,
    paddingRight: 42,
  },
  itemTdLast: {
    borderBottom: '1px solid #434343',
  },
  typeTd: {
    textAlign: 'center',
    paddingLeft: 25,
    paddingRight: 25,
    fontFamily: 'FilsonSoftRegular',
  },
  dataTd: {
    textAlign: 'center',
    fontFamily: 'FilsonSoftRegular',
    padding: 0,
  },
  dataTdContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 18,
    paddingBottom: 18,
  },
  dataTable: {
    tableLayout: 'fixed',
    borderCollapse: 'collapse',
    // border: '1px solid #979797',
    width: 20,
    height: 20,
  },
  dataTableTr: {
    lineHeight: '0px',
    height: 20,
    padding: 0,
  },
  dataTableTd: {
    overflow: 'hidden',
    // border: '1px solid #979797',
    padding: 0,
    paddingTop: 6,
  },
}));

export default (props) => {
  const classes = useStyles();
  const {
    rows = [
      {
        item: 'STRETCH - Carefree\n(PTT/PET)',
        types: [
          {
            type: 'DTY',
            denie: [36, 36, 36, 36, 100, 150],
            filame: [36, 36, 36, 36, 108, 36],
            luster: ['SD', 'SD', 'SD', 'FD', 'FD', 'SD'],
          },
          {
            type: 'FDY',
            denie: [36, 36, 36, 36],
            filame: [36, 36, 36, 36],
            luster: ['SD', 'SD', 'SD', 'FD'],
          },
        ],
      },
      {
        item: 'STRETCH - HCR',
        types: [
          {
            type: 'DTY',
            denie: [36, 36, 36],
            filame: [36, 36, 36],
            luster: ['SD', 'SD', 'SD'],
          },
          {
            type: 'FDY',
            denie: [36, 36],
            filame: [36, 36],
            luster: ['SD', 'SD'],
          },
          {
            type: 'FDY',
            denie: [36],
            filame: [36],
            luster: ['SD'],
          },
        ],
      },
      {
        item: 'STRETCH - Carefree2\n(PTT/PET)',
        types: [
          {
            type: 'FDY',
            denie: [36],
            filame: [36],
            luster: ['SD'],
          },
        ],
      },
    ],
  } = props;

  const columnOrder = ['denie', 'filame', 'luster'];

  const renderItemTd = (row, i, rows) => (
    <td className={clsx(classes.tdth, classes.itemTd, { [classes.itemTdLast]: i === rows.length - 1 })} rowSpan={row.types.length}>
      <pre style={{ fontFamily: 'FilsonSoft-Bold' }}>
        {row.item}
      </pre>
    </td>
  );

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

  const renderRow = (row, i1, rows) => row.types.map((typeData, i2, types) => (
    <tr className={getTrClass(types, i2)} key={`${i1}-${i2}`}>
      {i2 === 0 && renderItemTd(row, i1, rows)}
      <td className={clsx(classes.tdth, classes.typeTd)} style={{ borderRight: '1px solid #d8d8d8' }}>
        {typeData.type}
      </td>
      <td className={clsx(classes.tdth, classes.typeTd)} style={{ borderLeft: '1px solid #d8d8d8' }} />
      {columnOrder.map((columnName, i) => {
        const valueTable = typeData[columnName];
        return (
          <td colSpan={(i === columnOrder.length - 1) ? 2 : 1} key={columnName} className={clsx(classes.tdth, classes.dataTd)}>
            <div className={classes.dataTdContainer}>
              <table className={classes.dataTable}>
                <tbody>
                  {valueTable.map((value, i) => (
                    <tr key={i} className={classes.dataTableTr}>
                      <td width={50} className={clsx(classes.dataTableTd)}>
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </td>
        );
      })}
    </tr>
  ));
  return (
    <div
      className={classes.root}
    >
      <table className={classes.table}>
        <tbody>
          <tr className={clsx(classes.tr)}>
            <th width={264} className={clsx(classes.tdth, classes.itemTh)}>Item</th>
            <th width={100} className={classes.tdth}>Type</th>
            <th width={12} className={classes.tdth} />
            <th width={80} className={classes.tdth}>Denie</th>
            <th width={80} className={classes.tdth}>Filame</th>
            <th width={80} className={classes.tdth}>Luster</th>
            <th width={12} className={classes.tdth} />
            {/* <th width={80} className={classes.tdth}>Stock</th>
            <th width={80} className={classes.tdth}>Remark</th> */}
          </tr>
          {rows.map(renderRow)}
        </tbody>
      </table>
    </div>
  );
};
