import Image from 'next/image';

import { meta } from '~/site.config';

function Picture() {
  const { author } = meta;

  return (
    <Image
      src="/images/mucahitnezir.jpg"
      alt={author.name}
      width={150}
      height={150}
      layout="fixed"
      quality={90}
      className="rounded-full"
    />
  );
}

export default Picture;
