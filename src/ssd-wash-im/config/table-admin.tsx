import React from 'react';
import { Link } from 'gatsby';

const dateOptions = { year: 'numeric', month: 'short', timeZone: 'UTC' };
const updateOptions = { year: 'numeric', month: 'short', day: '2-digit' };

export const tableHeader = [
  'Name',
  'Date',
  'Organization',
  'Document Type',
  'File Type',
  'Updated',
];

export const tableBody = (data: LabeledData[]) =>
  data.map(d => (
    <tr key={d.id}>
      <td>
        <Link to={`/admin/edit/#${d.id}`} aria-label={d.title}>
          {d.title}
        </Link>
      </td>
      <td>
        {new Date(d.endDate + '-01').toLocaleString('en-GB', dateOptions)}
      </td>
      <td>{d.organizations.map((org, i) => (i ? ', ' : '') + org.label)}</td>
      <td>{d.documentType.label}</td>
      <td>{d.fileType.label}</td>
      <td>{new Date(d.updatedAt).toLocaleString('en-GB', updateOptions)}</td>
    </tr>
  ));
