import createImageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { dataset, projectId } from '../env';  // Assuming projectId and dataset are correct

// const builder = createImageUrlBuilder({ projectId, dataset });

// export const urlFor = (source: SanityImageSource): string => {
//   if (source?.asset?._ref) {
//     return builder.image(source).url();
//   } else {
//     console.error('Invalid image source:', source);
//     return '';  // Return an empty string if the source is invalid
//   }
// };

const builder = createImageUrlBuilder({ projectId, dataset });

export const urlFor = (source: SanityImageSource): string => {
  // If the source is a string, return it as-is (assuming it's a URL)
  if (typeof source === 'string') {
    return source;
  }

  // If the source is an object with an asset property (SanityImageObject or SanityAsset)
  if ('asset' in source) {
    return builder.image(source).url();
  } else {
    console.error('Invalid image source:', source);
    return '';  // Return an empty string if the source is invalid
  }
};
