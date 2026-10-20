import { Product, Review } from '../types';

// Generated high-fidelity asset paths
export const HERO_IMAGE = '/src/assets/images/hero_smart_electronics_1792472974208.jpg';
export const REMOTE_VOICE_IMAGE = '/src/assets/images/remote_voice_smart_1792472974101.jpg';
export const REMOTE_AC_IMAGE = '/src/assets/images/remote_ac_climate_1792472974374.jpg';
export const SMART_TV_IMAGE = '/src/assets/images/smart_tv_display_1792472975456.jpg';
export const SOUNDBAR_IMAGE = '/src/assets/images/audio_soundbar_system_1792472975386.jpg';

export const CATEGORIES = [
  {
    id: 'smart-tv-remotes',
    name: 'Smart TV & Voice Remotes',
    slug: 'smart-tv-remotes',
    description: 'Original & replacement voice-enabled Bluetooth & IR remotes for Samsung, LG, Sony, Mi & more',
    image: REMOTE_VOICE_IMAGE,
    count: 148
  },
  {
    id: 'ac-remotes',
    name: 'Air Conditioner Remotes',
    slug: 'ac-remotes',
    description: 'Universal and exact OEM split and inverter AC remotes with LCD temperature displays',
    image: REMOTE_AC_IMAGE,
    count: 94
  },
  {
    id: 'smart-tvs',
    name: '4K Smart LED TVs',
    slug: 'smart-tvs',
    description: 'High dynamic range Android & Google TV LED screens with bezel-less architectural designs',
    image: SMART_TV_IMAGE,
    count: 26
  },
  {
    id: 'audio-sound',
    name: 'Soundbars & Audio Systems',
    slug: 'audio-sound',
    description: 'Immersive Dolby Atmos soundbars, home theater speakers and wireless audio accessories',
    image: SOUNDBAR_IMAGE,
    count: 38
  },
  {
    id: 'set-top-box',
    name: 'Set-Top Box & DTH Remotes',
    slug: 'set-top-box',
    description: 'High compatibility remotes for Tata Play, Airtel DTH, DishTV, Sun Direct & DD Free Dish',
    image: REMOTE_VOICE_IMAGE,
    count: 52
  },
  {
    id: 'universal-remotes',
    name: 'All-in-One Universal Remotes',
    slug: 'universal-remotes',
    description: 'Smart learning remotes capable of replacing up to 8 entertainment & climate appliances',
    image: REMOTE_VOICE_IMAGE,
    count: 31
  }
];

export const BRANDS = [
  'Samsung',
  'LG Electronics',
  'Sony',
  'Xiaomi / Mi',
  'Daikin',
  'Voltas',
  'Panasonic',
  'Philips',
  'TCL',
  'Lloyd',
  'Hitachi',
  'Airtel DTH',
  'Tata Play',
  'Carrier'
];

