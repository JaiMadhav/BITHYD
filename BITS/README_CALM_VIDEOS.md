# Calm Videos - Kids Comfort Zone

## Overview

The Calm Videos section in Kids Comfort Zone provides soothing, child-friendly video content to help children relax and feel safe. This feature displays a grid of video cards that children can select to watch calming stories and animations.

## Video List

The following videos are currently configured in the application:

1. **The Sleepy Rocket Ship** 🚀
   - File: `/public/videos/sleepy-rocket-ship.mp4`
   - A gentle story about a rocket ship that helps children relax and prepare for sleep.

2. **Freddy The Frog** 🐸
   - File: `/public/videos/freddy-the-frog.mp4`
   - A calming story featuring Freddy the Frog and his peaceful adventures.

3. **The Littlest Police Dog** 🐕
   - File: `/public/videos/littlest-police-dog.mp4`
   - A comforting story about a small police dog who helps others feel safe.

4. **Benny The Sleepy Bulldozer** 🚜
   - File: `/public/videos/benny-sleepy-bulldozer.mp4`
   - A soothing story about Benny, a sleepy bulldozer, designed to help children wind down.

## How to Add Videos

### Step 1: Prepare Your Video File

1. Ensure your video file is in **MP4 format** (recommended for web compatibility).
2. Optimize the video for web:
   - Resolution: 720p or 1080p (avoid 4K for faster loading)
   - Codec: H.264
   - File size: Keep under 50MB per video for better performance
   - Duration: 5-15 minutes recommended for calm content

### Step 2: Add Video to Public Folder

1. Navigate to the `public` folder in your project root.
2. Create a `videos` folder if it doesn't exist:
   ```
   public/
     videos/
   ```
3. Place your video file in the `public/videos/` folder.
4. **Important**: Use lowercase file names with hyphens (no spaces):
   - ✅ Good: `sleepy-rocket-ship.mp4`
   - ❌ Bad: `Sleepy Rocket Ship.mp4` or `sleepy_rocket_ship.mp4`

### Step 3: Update the Videos Array

1. Open `app/kids/videos/page.tsx`
2. Locate the `videos` array (around line 7):
   ```typescript
   const videos = [
     { name: 'The Sleepy Rocket Ship', src: '/videos/sleepy-rocket-ship.mp4', emoji: '🚀' },
     // ... other videos
   ]
   ```
3. Add your new video object:
   ```typescript
   {
     name: 'Your Video Title',        // Display name (can have spaces)
     src: '/videos/your-file-name.mp4',  // Path relative to public folder
     emoji: '🎬'                      // Emoji icon for the video card
   }
   ```

### Step 4: Example - Adding a New Video

**File Structure:**
```
public/
  videos/
    sleepy-rocket-ship.mp4
    freddy-the-frog.mp4
    littlest-police-dog.mp4
    benny-sleepy-bulldozer.mp4
    new-calm-story.mp4          ← Your new video
```

**Code Update:**
```typescript
const videos = [
  { name: 'The Sleepy Rocket Ship', src: '/videos/sleepy-rocket-ship.mp4', emoji: '🚀' },
  { name: 'Freddy The Frog', src: '/videos/freddy-the-frog.mp4', emoji: '🐸' },
  { name: 'The Littlest Police Dog', src: '/videos/littlest-police-dog.mp4', emoji: '🐕' },
  { name: 'Benny The Sleepy Bulldozer', src: '/videos/benny-sleepy-bulldozer.mp4', emoji: '🚜' },
  { name: 'New Calm Story', src: '/videos/new-calm-story.mp4', emoji: '📖' },  // ← New video
]
```

## File Path Structure

```
BITSHYD/
  public/
    videos/
      sleepy-rocket-ship.mp4
      freddy-the-frog.mp4
      littlest-police-dog.mp4
      benny-sleepy-bulldozer.mp4
  app/
    kids/
      videos/
        page.tsx          ← Video component and array
```

## Video Requirements

### Content Guidelines

- **Age-appropriate**: Suitable for children ages 3-12
- **Calming tone**: Soft, gentle narration and visuals
- **No distressing content**: Avoid scary, loud, or overwhelming elements
- **Positive messaging**: Focus on safety, comfort, and peace
- **Duration**: 5-15 minutes recommended

### Technical Requirements

- **Format**: MP4 (H.264 codec)
- **Resolution**: 720p (1280x720) or 1080p (1920x1080)
- **Aspect Ratio**: 16:9 (landscape) recommended
- **File Size**: Under 50MB per video
- **Audio**: Clear, soft narration or gentle background music
- **Subtitles**: Optional but recommended for accessibility

## Video Player Features

The video player includes:

- **Play/Pause Control**: Start and stop video playback
- **Mute/Unmute**: Toggle audio on or off
- **Fullscreen Mode**: Expand video to full screen
- **Auto-loop**: Videos loop automatically when they end
- **Mobile-friendly**: Responsive design for all devices

## Accessibility

- Videos are muted by default to prevent unexpected sounds
- Large, clear buttons for easy interaction
- Simple navigation with back button
- Works offline once videos are cached

## Troubleshooting

### Video Not Playing

1. **Check file path**: Ensure the path in `src` matches the file location in `public/videos/`
2. **File format**: Verify the video is in MP4 format
3. **File name**: Use lowercase with hyphens (e.g., `my-video.mp4`)
4. **Browser cache**: Clear browser cache and reload

### Video Loading Slowly

1. **File size**: Compress video to reduce file size
2. **Resolution**: Lower resolution (720p instead of 1080p)
3. **Codec**: Ensure H.264 codec is used

### Video Not Visible

1. **File exists**: Check that the file exists in `public/videos/`
2. **Path correct**: Verify the path starts with `/videos/` (not `/public/videos/`)
3. **File permissions**: Ensure file has read permissions

## Best Practices

1. **Test locally**: Always test videos in your development environment before deploying
2. **Optimize files**: Compress videos to balance quality and file size
3. **Consistent naming**: Use consistent naming conventions (lowercase, hyphens)
4. **Update emojis**: Choose appropriate, child-friendly emojis for each video
5. **Regular updates**: Keep video content fresh and relevant

## Safety Disclaimer

**Important**: All videos in the Kids Comfort Zone are intended for educational and calming purposes. Ensure all video content:

- Is age-appropriate
- Contains no distressing or harmful content
- Promotes positive, calming messages
- Respects children's emotional well-being

ZENSAFE+ does not host or provide video content. All videos must be added manually by administrators who are responsible for ensuring content safety and appropriateness.

## Support

For questions or issues related to adding videos:

1. Check this README for common solutions
2. Verify file paths and naming conventions
3. Test video playback in different browsers
4. Ensure video files meet technical requirements

---

**Last Updated**: 2024
**Location**: `app/kids/videos/page.tsx`
**Public Folder**: `public/videos/`


