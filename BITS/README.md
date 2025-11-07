# ZENSAFE+ - Emotional First Aid Web App

A complete, production-ready web application providing calm support and emotional first-aid for crisis-affected people.

## Features

✅ **Emotion Support Pages** - Tailored support for anxious, scared, sad, and lonely feelings
✅ **Guided Breathing Tool** - Interactive breathing exercises with visual cues
✅ **Grounding Exercise** - 5-4-3-2-1 grounding technique with step-by-step guidance
✅ **Kids Mode** - Child-friendly interface with balloon breathing, tap-stars game, and drawing board
✅ **Comfort Library** - Nature sounds and calming messages
✅ **Hope Circle** - Community healing guide for group sessions
✅ **Hope Helper Training** - Micro-learning modules to support others
✅ **Emergency Help** - Safety checklist, emergency contacts, and instant calm
✅ **PWA Support** - Installable and works offline after first load

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **TailwindCSS** - Styling
- **Framer Motion** - Smooth animations
- **HTML5 Canvas** - Drawing board for kids mode

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Audio Files

The app expects audio files in the `public/audio/` directory:

- `calm-nature.mp3` - Calming nature sounds
- `rain.mp3` - Rain sound
- `river.mp3` - River sound
- `birds.mp3` - Bird sounds
- `wind.mp3` - Wind sound
- `ocean.mp3` - Ocean waves
- `forest.mp3` - Forest ambience
- `lullaby.mp3` - Gentle lullaby for kids mode
- `tick.mp3` - Breathing tick sound

**Note:** For production use, add appropriate royalty-free audio files or generate them. The app gracefully handles missing audio files.

## Icons

The app expects PWA icons:
- `public/icon-192.png` (192x192)
- `public/icon-512.png` (512x512)
- `public/favicon.ico`

You can create these using any image editor or online icon generator.

## Features in Detail

### Home Page
- Large, calm buttons for different emotions
- Breathing background animation
- Quick access to all tools

### Emotion Support Pages
- Personalized affirmations for each emotion
- Breathing circle animation
- Audio support
- Grounding exercise links

### Guided Breathing
- Expanding circle animation
- Phase-based instructions (inhale/hold/exhale)
- Cycle counter
- Start/stop/reset controls

### Grounding (5-4-3-2-1)
- Step-by-step progression
- Visual progress indicators
- Calm, trauma-safe design

### Kids Mode
- Animal friend companions
- Balloon breathing animation
- Tap-to-add stars game
- HTML Canvas drawing board
- Gentle music player

### Comfort Library
- Multiple nature sound players
- Rotating comforting messages
- Safe place visuals

### Hope Circle
- Multi-step community session
- Timer for silent moments
- Step-by-step guidance

### Hope Helper Training
- Three micro-learning modules
- Progress tracking
- Completion certificate

### Emergency Help
- Instant calm breathing button
- Safety checklist
- Emergency call links (tel://)
- Women & child safety info
- Silent mode indicator

## Design Principles

- **Trauma-Safe**: Soft colors, gentle animations, no aggressive tones
- **Mobile-First**: Responsive design optimized for mobile devices
- **Offline-First**: PWA support with service worker caching
- **Accessible**: Large buttons, clear text, simple navigation
- **Humanistic**: Warm, compassionate language throughout

## Browser Support

- Modern browsers with ES6+ support
- Mobile browsers (iOS Safari, Chrome Mobile, etc.)
- PWA installation support in supported browsers

## License

This project is built for humanitarian use. Feel free to use and modify as needed.

## Notes

- No backend or database required
- All features work client-side
- No login or authentication needed
- Works offline after first load
- Audio files should be added for full functionality
