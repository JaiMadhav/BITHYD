# ZENSAFE+ Setup Instructions

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Audio Files Setup

The app expects audio files in `public/audio/` directory. For full functionality, add these files:

- `calm-nature.mp3`
- `rain.mp3`
- `river.mp3`
- `birds.mp3`
- `wind.mp3`
- `ocean.mp3`
- `forest.mp3`
- `lullaby.mp3`
- `tick.mp3`

**Note:** The app will work without these files, but audio buttons will show as unavailable.

## Icon Files Setup

Create PWA icons:

1. **icon-192.png** (192x192 pixels)
2. **icon-512.png** (512x512 pixels)
3. **favicon.ico**

Place these in the `public/` directory.

You can:
- Use online icon generators
- Create simple icons with your design tool
- Use the app name "ZENSAFE+" with a calming color scheme

## Building for Production

```bash
npm run build
npm start
```

## Testing PWA Features

1. Build the app: `npm run build`
2. Start the server: `npm start`
3. Open in Chrome/Edge
4. Open DevTools > Application > Service Workers (verify registration)
5. Test "Add to Home Screen" functionality

## Troubleshooting

### TypeScript Errors
If you see TypeScript errors about missing modules, run:
```bash
npm install
```

### Service Worker Not Registering
- Ensure you're using HTTPS or localhost
- Check browser console for errors
- Verify `public/sw.js` exists

### Audio Not Playing
- Add audio files to `public/audio/` directory
- Check browser console for audio errors
- Verify audio file formats are MP3

## Next Steps

1. Add your audio files
2. Create custom icons
3. Test all features on mobile devices
4. Deploy to your hosting provider
5. Test offline functionality
