import React from 'react';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from 'react-sparklines';

const average = data =>
  data.reduce((result, value) => (result += value), 0) / data.length;

export default props => {
  return (
    <div>
      <div>
        <Sparklines height={80} width={150} data={props.data}>
          <SparklinesLine color={props.color} />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
      </div>
      <div>
        Average: {average(props.data).toFixed(2)} {props.units}
      </div>
    </div>
  );
};
