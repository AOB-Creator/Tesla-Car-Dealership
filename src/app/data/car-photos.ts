/**
 * Real photography, from Unsplash (https://unsplash.com/license): free to use
 * commercially, no permission needed. Files are self-hosted in public/images and
 * credited in IMAGE_CREDITS.md.
 */
export interface Photo {
  src: string;
  alt: string;
  credit: string;
  url: string;
  /** CSS object-position, for photos whose subject is off-centre. */
  focus?: string;
}

export function photo(file: string, alt: string, credit: string, id: string, focus?: string): Photo {
  return { src: 'images/' + file + '.webp', alt, credit, url: 'https://unsplash.com/photos/' + id, focus };
}

/** Photos per model and paint name (as written in cars.ts). */
const CAR_PHOTOS: Record<string, Record<string, Photo>> = {
  'model-s': {
    'Pearl White': photo('models/model-s-pearl-white', 'White Model S parked on grass', 'Matt Henry', '1nVbppFJl-s', '50% 62%'),
    'Solid Black': photo('models/model-s-solid-black', 'Black Model S driving', 'Jp Valery', 'RQub4zZuOCs'),
    'Deep Blue': photo('models/model-s-deep-blue', 'Blue Model S outside a showroom', 'Tesla Fans Schweiz', '2swaWy4Xhb0', '50% 75%'),
  },
  'model-3': {
    'Pearl White': photo('models/model-3-pearl-white', 'White Model 3 on a city road', 'Robin van Geenen', 'zSeZzS1bCq8', '50% 65%'),
    'Solid Black': photo('models/model-3-solid-black', 'Black Model 3 parked on a street', 'Sam', 'hfzniMn2yJ0'),
    'Deep Blue': photo('models/model-3-deep-blue', 'Blue Model 3 in a field', 'Justin Simon Jose', 'ZOHI2Ddv4jg', '50% 58%'),
    'Ultra Red': photo('models/model-3-ultra-red', 'Red Model 3 on a country lane', 'Autotrader UK', 'Lrc_D4-tRiY', '50% 62%'),
  },
  'model-x': {
    'Solid Black': photo('models/model-x-solid-black', 'Black Model X with its falcon wing doors open', 'Robbie', 'Qy2GJ5Bh_gQ', '50% 65%'),
    'Deep Blue': photo('models/model-x-deep-blue', 'Blue Model X with its falcon wing doors open', 'Ivan Kazlouskij', '5e1iOp89ZhI', '50% 50%'),
    'Pearl White': photo('models/model-x-pearl-white', 'White Model X on a snowy street', 'Ivan Kazlouskij', '1caEwQUweoQ', '50% 54%'),
  },
  'model-y': {
    'Solid Black': photo('models/model-y-solid-black', 'Black Model Y parked on a street', 'Mateusz Zatorski', 'Fcknu5cpP3Y', '50% 70%'),
    'Pearl White': photo('models/model-y-pearl-white', 'White Model Y on a forest track', 'Autotrader UK', 'QPRrbb7kPOE', '50% 70%'),
    'Stealth Grey': photo('models/model-y-stealth-grey', 'Grey Model Y on a brick-paved yard', 'Maxim', 'UYY3az4IqtQ', '50% 60%'),
    'Ultra Red': photo('models/model-y-ultra-red', 'Red Model Y parked outside', 'Brice Cooper', 'PTmgqyhXyc8'),
  },
  cybertruck: {
    'Stainless Steel': photo('models/cybertruck-stainless-steel', 'Stainless steel Cybertruck in profile', 'Sven Piper', 'mRvdq1PleQA', '50% 60%'),
    'Satin Black Wrap': photo('models/cybertruck-satin-black-wrap', 'Cybertruck in a satin black wrap', 'Varun Palaniappan', '_JkqGe0ufU8', '50% 60%'),
  },
};

/** The photo each model is shown with by default (its best shot). */
const DEFAULT_PAINT: Record<string, string> = {
  'model-s': 'Pearl White',
  'model-3': 'Pearl White',
  'model-x': 'Solid Black',
  'model-y': 'Solid Black',
  cybertruck: 'Stainless Steel',
};

export interface CarPhotoMatch {
  photo: Photo;
  /** The paint the photo actually shows. */
  paint: string;
  /** False when no photo exists in the requested paint and a stand-in is shown. */
  exact: boolean;
}

/** Photo of a model in the given paint, falling back to the model's default photo. */
export function carPhoto(carId: string, paint?: string): CarPhotoMatch | undefined {
  const byPaint = CAR_PHOTOS[carId];
  if (!byPaint) return undefined;
  if (paint && byPaint[paint]) return { photo: byPaint[paint], paint, exact: true };
  const fallback = DEFAULT_PAINT[carId];
  return { photo: byPaint[fallback], paint: fallback, exact: !paint };
}
