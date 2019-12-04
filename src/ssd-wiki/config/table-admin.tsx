import React from 'react';
import { Link } from 'gatsby';

const dateOptions = { year: 'numeric', month: 'short', timeZone: 'UTC' };
const updateOptions = { year: 'numeric', month: 'short', day: '2-digit' };

export const tableHeader = [
  'Name',
  'Date',
  'Audience',
  'Project',
  'Product',
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
      <td>{d.audiences.map((aud, i) => (i ? ', ' : '') + aud.label)}</td>
      <td>{d.project.label}</td>
      <td>{d.documentType.label}</td>
      <td>{new Date(d.updatedAt).toLocaleString('en-GB', updateOptions)}</td>
    </tr>
  ));
