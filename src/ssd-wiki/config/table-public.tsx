import React from 'react';

import { downloadFile } from '../utils/upload-functions';

const dateOptions = { year: 'numeric', month: 'short', timeZone: 'UTC' };

export const tableHeader = ['Name', 'Date', 'Audience', 'Project', 'Product'];

export const tableBody = (data: LabeledData[]) =>
  data.map(d => (
    <tr key={d.id}>
      <td>
        <a onClick={() => downloadFile(d.file)} aria-label={d.title}>
          {d.title}
        </a>
      </td>
      <td>
        {new Date(d.endDate + '-01').toLocaleString('en-GB', dateOptions)}
      </td>
      <td>{d.audiences.map((aud, i) => (i ? ', ' : '') + aud.label)}</td>
      <td>{d.project.label}</td>
      <td>{d.documentType.label}</td>
    </tr>
  ));
