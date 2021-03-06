import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

const avarage = data => _.round(_.sum(data) / data.length);

export default props => {
  const { data, color, units } = props;
  return (
    <div>
      <Sparklines height={120} width={180} data={data}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="avg" />
        <div>
          {avarage(data)} {units}
        </div>
      </Sparklines>
    </div>
  );
};
