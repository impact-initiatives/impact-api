import React from 'react';

import exports from './exports';

export const tableHeader = [
  'Name',
  'Organization',
  'Document Type',
  'File Type',
  'Created',
];

export const tableBody = (data: LabeledData[]) =>
  data.map(d => (
    <tr key={d.id}>
      <td>
        <a href={exports.apollo.files + d.file} aria-label={d.title}>
          {d.title}
        </a>
      </td>
      <td>
        {d.organizations.map(
          (org, i) => (i ? ', ' : '') + org.value.split(' | ')[0],
        )}
      </td>
      <td>{d.documentType.label}</td>
      <td>{d.fileType.label}</td>
      <td>
        {new Date(d.createdAt).toLocaleString('en-GB', {
          year: 'numeric',
          month: 'short',
          day: '2-digit',
        })}
      </td>
    </tr>
  ));
