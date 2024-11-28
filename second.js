
const videos = [
  // Adventure
  {
    id: 1,
    category: "Adventure",
    thumbnail: "https://cdn.pixabay.com/photo/2021/03/01/18/57/mountains-6060586_1280.jpg",
    title: "Journey Beyond the Stars",
    channelLogo: "https://cdn.pixabay.com/photo/2021/03/01/18/57/mountains-6060586_1280.jpg",
    channelName: "Explorer's Den",
    description: "Embark on a thrilling adventure through uncharted galaxies.",
    videoFile: "",
    views: "1M",
    uploadDate: "2 days ago",
    subscribers: "5.17M",
  },
  {
    id: 3,
    category: "Adventure",
    thumbnail: "https://cdn.pixabay.com/photo/2016/11/19/16/56/adventure-1840310_640.jpg",
    title: "Rise of the Nova",
    channelLogo: "https://cdn.pixabay.com/photo/2016/11/19/16/56/adventure-1840310_640.jpg",
    channelName: "Galactic Tales",
    description: "An epic tale of interstellar survival and revolution.",
    videoFile: "",
    views: "1.7M",
    uploadDate: "3 days ago",
    subscribers: "1.8M",
  },
  {
    id: 5,
    category: "Adventure",
    thumbnail: "https://cdn.pixabay.com/photo/2022/05/11/13/55/nature-7189418_640.jpg",
    title: "Echoes of Destiny",
    channelLogo: "https://cdn.pixabay.com/photo/2022/05/11/13/55/nature-7189418_640.jpg",
    channelName: "Dramatic Visions",
    description: "A heartfelt journey of love, loss, and redemption.",
    videoFile: "Movies/SPIDER-MAN- NO WAY HOME - Official Teaser Trailer (HD)_HD.mp4",
    views: "4.5M",
    uploadDate: "4 days ago",
    subscribers: "10.2M",
  },
  {
    id: 6,
    category: "Adventure",
    thumbnail: "https://cdn.pixabay.com/photo/2017/08/31/14/51/parachutes-2700972_640.jpg",
    title: "Trek into the Unknown",
    channelLogo: "https://cdn.pixabay.com/photo/2017/08/31/14/51/parachutes-2700972_640.jpg",
    channelName: "Outdoor Explorers",
    description: "A daring expedition into remote jungles and mountains.",
    videoFile: "Movies/Wilderness Adventures Trailer.mp4",
    views: "2.2M",
    uploadDate: "1 week ago",
    subscribers: "3.8M",
  },
  {
    id: 7,
    category: "Adventure",
    thumbnail: "https://cdn.pixabay.com/photo/2016/08/01/20/13/girl-1561989_640.jpg",
    title: "Call of the Wild",
    channelLogo: "https://cdn.pixabay.com/photo/2016/08/01/20/13/girl-1561989_640.jpg",
    channelName: "Untamed Spirit",
    description: "A story of survival against the odds in harsh wilderness.",
    videoFile: "Movies/Call of the Wild Official Trailer.mp4",
    views: "5M",
    uploadDate: "2 days ago",
    subscribers: "6M",
  },
  // ... Add additional entries for Adventure
  // Mystery
  {
    id: 2,
    category: "Mystery",
    thumbnail: "https://cdn.pixabay.com/photo/2016/08/16/17/32/hollywood-sign-1598473_1280.jpg",
    title: "Enigma of the Abyss",
    channelLogo: "https://cdn.pixabay.com/photo/2016/08/16/17/32/hollywood-sign-1598473_1280.jpg",
    channelName: "Mystic Horizons",
    description: "Discover the secrets of the deep and uncover the mysteries hidden within.",
    videoFile: "Movies/IRON MAN 4 - Teaser Trailer _ Robert Downey Jr. Returns as Tony Stark! _ Marvel _HD.mp4",
    views: "2.5M",
    uploadDate: "5 days ago",
    subscribers: "5.17M",
  },
  {
    id: 4,
    category: "Mystery",
    thumbnail: "https://cdn.pixabay.com/photo/2017/08/07/23/50/climbing-2609319_640.jpg",
    title: "Legends of the Forgotten Realm",
    channelLogo: "https://cdn.pixabay.com/photo/2017/08/07/23/50/climbing-2609319_640.jpg",
    channelName: "Fantasy Chronicles",
    description: "Step into a world of magic, myths, and legendary heroes.",
    videoFile: "Movies/Marvel Studios' AVENGERS 5- THE KANG DYNASTY - Teaser Trailer (2025)_HD.mp4",
    views: "2M",
    uploadDate: "7 days ago",
    subscribers: "2M",
  },
  {
    id: 8,
    category: "Mystery",
    thumbnail: "https://images.unsplash.com/photo-1511466431307-d603e868975c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWVzJTIwcG9zdGVyc3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Shadows in the Fog",
    channelLogo: "https://images.unsplash.com/photo-1511466431307-d603e868975c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWVzJTIwcG9zdGVyc3xlbnwwfHwwfHx8MA%3D%3D",
    channelName: "Hidden Truths",
    description: "Follow a detective unraveling a chilling conspiracy.",
    videoFile: "Movies/Shadows in the Fog.mp4",
    views: "3.1M",
    uploadDate: "6 days ago",
    subscribers: "8M",
  },
  {
    id: 9,
    category: "Mystery",
    thumbnail: "https://images.unsplash.com/photo-1535446937720-e4cad0145efe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9zdGVyfGVufDB8MHwwfHx8MA%3D%3D",
    title: "The Cipher",
    channelLogo: "https://images.unsplash.com/photo-1535446937720-e4cad0145efe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9zdGVyfGVufDB8MHwwfHx8MA%3D%3D",
    channelName: "Puzzling Realms",
    description: "Crack the code before time runs out.",
    videoFile: "Movies/The Cipher Trailer.mp4",
    views: "2.9M",
    uploadDate: "3 weeks ago",
    subscribers: "4M",
  },
  {
    id: 10,
    category: "Mystery",
    thumbnail: "https://images.unsplash.com/photo-1622629217820-436bbce004df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvc3RlcnxlbnwwfDB8MHx8fDA%3D",
    title: "Vanishing Point",
    channelLogo: "https://images.unsplash.com/photo-1622629217820-436bbce004df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvc3RlcnxlbnwwfDB8MHx8fDA%3D",
    channelName: "Beyond the Veil",
    description: "A journalist investigates a series of disappearances.",
    videoFile: "Movies/Vanishing Point.mp4",
    views: "1.5M",
    uploadDate: "8 days ago",
    subscribers: "2M",
  },
  // ... Add additional categories like "Comedy," "Drama," etc.

    // Comedy
    {
      id: 11,
      category: "Comedy",
      thumbnail: "https://img.freepik.com/premium-psd/multiple-photo-exposure-effect_95007-315.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      title: "Laughter Therapy",
      channelLogo: "https://img.freepik.com/premium-psd/multiple-photo-exposure-effect_95007-315.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      channelName: "Funny Folks",
      description: "A collection of hilarious skits and stand-up comedy.",
      videoFile: "Movies/Laughter Therapy.mp4",
      views: "8M",
      uploadDate: "2 days ago",
      subscribers: "3M",
    },
    {
      id: 12,
      category: "Comedy",
      thumbnail: "https://img.freepik.com/free-psd/banner-urban-music-design-template_23-2149081155.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      title: "Pranks Unlimited",
      channelLogo: "https://img.freepik.com/free-psd/banner-urban-music-design-template_23-2149081155.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      channelName: "Ultimate Pranks",
      description: "Watch the funniest pranks caught on camera.",
      videoFile: "Movies/Pranks Unlimited.mp4",
      views: "12M",
      uploadDate: "1 week ago",
      subscribers: "6.5M",
    },
    {
      id: 13,
      category: "Comedy",
      thumbnail: "https://img.freepik.com/free-psd/music-banner-design-template_23-2149081197.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      title: "Office Shenanigans",
      channelLogo: "https://img.freepik.com/free-psd/music-banner-design-template_23-2149081197.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      channelName: "Cubicle Comedy",
      description: "Hilarious misadventures in an office setting.",
      videoFile: "Movies/Office Shenanigans.mp4",
      views: "5.5M",
      uploadDate: "3 days ago",
      subscribers: "2.8M",
    },
    {
      id: 14,
      category: "Comedy",
      thumbnail: "https://img.freepik.com/free-psd/box-horizontal-banner-template_23-2148939305.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      title: "Quirky Neighbors",
      channelLogo: "https://img.freepik.com/free-psd/box-horizontal-banner-template_23-2148939305.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      channelName: "Laugh Riot",
      description: "Comedy revolving around eccentric neighbors.",
      videoFile: "Movies/Quirky Neighbors.mp4",
      views: "9M",
      uploadDate: "5 days ago",
      subscribers: "7M",
    },
    {
      id: 15,
      category: "Comedy",
      thumbnail: "https://img.freepik.com/free-psd/music-shop-horizontal-banner-template_23-2148855473.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      title: "Wedding Woes",
      channelLogo: "https://img.freepik.com/free-psd/music-shop-horizontal-banner-template_23-2148855473.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      channelName: "Marriage Mania",
      description: "A comedy about wedding preparations gone hilariously wrong.",
      videoFile: "Movies/Wedding Woes.mp4",
      views: "3.7M",
      uploadDate: "4 days ago",
      subscribers: "4.1M",
    },
    // Drama
    {
      id: 16,
      category: "Drama",
      thumbnail: "https://img.freepik.com/premium-psd/poster-design-template_528542-582.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      title: "Tears of the Heart",
      channelLogo: "https://img.freepik.com/premium-psd/poster-design-template_528542-582.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      channelName: "Heartstrings Studio",
      description: "A story of love and heartbreak that will move you.",
      videoFile: "Movies/Tears of the Heart.mp4",
      views: "4M",
      uploadDate: "6 days ago",
      subscribers: "5M",
    },
    {
      id: 17,
      category: "Drama",
      thumbnail: "https://img.freepik.com/free-vector/music-event-poster-template-with-abstract-shapes_1361-1316.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      title: "Shattered Dreams",
      channelLogo: "https://img.freepik.com/free-vector/music-event-poster-template-with-abstract-shapes_1361-1316.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      channelName: "Cinema Realms",
      description: "A poignant tale of overcoming life's challenges.",
      videoFile: "Movies/Shattered Dreams.mp4",
      views: "2.5M",
      uploadDate: "1 week ago",
      subscribers: "3.2M",
    },
    {
      id: 18,
      category: "Drama",
      thumbnail: "https://img.freepik.com/premium-psd/night-party-poster-template-instagram-image-multiple-sizes_574474-1786.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      title: "Echoes of Silence",
      channelLogo: "https://img.freepik.com/premium-psd/night-party-poster-template-instagram-image-multiple-sizes_574474-1786.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      channelName: "Emotive Frames",
      description: "A powerful story of resilience and redemption.",
      videoFile: "Movies/Echoes of Silence.mp4",
      views: "6.7M",
      uploadDate: "2 weeks ago",
      subscribers: "6.5M",
    },
    // Sci-Fi
    {
      id: 19,
      category: "Sci-Fi",
      thumbnail: "https://img.freepik.com/premium-psd/double-exposure-photo-effect_95007-693.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      title: "Parallel Dimensions",
      channelLogo: "https://img.freepik.com/premium-psd/double-exposure-photo-effect_95007-693.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      channelName: "Quantum Realities",
      description: "A mind-bending journey through alternate universes.",
      videoFile: "Movies/Parallel Dimensions.mp4",
      views: "8.1M",
      uploadDate: "5 days ago",
      subscribers: "7.2M",
    },
    {
      id: 20,
      category: "Sci-Fi",
      thumbnail: "https://img.freepik.com/free-psd/hiking-concept-banner-template_23-2148466881.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      title: "The Artificial Mind",
      channelLogo: "https://img.freepik.com/free-psd/hiking-concept-banner-template_23-2148466881.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      channelName: "Futurist Chronicles",
      description: "An exploration of artificial intelligence and humanity.",
      videoFile: "Movies/The Artificial Mind.mp4",
      views: "10M",
      uploadDate: "1 week ago",
      subscribers: "9M",
    },
    {
      id: 21,
      category: "Horror",
      thumbnail: "https://img.freepik.com/free-photo/anime-style-character-with-lit-candles_23-2151152211.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      title: "Nightmare Shadows",
      channelLogo: "https://img.freepik.com/free-photo/anime-style-character-with-lit-candles_23-2151152211.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      channelName: "Fear Factor",
      description: "A tale of haunting shadows that come alive at night.",
      videoFile: "",
      views: "3M",
      uploadDate: "2 days ago",
      subscribers: "1.8M",
    },
    {
      id: 22,
      category: "Horror",
      thumbnail: "https://img.freepik.com/free-photo/anime-landscape-person-traveling_23-2151038160.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      title: "The Haunted Manor",
      channelLogo: "https://img.freepik.com/free-photo/anime-landscape-person-traveling_23-2151038160.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      channelName: "Spooky Tales",
      description: "Explore a manor where no one leaves alive.",
      videoFile: "",
      views: "5M",
      uploadDate: "4 days ago",
      subscribers: "3.2M",
    },
    {
      id: 23,
      category: "Horror",
      thumbnail: "https://img.freepik.com/free-photo/medium-shot-anime-woman-hugging-dog_23-2150970682.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      title: "Evil Within",
      channelLogo: "https://img.freepik.com/free-photo/medium-shot-anime-woman-hugging-dog_23-2150970682.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      channelName: "Dark Realms",
      description: "Face your fears as evil manifests within.",
      videoFile: "",
      views: "7M",
      uploadDate: "1 week ago",
      subscribers: "4.5M",
    },
    // Romance
    {
      id: 24,
      category: "Romance",
      thumbnail: "https://img.freepik.com/free-photo/cartoon-woman-wearing-glasses_23-2151136851.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      title: "Love Beyond Borders",
      channelLogo: "https://img.freepik.com/free-photo/cartoon-woman-wearing-glasses_23-2151136851.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      channelName: "Romantic Escapes",
      description: "A story of love that knows no boundaries.",
      videoFile: "",
      views: "10M",
      uploadDate: "3 days ago",
      subscribers: "6M",
    },
    {
      id: 25,
      category: "Romance",
      thumbnail: "https://img.freepik.com/free-photo/fantasy-scene-with-surreal-elements-mystical-atmosphere_23-2151254529.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      title: "A Kiss in the Rain",
      channelLogo: "https://img.freepik.com/free-photo/fantasy-scene-with-surreal-elements-mystical-atmosphere_23-2151254529.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      channelName: "Heartfelt Stories",
      description: "A romantic journey begins with a kiss in the rain.",
      videoFile: "",
      views: "8.5M",
      uploadDate: "2 weeks ago",
      subscribers: "7.2M",
    },
    // Thriller
    {
      id: 26,
      category: "Thriller",
      thumbnail: "https://img.freepik.com/free-photo/3d-cartoon-character_23-2151021930.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      title: "The Chase",
      channelLogo: "https://img.freepik.com/free-photo/3d-cartoon-character_23-2151021930.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      channelName: "Adrenaline Rush",
      description: "A gripping story of survival and relentless pursuit.",
      videoFile: "",
      views: "12M",
      uploadDate: "5 days ago",
      subscribers: "9.1M",
    },
    {
      id: 27,
      category: "Thriller",
      thumbnail: "https://img.freepik.com/free-photo/3d-rendering-man-portrait_23-2150964650.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      title: "The Unseen Enemy",
      channelLogo: "https://img.freepik.com/free-photo/3d-rendering-man-portrait_23-2150964650.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      channelName: "Edge of Seat",
      description: "A man fights an invisible force threatening his family.",
      videoFile: "",
      views: "11M",
      uploadDate: "1 month ago",
      subscribers: "10M",
    },
    // Documentary
    {
      id: 28,
      category: "Documentary",
      thumbnail: "https://img.freepik.com/free-photo/cartoon-man-wearing-glasses_23-2151136784.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      title: "Planet Earth Reimagined",
      channelLogo: "https://img.freepik.com/free-photo/cartoon-man-wearing-glasses_23-2151136784.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      channelName: "Nature Chronicles",
      description: "Dive into the wonders of our planet like never before.",
      videoFile: "",
      views: "15M",
      uploadDate: "6 days ago",
      subscribers: "12M",
    },
    {
      id: 29,
      category: "Documentary",
      thumbnail: "https://img.freepik.com/free-photo/cartoon-ai-robot-scene_23-2151675088.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      title: "The Great Migration",
      channelLogo: "https://img.freepik.com/free-photo/cartoon-ai-robot-scene_23-2151675088.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      channelName: "Wildlife Tales",
      description: "Witness the breathtaking journey of migrating animals.",
      videoFile: "",
      views: "20M",
      uploadDate: "1 month ago",
      subscribers: "15M",
    },
    {
      id: 30,
      category: "Documentary",
      thumbnail: "https://img.freepik.com/premium-photo/3d-cg-person-anthropomorphism-character-object_1029469-95133.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      title: "Engineering Marvels",
      channelLogo: "https://img.freepik.com/premium-photo/3d-cg-person-anthropomorphism-character-object_1029469-95133.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      channelName: "Tech Wonders",
      description: "Explore the world's most stunning engineering feats.",
      videoFile: "",
      views: "18M",
      uploadDate: "2 months ago",
      subscribers: "14M",
    },
    {
      id: 31,
      category: "Comedy",
      thumbnail: "https://img.freepik.com/premium-photo/cute-mother-character-design-generative-ai_776674-593384.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      title: "Laugh Riot",
      channelLogo: "https://img.freepik.com/premium-photo/cute-mother-character-design-generative-ai_776674-593384.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      channelName: "Comedy Central",
      description: "A collection of the funniest moments captured on film.",
      videoFile: "",
      views: "6M",
      uploadDate: "1 day ago",
      subscribers: "3.5M",
    },
    {
      id: 32,
      category: "Comedy",
      thumbnail: "https://img.freepik.com/premium-photo/tree-water-with-moon-background_551707-9.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      title: "Pranksters Unleashed",
      channelLogo: "https://img.freepik.com/premium-photo/tree-water-with-moon-background_551707-9.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      channelName: "Joke Factory",
      description: "Hilarious pranks that will leave you in stitches.",
      videoFile: "",
      views: "8M",
      uploadDate: "5 days ago",
      subscribers: "4.8M",
    },
    // Sci-Fi
    {
      id: 33,
      category: "Sci-Fi",
      thumbnail: "https://img.freepik.com/premium-photo/blue-flower-is-top-mountain_681243-624.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      title: "The Quantum Paradox",
      channelLogo: "https://img.freepik.com/premium-photo/blue-flower-is-top-mountain_681243-624.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      channelName: "Future Chronicles",
      description: "A journey into the unknown dimensions of time and space.",
      videoFile: "",
      views: "12M",
      uploadDate: "3 days ago",
      subscribers: "8.1M",
    },
    {
      id: 34,
      category: "Sci-Fi",
      thumbnail: "https://img.freepik.com/premium-photo/digital-painting-tree-with-leaves-it_882186-143.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      title: "Alien Encounter",
     channelLogo: "https://img.freepik.com/premium-photo/digital-painting-tree-with-leaves-it_882186-143.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      channelName: "Galactic Explorers",
      description: "Discover what happens when humanity meets extraterrestrials.",
      videoFile: "",
      views: "9M",
      uploadDate: "1 week ago",
      subscribers: "5.9M",
    },
    // Animation
    {
      id: 35,
      category: "Animation",
      thumbnail: "https://img.freepik.com/premium-photo/beautiful-abstract-collection-with-black-fantasies-colorful-background-abstract-futuristic-background-isolated-background-beautiful-landscape-fantastic-landscape_155807-1323.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      title: "The Magical Forest",
      channelLogo: "https://img.freepik.com/premium-photo/beautiful-abstract-collection-with-black-fantasies-colorful-background-abstract-futuristic-background-isolated-background-beautiful-landscape-fantastic-landscape_155807-1323.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      channelName: "Toon World",
      description: "A whimsical animated tale of adventure and magic.",
      videoFile: "",
      views: "15M",
      uploadDate: "2 days ago",
      subscribers: "11M",
    },
    {
      id: 36,
      category: "Animation",
      thumbnail: "https://img.freepik.com/free-photo/half-rhino-half-robot-creature_23-2151730722.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      title: "Pixie Dust Chronicles",
      channelLogo: "https://img.freepik.com/free-photo/half-rhino-half-robot-creature_23-2151730722.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      channelName: "Cartoon Legends",
      description: "Follow the journey of a young pixie discovering her powers.",
      videoFile: "",
      views: "18M",
      uploadDate: "1 month ago",
      subscribers: "13M",
    },
    // Drama
    {
      id: 37,
      category: "Drama",
      thumbnail: "https://img.freepik.com/premium-photo/digital-art-album-art_31965-151715.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      title: "The Turning Point",
       channelLogo: "https://img.freepik.com/premium-photo/digital-art-album-art_31965-151715.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      channelName: "Emotive Tales",
      description: "A gripping drama about choices and consequences.",
      videoFile: "",
      views: "14M",
      uploadDate: "4 weeks ago",
      subscribers: "9M",
    },
    {
      id: 38,
      category: "Drama",
      thumbnail: "https://img.freepik.com/premium-photo/futuristic-medicine-bottle-generative-ai_170984-5010.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      title: "Through the Storm",
       channelLogo: "https://img.freepik.com/premium-photo/futuristic-medicine-bottle-generative-ai_170984-5010.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      channelName: "Cinematic Moments",
      description: "A tale of resilience and hope in the face of adversity.",
      videoFile: "",
      views: "20M",
      uploadDate: "6 days ago",
      subscribers: "12M",
    },
    // Action
    {
      id: 39,
      category: "Action",
      thumbnail: "https://img.freepik.com/free-photo/futuristic-half-robot-tiger_23-2151558805.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      title: "High Octane Chase",
      channelLogo: "https://img.freepik.com/free-photo/futuristic-half-robot-tiger_23-2151558805.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      channelName: "Action Arena",
      description: "A heart-pounding chase through the city streets.",
      videoFile: "",
      views: "22M",
      uploadDate: "2 days ago",
      subscribers: "18M",
    },
    {
      id: 40,
      category: "Action",
      thumbnail: "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Battlefield Legends",
      channelLogo: "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=400",
      channelName: "Heroic Saga",
      description: "The story of warriors fighting for glory and honor.",
      videoFile: "",
      views: "25M",
      uploadDate: "1 week ago",
      subscribers: "20M",
    },



  ];






