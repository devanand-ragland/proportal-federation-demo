// 👇️ ts-nocheck disables type checking for entire file
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// 👇️ ts-ignore ignores any ts errors on the next line
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as React from 'react';
import styled, { CSSObject } from 'styled-components';
import { ComponentProps, ExpandableRowsComponent } from './types';

const ExpanderRowStyle = styled.div<{
  extendedRowStyle: CSSObject;
}>`
  width: 100%;
  box-sizing: border-box;
  ${({ theme }) => theme.expanderRow.style};
  ${({ extendedRowStyle }) => extendedRowStyle};
`;

type ExpanderRowProps<T> = {
  data: T;
  ExpanderComponent: ExpandableRowsComponent<T>;
  extendedRowStyle: CSSObject;
  extendedClassNames: string;
  expanderComponentProps: ComponentProps;
};

function ExpanderRow<T>({
  data,
  ExpanderComponent,
  expanderComponentProps,
  extendedRowStyle,
  extendedClassNames,
}: ExpanderRowProps<T>): JSX.Element {
  // we need to strip of rdt_TableRow from extendedClassNames
  const classNamesSplit = extendedClassNames
    .split(' ')
    .filter(c => c !== 'rdt_TableRow');
  const classNames = ['rdt_ExpanderRow', ...classNamesSplit].join(' ');

  return (
    <ExpanderRowStyle
      className={classNames}
      extendedRowStyle={extendedRowStyle}>
      <ExpanderComponent data={data} {...expanderComponentProps} />
    </ExpanderRowStyle>
  );
}

export default React.memo(ExpanderRow) as typeof ExpanderRow;
