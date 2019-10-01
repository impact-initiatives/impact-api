import React from 'react';
import { Link } from 'gatsby';

export const tableHeader = [
  'Name',
  'Organization',
  'Document Type',
  'File Type',
  'Created',
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
      <td>
        {new Date(d.updatedAt).toLocaleString('en-GB', {
          year: 'numeric',
          month: 'short',
          day: '2-digit',
        })}
      </td>
    </tr>
  ));
