import Link from 'next/link';
import React from 'react';

export default function NavItem({ label, path, dataTest }) {
  return (
    <Link data-test={dataTest} href={path}>
      {label}
    </Link>
  );
}
