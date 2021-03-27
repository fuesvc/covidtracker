// import React from 'react';
import numeral from 'numeral';

export const sortData = (data: any) => {
  let sortedData = [...data];
  sortedData.sort((a,b) => {
    if (a.cases > b.cases)
      return -1;
    else
      return 1;
  });
  return sortedData;
}

export const prettyPrintStat = (stat: any) => stat ? `+${numeral(stat).format("0.000a")}` : "+0";