export const PRODUCTS: Product[] = [
  {
    id: 'prod-01',
    name: 'Universal Smart Voice Remote for Samsung 4K / 8K QLED & Crystal UHD',
    slug: 'universal-smart-voice-remote-samsung-qled',
    category: 'smart-tv-remotes',
    categoryLabel: 'Smart TV & Voice Remotes',
    brand: 'Samsung',
    partNumber: 'BN59-01312A / BN59-01357A',
    price: 699,
    originalPrice: 1499,
    rating: 4.8,
    reviewCount: 312,
    inStock: true,
    stockCount: 84,
    image: REMOTE_VOICE_IMAGE,
    secondaryImages: [REMOTE_VOICE_IMAGE, HERO_IMAGE],
    features: [
      'Active Voice Search with Bixby & Google Assistant',
      'One-touch Netflix, Prime Video, Disney+ Hotstar hotkeys',
      'Dual transmission: Bluetooth 5.0 + Infrared Backup',
      'Premium matte anti-slip finish with tactile click domes',
      'Zero setup required for Samsung Series 6, 7, 8, 9 TVs'
    ],
    compatibleModels: [
      'Samsung Q60T, Q70T, Q80T, Q90T Series',
      'Samsung Crystal 4K TU8000, AU8000, CU7700',
      'Samsung Frame TV LS03A, LS03B',
      'Neo QLED QN85A, QN90A, QN95B'
    ],
    description: 'The RemoteElectronic replacement smart voice remote is built to exact OEM specifications for Samsung QLED, Neo QLED, and Crystal UHD 4K televisions. Featuring precision Bluetooth microphone pickup for instant voice commands and rapid one-click streaming app shortcuts. Ready to use immediately upon pairing.',
    specs: {
      transmissionType: 'Bluetooth 5.0 + High-Power Infrared (38kHz)',
      operatingDistance: 'Up to 12 meters (39 feet)',
      batteryRequired: '2x AAA Alkaline Batteries (not included)',
      voiceControl: true,
      dimensions: '16.5 x 3.6 x 1.4 cm',
      warranty: '6 Months Replacement Warranty'
    },
    isBestSeller: true,
    isFeatured: true
  },
  {
    id: 'prod-02',
    name: 'LG Magic Remote Control with Air Mouse Pointer & Voice Control',
    slug: 'lg-magic-remote-control-air-mouse',
    category: 'smart-tv-remotes',
    categoryLabel: 'Smart TV & Voice Remotes',
    brand: 'LG Electronics',
    partNumber: 'MR22GN / MR21GA / AN-MR19BA',
    price: 849,
    originalPrice: 1899,
    rating: 4.9,
    reviewCount: 420,
    inStock: true,
    stockCount: 45,
    image: REMOTE_VOICE_IMAGE,
    features: [
      'Intuitive Scroll Wheel with Point & Click Gyroscopic Cursor',
      'NFC Magic Tap smartphone screen sharing support',
      'Direct hotkeys for Netflix, Prime Video, Disney+ and Rakuten',
      'Built-in Google Assistant & Alexa voice control microphone',
      'Ergonomic curved silhouette for comfortable grip'
    ],
    compatibleModels: [
      'LG OLED C1, C2, C3, G1, G2, B1, B2 Series',
      'LG QNED 80, 85, 90, 99 Series',
      'LG NanoCell NANO75, NANO80, NANO85',
      'LG 4K UHD UQ7500, UQ8000, UR7500'
    ],
    description: 'Experience effortless navigation on webOS with the RemoteElectronic Magic Remote for LG Smart TVs. Features high-accuracy gyroscopic air mouse tracking, smooth center scroll wheel, and instant voice recognition.',
    specs: {
      transmissionType: '2.4GHz RF + Infrared Multi-Frequency',
      operatingDistance: 'Up to 15 meters',
      batteryRequired: '2x AA Batteries',
      voiceControl: true,
      dimensions: '18.4 x 4.2 x 3.2 cm',
      warranty: '6 Months Replacement Warranty'
    },
    isBestSeller: true,
    isFeatured: true
  },
  {
    id: 'prod-03',
    name: 'Universal Inverter AC Remote with Backlit LCD Screen',
    slug: 'universal-inverter-ac-remote-backlit',
    category: 'ac-remotes',
    categoryLabel: 'Air Conditioner Remotes',
    brand: 'Daikin',
    partNumber: 'KT-1000 PRO / ARC480A1',
    price: 499,
    originalPrice: 999,
    rating: 4.7,
    reviewCount: 188,
    inStock: true,
    stockCount: 120,
    image: REMOTE_AC_IMAGE,
    features: [
      'Clear high-contrast green backlit LCD display',
      'Auto-search code database covering 1,000+ AC models',
      'Dedicated Turbo Cool, Eco Saver, Fan Speed, and Timer controls',
      'Permanent memory retention across battery replacements',
      'Includes complimentary ergonomic wall-mount bracket'
    ],
    compatibleModels: [
      'Daikin Inverter & Non-Inverter Split Systems',
      'Voltas All-Weather & Adjustable Inverter ACs',
      'LG Dual Inverter & ArtCool ACs',
      'Hitachi, Carrier, Lloyd, Panasonic, Blue Star, Godrej'
    ],
    description: 'An all-in-one universal climate remote control engineered by RemoteElectronic. Features a smart digital IC that pairs automatically in under 10 seconds or via single brand-code input. Backlit night display allows effortless temperature adjustments in darkness.',
    specs: {
      transmissionType: 'Wide-Angle Quad-Infrared Diode',
      operatingDistance: 'Up to 10 meters direct line-of-sight',
      batteryRequired: '2x AAA Alkaline Batteries',
      voiceControl: false,
      dimensions: '14.2 x 5.0 x 2.1 cm',
      warranty: '1 Year Replacement Guarantee'
    },
    isBestSeller: true,
    isFeatured: true
  },
  {
    id: 'prod-04',
    name: 'Sony Bravia 4K Android TV Voice Remote with YouTube & Google Play',
    slug: 'sony-bravia-4k-voice-remote',
    category: 'smart-tv-remotes',
    categoryLabel: 'Smart TV & Voice Remotes',
    brand: 'Sony',
    partNumber: 'RMF-TX520U / TX600U / TX500P',
    price: 799,
    originalPrice: 1699,
    rating: 4.8,
    reviewCount: 245,
    inStock: true,
    stockCount: 62,
    image: REMOTE_VOICE_IMAGE,
    features: [
      'Google TV & Android TV seamless Bluetooth pairing',
      'Aluminum brushed styling with low-profile soft-touch buttons',
      'Dedicated microphone for high-sensitivity voice commands',
      'Quick shortcut buttons for YouTube, Netflix, Prime & Google Play',
      'Tested 100% key-press lifecycle at our Delhi testing facility'
    ],
    compatibleModels: [
      'Sony Bravia XR OLED A80J, A90J, A80K, A80L',
      'Sony Bravia X80J, X85J, X90J, X80K, X90K, X82L',
      'KD-43X75K, KD-55X75K, KD-65X80K'
    ],
    description: 'Direct replacement voice control remote for Sony Bravia Android and Google TV sets. Crafted with an authentic brushed look, rapid Bluetooth response, and long battery standby.',
    specs: {
      transmissionType: 'Bluetooth 4.2 BLE + Infrared',
      operatingDistance: 'Up to 10 meters',
      batteryRequired: '2x AAA Batteries',
      voiceControl: true,
      dimensions: '20.0 x 4.5 x 1.8 cm',
      warranty: '6 Months Replacement Warranty'
    },
    isFeatured: true
  },
  {
    id: 'prod-05',
    name: 'RemoteElectronic 55" CinemaView 4K Ultra HD Smart LED TV (Google TV)',
    slug: 'remote-electronic-55-cinemaview-4k-smart-tv',
    category: 'smart-tvs',
    categoryLabel: '4K Smart LED TVs',
    brand: 'RemoteElectronic',
    partNumber: 'RE-TV55UHD-2026',
    price: 28999,
    originalPrice: 42999,
    rating: 4.9,
    reviewCount: 164,
    inStock: true,
    stockCount: 18,
    image: SMART_TV_IMAGE,
    secondaryImages: [SMART_TV_IMAGE, HERO_IMAGE],
    features: [
      'Frameless Bezel-Less IPS Panel with HDR10+ and Dolby Vision',
      'Official Google TV OS with access to 10,000+ streaming apps',
      'Built-in Chromecast, Apple AirPlay 2 and Dual-Band Wi-Fi',
      '30W Stereo Box Speakers with Dolby Atmos Sound Tuning',
      'Bundled with RemoteElectronic Smart Voice Magic Remote'
    ],
    compatibleModels: [
      'HDMI 2.1 eARC, USB 3.0, Optical Audio, Ethernet LAN, AV In'
    ],
    description: 'Engineered by RemoteElectronic with a calibrated 4K A+ Grade IPS display, 400 nits peak brightness, and lightning-fast quad-core processor. Backed by nationwide on-site installation and 2 years warranty.',
    specs: {
      transmissionType: 'Wi-Fi 5GHz + Bluetooth 5.2 + HDMI 2.1 eARC',
      operatingDistance: 'Wide 178° viewing angle',
      batteryRequired: 'AC 100-240V 50/60Hz',
      voiceControl: true,
      dimensions: '122.8 x 71.2 x 7.8 cm',
      warranty: '2 Years Comprehensive Warranty'
    },
    isNewArrival: true,
    isFeatured: true
  },
  {
    id: 'prod-06',
    name: 'SonicBlast 160W 2.1 Channel Dolby Audio Soundbar with Subwoofer',
    slug: 'sonicblast-160w-dolby-audio-soundbar',
    category: 'audio-sound',
    categoryLabel: 'Soundbars & Audio Systems',
    brand: 'RemoteElectronic',
    partNumber: 'RE-SB160-PRO',
    price: 4999,
    originalPrice: 8999,
    rating: 4.7,
    reviewCount: 96,
    inStock: true,
    stockCount: 35,
    image: SOUNDBAR_IMAGE,
    features: [
      '160 Watts Peak Dynamic Output with deep bass wireless subwoofer',
      'Dolby Digital decoding with 3 tuned EQ modes (Movie, Music, Dialogue)',
      'Multiple inputs: HDMI ARC, Optical, Bluetooth 5.3, AUX, USB',
      'Sleek acoustic fabric grille with brushed metallic accents',
      'Includes dedicated RemoteElectronic audio remote control'
    ],
    compatibleModels: [
      'Universal compatibility with all Smart TVs, PCs, Projectors and Phones'
    ],
    description: 'Transform your home theater sound with RemoteElectronic SonicBlast. Delivers room-filling acoustic power, crystal-clear vocal dialogues, and punchy subwoofer bass without cable clutter.',
    specs: {
      transmissionType: 'Bluetooth 5.3 / HDMI ARC / Optical / 3.5mm AUX',
      operatingDistance: '10m Bluetooth range',
      batteryRequired: 'AC Power Cord / Remote requires 2x AAA',
      voiceControl: false,
      dimensions: 'Soundbar: 86 x 6.5 x 7 cm | Subwoofer: 30 x 18 x 35 cm',
      warranty: '1 Year Manufacturer Warranty'
    },
    isNewArrival: true,
    isFeatured: true
  },
  {
    id: 'prod-07',
    name: 'Voltas All-Star Inverter AC Replacement Remote Control',
    slug: 'voltas-all-star-inverter-ac-remote',
    category: 'ac-remotes',
    categoryLabel: 'Air Conditioner Remotes',
    brand: 'Voltas',
    partNumber: 'RC-VOL-01 / 123V-CZ',
    price: 429,
    originalPrice: 850,
    rating: 4.6,
    reviewCount: 142,
    inStock: true,
    stockCount: 78,
    image: REMOTE_AC_IMAGE,
    features: [
      'Factory programmed for 100% Voltas Split & Window ACs',
      'Dual-display temperature readout in Celsius / Fahrenheit',
      'Sleep mode, Auto-swing, and Super Dry dehumidification button',
      'Sturdy drop-resistant ABS casing with non-fading key prints'
    ],
    compatibleModels: [
      'Voltas 1.5 Ton 3 Star / 5 Star Inverter Split AC',
      'Voltas Maha Inverter & Vertis Series',
      'Voltas Window AC 185V / 122V Series'
    ],
    description: 'Exact form and function replacement remote for Voltas air conditioners. Works right out of the box with zero programming or code setup needed.',
    specs: {
      transmissionType: 'High-Output Infrared Beam',
      operatingDistance: 'Up to 9 meters',
      batteryRequired: '2x AAA Batteries',
      voiceControl: false,
      dimensions: '13.5 x 4.8 x 1.9 cm',
      warranty: '6 Months Replacement Warranty'
    },
    isBestSeller: false,
    isFeatured: false
  },
  {
    id: 'prod-08',
    name: 'Tata Play (Tata Sky) HD / 4K Universal Set-Top Box Remote',
    slug: 'tata-play-hd-4k-universal-remote',
    category: 'set-top-box',
    categoryLabel: 'Set-Top Box & DTH Remotes',
    brand: 'Tata Play',
    partNumber: 'TS-HD-UNI-02',
    price: 349,
    originalPrice: 699,
    rating: 4.8,
    reviewCount: 512,
    inStock: true,
    stockCount: 210,
    image: REMOTE_VOICE_IMAGE,
    features: [
      'Universal TV learning button (controls TV Power, Volume & Source)',
      'Compatible with Tata Play HD, Binge+ Android Box & SD boxes',
      'Responsive soft-rubber keys with laser-etched markings',
      'High transmit power works even when angled away from box'
    ],
    compatibleModels: [
      'Tata Play HD Box, Tata Play Binge+ Android Set-Top Box',
      'Tata Sky SD Box, Tata Sky 4K UHD Box'
    ],
    description: 'The definitive replacement remote for Tata Play / Tata Sky subscribers. Easily learns your TV remote power and volume buttons so you only need one remote on the sofa.',
    specs: {
      transmissionType: 'Infrared Learning + Standard IR',
      operatingDistance: 'Up to 11 meters',
      batteryRequired: '2x AAA Batteries',
      voiceControl: false,
      dimensions: '19.2 x 4.8 x 2.2 cm',
      warranty: '6 Months Replacement Warranty'
    },
    isBestSeller: true,
    isFeatured: true
  },
  {
    id: 'prod-09',
    name: 'Xiaomi Mi / Redmi Android TV Bluetooth Voice Remote (PatchWall)',
    slug: 'xiaomi-mi-redmi-voice-remote-bluetooth',
    category: 'smart-tv-remotes',
    categoryLabel: 'Smart TV & Voice Remotes',
    brand: 'Xiaomi / Mi',
    partNumber: 'MDZ-24-AA / XMRM-010',
    price: 649,
    originalPrice: 1299,
    rating: 4.7,
    reviewCount: 378,
    inStock: true,
    stockCount: 95,
    image: REMOTE_VOICE_IMAGE,
    features: [
      'Google Assistant Voice input with quick Bluetooth sync',
      'One-touch PatchWall UI and Android TV Home switches',
      'Netflix and Prime Video high-durability shortcut keys',
      'Minimalist 14-key layout with tactile feedback'
    ],
    compatibleModels: [
      'Mi TV 4A, 4C, 4X, 5X, Horizon Edition (32", 43", 50", 55")',
      'Redmi Smart TV X43, X50, X55, X65 Series',
      'Mi Box 4K Streaming Box & Mi TV Stick'
    ],
    description: 'Authentic Bluetooth voice remote for Xiaomi Mi TVs, Redmi Smart TVs, and Mi Box 4K media streamers. Syncs in 5 seconds by holding Mi + Home buttons.',
    specs: {
      transmissionType: 'Bluetooth Low Energy (BLE)',
      operatingDistance: 'Up to 10 meters 360° omnidirectional',
      batteryRequired: '2x AAA Batteries',
      voiceControl: true,
      dimensions: '15.5 x 3.8 x 1.2 cm',
      warranty: '6 Months Replacement'
    },
    isBestSeller: true,
    isFeatured: false
  },
  {
    id: 'prod-10',
    name: 'OmniMaster 8-in-1 Smart Learning Universal Remote with OLED Setup',
    slug: 'omnimaster-8-in-1-universal-learning-remote',
    category: 'universal-remotes',
    categoryLabel: 'All-in-One Universal Remotes',
    brand: 'RemoteElectronic',
    partNumber: 'RE-OMNI-800',
    price: 1199,
    originalPrice: 2499,
    rating: 4.9,
    reviewCount: 148,
    inStock: true,
    stockCount: 42,
    image: REMOTE_VOICE_IMAGE,
    features: [
      'Consolidates 8 remotes: TV, Set-Top Box, AC, Soundbar, BluRay, Projector',
      'Built-in OLED mini display for effortless device selection & battery meter',
      'Infrared code cloner learns commands directly head-to-head from old remotes',
      'Macro execution: Turn on TV + Soundbar + Set-Top Box with one single press'
    ],
    compatibleModels: [
      'Pre-programmed with 5,000+ brands and 150,000+ device profiles globally'
    ],
    description: 'The ultimate entertainment commander designed by RemoteElectronic. Replace all the cluttered remotes on your coffee table with a single premium controller.',
    specs: {
      transmissionType: 'Multi-Directional High Beam IR + IR Learning Sensor',
      operatingDistance: 'Up to 14 meters',
      batteryRequired: '2x AA Batteries',
      voiceControl: false,
      dimensions: '21.0 x 5.0 x 2.4 cm',
      warranty: '1 Year Replacement Guarantee'
    },
    isNewArrival: true,
    isFeatured: true
  },
  {
    id: 'prod-11',
    name: 'Daikin Inverter Split AC Original Profile Remote Control',
    slug: 'daikin-inverter-split-ac-remote-original',
    category: 'ac-remotes',
    categoryLabel: 'Air Conditioner Remotes',
    brand: 'Daikin',
    partNumber: 'ARC480A11 / ARC433A87',
    price: 549,
    originalPrice: 1100,
    rating: 4.8,
    reviewCount: 129,
    inStock: true,
    stockCount: 60,
    image: REMOTE_AC_IMAGE,
    features: [
      'Coanda Airflow & Econo Mode dedicated triggers',
      'High-legibility LCD panel with clock and timer functions',
      'Factory mapped frequencies match Daikin FTKF, FTHT & FTKM series',
      'Direct slide cover protecting advanced configuration keys'
    ],
    compatibleModels: [
      'Daikin Inverter Split AC 1 Ton, 1.5 Ton, 1.8 Ton (R32 / R410A)'
    ],
    description: 'Factory-calibrated replacement remote specifically designed for Daikin Inverter split air conditioners. Ensures optimal thermal comfort and energy efficiency.',
    specs: {
      transmissionType: 'Infrared Pulse Code',
      operatingDistance: 'Up to 10 meters',
      batteryRequired: '2x AAA Batteries',
      voiceControl: false,
      dimensions: '16.0 x 5.5 x 2.0 cm',
      warranty: '6 Months Replacement Warranty'
    },
    isBestSeller: false,
    isFeatured: false
  },
  {
    id: 'prod-12',
    name: 'Airtel Xstream Box / HD DTH Universal Smart Remote',
    slug: 'airtel-xstream-box-universal-remote',
    category: 'set-top-box',
    categoryLabel: 'Set-Top Box & DTH Remotes',
    brand: 'Airtel DTH',
    partNumber: 'AIR-XSTR-01',
    price: 399,
    originalPrice: 799,
    rating: 4.7,
    reviewCount: 284,
    inStock: true,
    stockCount: 130,
    image: REMOTE_VOICE_IMAGE,
    features: [
      'Dedicated Google Assistant microphone key for Airtel Xstream Box',
      'Universal TV learning section for Power, AV and Volume buttons',
      'Direct shortcuts for Airtel Xstream App, YouTube, and Live TV',
      'Tested to withstand over 200,000 key clicks'
    ],
    compatibleModels: [
      'Airtel Xstream Android TV Box, Airtel Digital TV HD Box, Airtel Internet TV'
    ],
    description: 'High compatibility replacement remote for Airtel Digital TV and Airtel Xstream Android TV Box. Quick pairing and universal television learning capability.',
    specs: {
      transmissionType: 'Infrared + Bluetooth Hybrid',
      operatingDistance: 'Up to 10 meters',
      batteryRequired: '2x AAA Batteries',
      voiceControl: true,
      dimensions: '18.5 x 4.6 x 2.0 cm',
      warranty: '6 Months Replacement Warranty'
    },
    isBestSeller: false,
    isFeatured: false
  }
];

