import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AvailableClocks from '../AvailableClocks/AvailableClocks';
import ExploreProductsBanner from '../ExploreProductsBanner/ExploreProductsBanner';

const ExploreProducts = () => {
  return (
    <div>
      <Navigation></Navigation>
      <ExploreProductsBanner></ExploreProductsBanner>
      <AvailableClocks></AvailableClocks>
    </div>
  );
};

export default ExploreProducts;