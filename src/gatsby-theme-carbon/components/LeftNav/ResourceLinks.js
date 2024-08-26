import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'Lab 2201',
    href: '/',
  },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