// Extract video ID from query string
const urlParams = new URLSearchParams(window.location.search);
const videoId = parseInt(urlParams.get("id"), 10);

// Find the selected video
const selectedVideo = videos.find((video) => video.id === videoId);

// Update the main video element
if (selectedVideo) {
  document.getElementById("main-video").src = selectedVideo.videoFile; // Online link
  document.getElementById("video-title").textContent = selectedVideo.title;
  document.getElementById("channel-logo").src = selectedVideo.channelLogo;
  document.getElementById("channel-name").textContent = selectedVideo.channelName;
  document.getElementById("subscribers").textContent = selectedVideo.subscribers;

  console.log("Video source updated to:", selectedVideo.videoFile);
} else {
  console.error("Video not found");
}

// Function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

// Populate related videos
const relatedVideos = videos.filter(
  (video) => video.category === selectedVideo.category && video.id !== selectedVideo.id
);

// Shuffle the related videos to display them in a random sequence
const shuffledRelatedVideos = shuffleArray([...relatedVideos]);

const relatedVideosContainer = document.getElementById("related-videos");
relatedVideosContainer.innerHTML = ""; // Clear existing content

shuffledRelatedVideos.forEach((video) => {
  const card = document.createElement("div");
  card.className = "related-video-card";

  card.innerHTML = `
    <img src="${video.thumbnail}" alt="Thumbnail">
    <div>
      <p class="video-title">${video.title}</p>
      <div class="channel">
        <div class="channel-detail">
          <img src="${video.channelLogo}" alt="ChannelLogo">
          <p class="channel-name">${video.channelName}</p>
        <div/>
        <div>
          <p class="views-time">${video.views} • Streamed ${video.uploadDate}</p>
        <div/>
      </div>      
    </div>
  `;

  card.addEventListener("click", () => {
    window.location.href = `second.html?id=${video.id}`;
  });

  relatedVideosContainer.appendChild(card);
});

// Back button functionality
document.querySelector(".back-button").addEventListener("click", () => {
  window.location.href = "index.html";
});
