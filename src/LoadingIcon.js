import React from 'react';
import { ActivityIndicator } from 'react-native';

const LoadingIcon = ({ isIconAnimating }) => <ActivityIndicator size="large" color="#0000ff" animating={isIconAnimating} />;

export default LoadingIcon;
