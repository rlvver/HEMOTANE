import { Motorcycle } from '../types';

export const MOCK_MOTORCYCLES: Motorcycle[] = [
  {
    id: 'ducati-panigale-v4s',
    make: 'Ducati',
    model: 'Panigale V4 S',
    year: 2024,
    image: 'https://images.unsplash.com/photo-1625043484555-47841a752840?auto=format&fit=crop&q=80&w=1000',
    category: 'Superbike',
    description: 'The pinnacle of Italian engineering. A symphony of speed and technology derived directly from MotoGP.',
    scores: {
      technical: 9.8,
      user: 9.2,
      reliability: 8.5,
      brand: 9.9,
      final: 9.4
    },
    specs: {
      engine: '1,103 cc Desmosedici Stradale V4',
      power: '216 hp',
      torque: '91.2 lb-ft',
      weight: '174 kg (Dry)',
      seatHeight: '850 mm',
      price: '$32,195 USD'
    }
  },
  {
    id: 'bmw-m1000rr',
    make: 'BMW',
    model: 'M 1000 RR',
    year: 2024,
    image: 'https://images.unsplash.com/photo-1698319693158-b64391e0a816?auto=format&fit=crop&q=80&w=1000',
    category: 'Superbike',
    description: 'German precision meets racing obsession. Born for the track, capable on the street.',
    scores: {
      technical: 9.9,
      user: 8.8,
      reliability: 9.0,
      brand: 9.5,
      final: 9.3
    },
    specs: {
      engine: '999 cc Inline-4 ShiftCam',
      power: '212 hp',
      torque: '83 lb-ft',
      weight: '170 kg (Dry)',
      seatHeight: '832 mm',
      price: '$33,345 USD'
    }
  },
  {
    id: 'triumph-rocket-3',
    make: 'Triumph',
    model: 'Rocket 3 Storm GT',
    year: 2024,
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c3d?auto=format&fit=crop&q=80&w=1000',
    category: 'Cruiser',
    description: 'The world\'s largest production motorcycle engine. Infinite torque in a muscular package.',
    scores: {
      technical: 9.0,
      user: 9.5,
      reliability: 9.2,
      brand: 9.1,
      final: 9.2
    },
    specs: {
      engine: '2,458 cc Inline-3',
      power: '180 hp',
      torque: '166 lb-ft',
      weight: '291 kg (Wet)',
      seatHeight: '750 mm',
      price: '$24,995 USD'
    }
  },
    {
    id: 'kawasaki-h2',
    make: 'Kawasaki',
    model: 'Ninja H2 Carbon',
    year: 2024,
    image: 'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&q=80&w=1000',
    category: 'Hyperbike',
    description: 'Supercharged madness. The only factory supercharged motorcycle on the market.',
    scores: {
      technical: 9.7,
      user: 8.9,
      reliability: 9.4,
      brand: 8.8,
      final: 9.2
    },
    specs: {
      engine: '998 cc Supercharged Inline-4',
      power: '228 hp',
      torque: '104.9 lb-ft',
      weight: '238 kg (Curb)',
      seatHeight: '825 mm',
      price: '$35,000 USD'
    }
  }
];
