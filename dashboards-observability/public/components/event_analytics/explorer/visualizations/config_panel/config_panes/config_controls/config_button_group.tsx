/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { uniqueId } from 'lodash';
import { EuiTitle, EuiSpacer, EuiButtonGroup } from '@elastic/eui';
interface ToggleButtonOptions {
  id: string;
  label: string;
}
interface ToggleGroupProps {
  title: string;
  legend: string;
  groupOptions: ToggleButtonOptions[];
  idSelected: string;
  handleButtonChange: (id: string, value?: any) => void;
}
export const ButtonGroupItem: React.FC<ToggleGroupProps> = ({
  title, legend, groupOptions, idSelected, handleButtonChange
}) => (
  <>
    <EuiTitle size="xxs">
      <h3>{title}</h3>
    </EuiTitle>
    <EuiSpacer size="s" />

    <EuiButtonGroup
      id={uniqueId('button-select-')}
      name={title}
      legend={legend}
      options={groupOptions}
      idSelected={idSelected}
      onChange={handleButtonChange}
      buttonSize="compressed"
      isFullWidth={false}
    />
  </>
);
