// Create this file: src/data/games-data.js
// This file organizes all your game data based on the folder structure

// Platyfa images
import PlatyfaImg0 from '../img/games/platyfa/img_00.png';
import PlatyfaImg1 from '../img/games/platyfa/img_01.png';
import PlatyfaImg2 from '../img/games/platyfa/img_02.png';
import PlatyfaImg3 from '../img/games/platyfa/img_03.png';
import PlatyfaImg4 from '../img/games/platyfa/img_04.png';
import PlatyfaImg5 from '../img/games/platyfa/img_05.png';
import PlatyfaImg6 from '../img/games/platyfa/img_06.png';
import PlatyfaImg7 from '../img/games/platyfa/img_07.png';
import PlatyfaImg8 from '../img/games/platyfa/img_08.png';
import PlatyfaMainBg from '../img/games/platyfa/MainBackGroundV1_02.jpg';

// Procrastinate images  
import ProcrastinateImg1 from '../img/games/procrastinate/img_01.png';
import ProcrastinateImg2 from '../img/games/procrastinate/img_02.png';
import ProcrastinateImg3 from '../img/games/procrastinate/img_03.png';
import ProcrastinateImg4 from '../img/games/procrastinate/img_04.png';
import ProcrastinateImg5 from '../img/games/procrastinate/img_05.png';
import ProcrastinateLevel from '../img/games/procrastinate/level_selector.png';
import ProcrastinateMain from '../img/games/procrastinate/main_title.png';

// Robotic Slaughter images
import RoboticImg0 from '../img/games/robotic_slaughter/img_0.png';
import RoboticImg1 from '../img/games/robotic_slaughter/img_01.png';
import RoboticImg2 from '../img/games/robotic_slaughter/img_02.png';
import RoboticImg3 from '../img/games/robotic_slaughter/img_03.png';
import RoboticMain from '../img/games/robotic_slaughter/main_title.png';

// Samurais vs Mongoles images
import SamuraiMain from '../img/games/samurais_vs_mongoles/SvsM.png';
import SamuraiImg1 from '../img/games/samurais_vs_mongoles/SvsM_1.png';
import SamuraiImg2 from '../img/games/samurais_vs_mongoles/SvsM_2.png';
import SamuraiImg3 from '../img/games/samurais_vs_mongoles/SvsM_3.png';
import SamuraiImg4 from '../img/games/samurais_vs_mongoles/SvsM_4.png';

// Other games
import DefuseBombImg from '../img/games/_other_games/debuse_the_bomb.png';
import DefuseBombImg2 from '../img/games/_other_games/defuse_the_bomb_2.png';
import DraculaeImg from '../img/games/_other_games/draculae.png';
import ShucosImg from '../img/games/_other_games/shucos_maker.png';