export const SAMPLE_REVIEWS: Review[] = [
  {
    id: 'rev-01',
    productId: 'prod-01',
    author: 'Rajesh Varma',
    rating: 5,
    date: '14 Oct 2026',
    comment: 'Ordered this for my Samsung Crystal 4K 55" TV after our puppy chewed the original remote. Paired in 10 seconds via Bluetooth and the voice search with Google Assistant works flawlessly. Fast delivery to Gurgaon within 24 hours!',
    verifiedPurchase: true,
    deviceUsed: 'Samsung Crystal UHD 55"'
  },
  {
    id: 'rev-02',
    productId: 'prod-01',
    author: 'Sunita Sharma',
    rating: 5,
    date: '02 Oct 2026',
    comment: 'RemoteElectronic saved me thousands compared to the Samsung service center quote! Plastic quality feels identical to original, buttons are crisp. 10/10 recommendation.',
    verifiedPurchase: true,
    deviceUsed: 'Samsung QLED Q70T'
  },
  {
    id: 'rev-03',
    productId: 'prod-02',
    author: 'Arun Menon',
    rating: 5,
    date: '28 Sep 2026',
    comment: 'The Magic pointer motion is buttery smooth on my LG C2 OLED. Scroll wheel clicks nicely and microphone pickup is super clear for YouTube voice typing.',
    verifiedPurchase: true,
    deviceUsed: 'LG C2 65" OLED'
  },
  {
    id: 'rev-04',
    productId: 'prod-03',
    author: 'Pooja Iyer',
    rating: 5,
    date: '19 Sep 2026',
    comment: 'Worked immediately with our Daikin 1.5 ton split AC. The green backlight at night is such a thoughtful feature so we do not have to turn on the room light to adjust temperature.',
    verifiedPurchase: true,
    deviceUsed: 'Daikin Inverter AC'
  },
  {
    id: 'rev-05',
    productId: 'prod-05',
    author: 'Vikram Malhotra',
    rating: 5,
    date: '10 Sep 2026',
    comment: 'Unbelievable picture quality for this price point. Colors pop with Dolby Vision and sound clarity is genuinely good. Packed with care and dispatched quickly from Delhi.',
    verifiedPurchase: true,
    deviceUsed: 'CinemaView 55"'
  }
];

