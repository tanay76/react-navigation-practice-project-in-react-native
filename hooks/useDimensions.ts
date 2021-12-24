import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

const useDimensions = () => {

  const [width, setWidth] = useState(Dimensions.get("window").width);
  const [height, setHeight] = useState(Dimensions.get("window").height);

  useEffect(() => {
    const updateDimensions = () => {
      setWidth(Dimensions.get("window").width);
      setHeight(Dimensions.get("window").height);
    };
    Dimensions.addEventListener('change', updateDimensions);

    return () => {
      Dimensions.removeEventListener('change', updateDimensions);
    };
  });

  return {width, height};
};

export default useDimensions;