// Games data structure organized by folders
export const gamesData = [
  {
    id: 'platyfa',
    folder: 'platyfa',
    title: 'Platyfa',
    subtitle: 'Goldenfy Studios - Action Adventure',
    description: 'An innovative action-adventure game with unique platforming mechanics, immersive storytelling, and stunning visual design. Features dynamic combat system and exploration-based gameplay.',
    longDescription: 'Platyfa represents our flagship project at Goldenfy Studios. This action-adventure game combines traditional platforming with innovative mechanics that challenge player expectations. The game features a rich narrative, diverse environments, and a unique art style that brings the world to life.',
    status: 'In Development',
    category: 'Action/Adventure',
    platform: 'PC',
    year: '2024-2025',
    coverImage: PlatyfaImg0,
    screenshots: [
      PlatyfaImg0, PlatyfaImg1, PlatyfaImg2, PlatyfaImg3, 
      PlatyfaImg4, PlatyfaImg5, PlatyfaImg6, PlatyfaImg7, PlatyfaImg8
    ],
    backgroundImage: PlatyfaMainBg,
    link: '/games/platyfa',
    featured: true,
    technologies: ['Unity', 'C#', 'Blender', 'Photoshop', 'New Input System', 'FMOD', 'Custom Editor Build Tools'],
    team: 'Goldenfy Studios Team',
    teamSize: '5 developers',
    development: {
      startDate: '2024-01',
      progress: 75,
      estimatedRelease: 'Q3 2025'
    },
    features: [
      'Dynamic Combat System',
      'Exploration-based Gameplay',
      'Rich Narrative',
      'Unique Art Style',
      'Multiple Environments'
    ]
  },
  {
    id: 'procrastinate',
    folder: 'procrastinate',
    title: 'Procrastinate',
    subtitle: 'Productivity Puzzle Game',
    description: 'A unique puzzle game designed to help players overcome procrastination through engaging gameplay mechanics and psychological insights.',
    longDescription: 'Procrastinate is an educational puzzle game that addresses the real-world issue of procrastination. Through carefully designed levels and mechanics, players learn productivity techniques while having fun. The game combines entertainment with practical life skills.',
    status: 'Released',
    category: 'Puzzle/Educational',
    platform: 'PC/Web',
    year: '2024',
    coverImage: ProcrastinateMain,
    screenshots: [
      ProcrastinateMain, ProcrastinateLevel, ProcrastinateImg1, 
      ProcrastinateImg2, ProcrastinateImg3, ProcrastinateImg4, ProcrastinateImg5
    ],
    backgroundImage: ProcrastinateMain,
    link: '/games/procrastinate',
    featured: true,
    technologies: ['Unity', 'C#', 'Development'],
    team: 'University Project (and then Goldenfy Studios Team)',
    teamSize: '1 developer',
    development: {
      startDate: '2023-01',
      progress: 100,
      releaseDate: '2023-08'
    },
    features: [
      'Psychology-based Mechanics',
      'Progressive Difficulty',
      'Educational Content',
      'Achievement System',
      'Time Management Tools'
    ]
  },
  {
    id: 'robotic-slaughter',
    folder: 'robotic_slaughter',
    title: 'Robotic Slaughter',
    subtitle: 'Sci-Fi Action Shooter',
    description: 'Fast-paced action shooter featuring intense robot combat, advanced AI enemies, and adrenaline-pumping gameplay mechanics.',
    longDescription: 'Robotic Slaughter is a high-octane action shooter that pits players against waves of robotic enemies. The game features advanced AI, destructible environments, and a variety of weapons. Developed as a university project, it showcases technical skills in AI programming and game mechanics.',
    status: 'Paused',
    category: 'Action/Shooter',
    platform: 'PC',
    year: '2019',
    coverImage: RoboticMain,
    screenshots: [
      RoboticMain, RoboticImg0, RoboticImg1, RoboticImg2, RoboticImg3
    ],
    backgroundImage: RoboticMain,
    link: '/games/robotic-slaughter',
    featured: true,
    technologies: ['Unity', 'C#', 'AI Programming', 'Pixel Art', 'Photoshop'],
    team: 'Solo Project (and then Goldenfy Studios Team)',
    teamSize: '3 students',
    development: {
      startDate: '2022-03',
      progress: 100,
      completionDate: '2022-06'
    },
    features: [
      'Advanced Enemy AI',
      'Multiple Weapon Types',
      'Destructible Environments',
      'Wave-based Combat',
      'Score System'
    ]
  },
  {
    id: 'samurais-vs-mongoles',
    folder: 'samurais_vs_mongoles',
    title: 'Samurais vs Mongoles',
    subtitle: 'Historical Strategy Game',
    description: 'Epic historical strategy game featuring tactical battles between samurai warriors and mongol forces in feudal Japan.',
    longDescription: 'This strategy game recreates the historical conflicts between samurai and mongol forces. Players command armies, manage resources, and engage in tactical battles. The game emphasizes historical accuracy while providing engaging strategic gameplay.',
    status: 'Prototype',
    category: 'Strategy/Historical',
    platform: 'PC',
    year: '2024',
    coverImage: SamuraiMain,
    screenshots: [SamuraiMain, SamuraiImg1, SamuraiImg2, SamuraiImg3, SamuraiImg4],
    backgroundImage: SamuraiMain,
    link: '/games/samurais-vs-mongoles',
    featured: false,
    technologies: ['Unity', 'C#', 'Strategy AI'],
    team: 'University Project',
    teamSize: '4 students',
    development: {
      startDate: '2022-08',
      progress: 100,
      completionDate: '2022-12'
    },
    features: [
      'Turn-based Strategy',
      'Historical Accuracy',
      'Unit Management',
      'Tactical Combat',
      'Campaign Mode'
    ]
  },
  {
    id: 'defuse-the-bomb',
    folder: '_other_games',
    title: 'Defuse the Bomb',
    subtitle: 'Puzzle/Arcade Game',
    description: 'Intense puzzle game where players must defuse complex bombs under extreme time pressure using logic and quick thinking.',
    longDescription: 'Developed during a hackathon, this game challenges players to defuse increasingly complex bombs. Each level presents unique puzzle mechanics and time constraints, creating a thrilling experience that tests both logic and reflexes.',
    status: 'Completed',
    category: 'Puzzle/Arcade',
    platform: 'PC',
    year: '2025',
    coverImage: DefuseBombImg2,
    screenshots: [DefuseBombImg, DefuseBombImg2],
    backgroundImage: DefuseBombImg2,
    link: '/games/defuse-the-bomb',
    featured: false,
    technologies: ['Unity', 'C#', ' Development'],
    team: 'Hackathon Project',
    teamSize: '2 developers',
    development: {
      startDate: '2021-10',
      progress: 100,
      completionDate: '2021-10',
      developmentTime: '48 hours'
    },
    features: [
      'Time-based Puzzles',
      'Progressive Difficulty',
      ' Optimized',
      'Leaderboard System',
      'Quick Play Mode'
    ]
  },
  {
    id: 'draculae',
    folder: '_other_games',
    title: 'Draculae',
    subtitle: 'Multiplayer',
    description: 'You’re stealing gold in a cave with your partner when you realize there’s a massive dragon right next to you! But it’s still asleep.',
    longDescription: 'You’re stealing gold in a cave with your partner when you realize there’s a massive dragon right next to you! But it’s still asleep.',
    status: 'Prototype',
    category: 'Adventure',
    platform: 'PC',
    year: '2025',
    coverImage: DraculaeImg,
    screenshots: [DraculaeImg],
    backgroundImage: DraculaeImg,
    link: '/games/draculae',
    featured: false,
    technologies: ['Unity', 'C#', 'Development'],
    team: 'Personal Project',
    teamSize: '1 developer',
    development: {
      startDate: '2021-05',
      progress: 40,
      status: 'On Hold'
    },
    features: [
      'Atmospheric Horror',
      'Dynamic Lighting',
      'Audio-driven Gameplay',
      'Gothic Art Style',
      'Narrative Focus'
    ]
  },
  {
    id: 'shucos-maker',
    folder: '_other_games',
    title: 'Shucos Maker',
    subtitle: 'Cultural Cooking Simulation',
    description: 'Fun cooking simulation game celebrating traditional Guatemalan street food culture with authentic recipes and cooking mechanics.',
    longDescription: 'Shucos Maker is a cultural project that celebrates Guatemalan street food tradition. Players learn to prepare traditional shucos while experiencing the vibrant culture. The game combines education with entertainment, promoting cultural awareness.',
    status: 'Paused',
    category: 'Simulation/Cultural',
    platform: 'PC/VR',
    year: '2022',
    coverImage: ShucosImg,
    screenshots: [ShucosImg],
    backgroundImage: ShucosImg,
    link: '/games/shucos-maker',
    featured: false,
    technologies: ['Unity', 'C#', 'Cultural Research', 'VR Development', 'Blender', 'Oculus Integration'],
    team: 'Cultural Project',
    teamSize: '2 developers',
    development: {
      startDate: '2022-06',
      progress: 100,
      completionDate: '2023-10'
    },
    features: [
      'Authentic Recipes',
      'Cultural Education',
      'Cooking Mechanics',
      'Local Ingredients',
      'Traditional Music'
    ]
  }
];

// Background carousel images for hero section
export const backgroundImages = [
  PlatyfaMainBg,
  ProcrastinateMain,
  RoboticMain,
  SamuraiMain,
  PlatyfaImg1,
  ProcrastinateImg1,
  RoboticImg1
];

// Game categories for filtering
export const gameCategories = [
  'all',
  'featured',
  'in development',
  'released',
  'completed',
  'prototype',
  'paused',
];

// Game statistics
export const gameStats = {
  totalGames: gamesData.length,
  yearsExperience: new Date().getFullYear() - 2020,
  studiosCreated: 1,
  collaborations: gamesData.filter(game => game.teamSize !== '1 developer').length
};