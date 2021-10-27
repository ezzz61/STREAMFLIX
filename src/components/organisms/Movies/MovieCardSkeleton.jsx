import React from "react";
import ContentLoader from "react-content-loader";

const MovieCardSkeleton = (props) => (
  <ContentLoader
    speed={2}
    height={400}
    width={400}
    viewBox="0 0 500 500"
    backgroundColor="#374151"
    foregroundColor="#4B5563"
    {...props}
  >
    <rect x="3" y="3" rx="10" ry="5" width="300" height="300" />
    <rect x="4" y="315" rx="0" ry="0" width="239" height="20" />
    <rect x="4" y="340" rx="0" ry="0" width="274" height="20" />
    <rect x="4" y="365" rx="0" ry="0" width="239" height="20" />
  </ContentLoader>
);

export default MovieCardSkeleton;