export const MOCK_ORDERS: Record<string, { status: string; estimatedDelivery: string; steps: { name: string; date: string; done: boolean }[] }> = {
  'RE-849201': {
    status: 'Out for Delivery',
    estimatedDelivery: 'Today by 6:00 PM',
    steps: [
      { name: 'Order Placed & Confirmed', date: '18 Oct 2026, 10:24 AM', done: true },
      { name: 'Signal & Key-press Quality Tested at Delhi Lab', date: '18 Oct 2026, 03:15 PM', done: true },
      { name: 'Dispatched via BlueDart Express (Air AWB #7291840)', date: '19 Oct 2026, 08:30 AM', done: true },
      { name: 'Out for Delivery - Agent assigned', date: '19 Oct 2026, 02:45 PM', done: true },
      { name: 'Delivered', date: 'Estimated: Today, 6:00 PM', done: false }
    ]
  },
  'RE-729103': {
    status: 'Delivered',
    estimatedDelivery: 'Delivered on 16 Oct 2026',
    steps: [
      { name: 'Order Placed & Confirmed', date: '14 Oct 2026, 02:10 PM', done: true },
      { name: 'Quality Inspected', date: '14 Oct 2026, 05:40 PM', done: true },
      { name: 'Dispatched via Delhivery Surface', date: '15 Oct 2026, 09:12 AM', done: true },
      { name: 'Delivered with OTP Verification', date: '16 Oct 2026, 04:20 PM', done: true }
    ]
  }
};
