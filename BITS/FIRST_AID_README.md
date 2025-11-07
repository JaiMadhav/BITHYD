# Physical First Aid Module — ZENSAFE+

## Overview

The Physical First Aid module provides step-by-step interactive guides for handling common medical emergencies. This feature is designed to be:

- **Offline-first**: All content is stored locally, no internet dependency
- **Sequential navigation**: Users must complete steps in order (cannot skip)
- **Visual-friendly**: Each step includes a photo placeholder
- **Accessible**: Large fonts, clear instructions, simple language (6th-grade reading level)
- **Calm and non-panic**: Uses reassuring, clear language without medical jargon

## Features

- 8 complete emergency topics with detailed step-by-step instructions
- Progress tracking (saved locally in browser)
- Image placeholders for each step
- Emergency helpline quick access
- Safety disclaimers on every page
- Responsive design for mobile and desktop

## Emergency Topics

1. **Wound Care** - 6 steps
2. **Assessing an Injured Person** - 7 steps
3. **Heart Condition** - 7 steps
4. **Asthma** - 6 steps
5. **Bleeding** - 7 steps
6. **Burns** - 7 steps
7. **Fractures** - 6 steps
8. **Head Injury** - 7 steps

## How to Add or Replace Images

### Folder Structure

All first aid images should be placed in the following directory structure:

```
/public/images/firstaid/
  ├── wound-care/
  │   ├── step1.jpg
  │   ├── step2.jpg
  │   ├── step3.jpg
  │   ├── step4.jpg
  │   ├── step5.jpg
  │   └── step6.jpg
  ├── assessing-injured/
  │   ├── step1.jpg
  │   ├── step2.jpg
  │   ├── step3.jpg
  │   ├── step4.jpg
  │   ├── step5.jpg
  │   ├── step6.jpg
  │   └── step7.jpg
  ├── heart-condition/
  │   ├── step1.jpg
  │   ├── step2.jpg
  │   ├── step3.jpg
  │   ├── step4.jpg
  │   ├── step5.jpg
  │   ├── step6.jpg
  │   └── step7.jpg
  ├── asthma/
  │   ├── step1.jpg
  │   ├── step2.jpg
  │   ├── step3.jpg
  │   ├── step4.jpg
  │   ├── step5.jpg
  │   └── step6.jpg
  ├── bleeding/
  │   ├── step1.jpg
  │   ├── step2.jpg
  │   ├── step3.jpg
  │   ├── step4.jpg
  │   ├── step5.jpg
  │   ├── step6.jpg
  │   └── step7.jpg
  ├── burns/
  │   ├── step1.jpg
  │   ├── step2.jpg
  │   ├── step3.jpg
  │   ├── step4.jpg
  │   ├── step5.jpg
  │   ├── step6.jpg
  │   └── step7.jpg
  ├── fractures/
  │   ├── step1.jpg
  │   ├── step2.jpg
  │   ├── step3.jpg
  │   ├── step4.jpg
  │   ├── step5.jpg
  │   └── step6.jpg
  └── head-injury/
      ├── step1.jpg
      ├── step2.jpg
      ├── step3.jpg
      ├── step4.jpg
      ├── step5.jpg
      ├── step6.jpg
      └── step7.jpg
```

### File Naming Convention

- **Folder names**: Use lowercase with hyphens (e.g., `wound-care`, `head-injury`)
- **File names**: Use lowercase with hyphens (e.g., `step1.jpg`, `step2.jpg`)
- **No spaces**: All file and folder names must not contain spaces
- **Image format**: JPG, PNG, or WebP formats are supported

### Image Requirements

- **Recommended size**: 1200x800px or 16:9 aspect ratio
- **File size**: Optimize images to be under 500KB for faster loading
- **Content**: Images should clearly illustrate the step instruction
- **Accessibility**: Ensure images are clear and easy to understand

### Adding Images

1. Create the folder structure in `/public/images/firstaid/` if it doesn't exist
2. Add your images following the naming convention above
3. The app will automatically load images when they're available
4. If an image is missing, a placeholder will be shown with the expected path

## How to Edit or Add New Topics

### Editing Existing Topics

Edit the file: `/data/firstAid.ts`

1. Find the topic you want to edit in the `firstAidTopics` array
2. Modify the `title`, `emoji`, `steps`, or `color` properties
3. Each step has:
   - `number`: Step number (1, 2, 3, etc.)
   - `instruction`: The step instruction text
   - `imagePath`: Path to the image (update if you change folder structure)

Example:
```typescript
{
  id: 'wound-care',
  title: 'Wound Care',
  emoji: '🩹',
  steps: [
    {
      number: 1,
      instruction: 'Stop bleeding.',
      imagePath: '/images/firstaid/wound-care/step1.jpg',
    },
    // ... more steps
  ],
  color: 'from-red-100 to-pink-100',
}
```

### Adding New Topics

1. Open `/data/firstAid.ts`
2. Add a new object to the `firstAidTopics` array:

```typescript
{
  id: 'your-topic-id',  // lowercase, hyphenated
  title: 'Your Topic Title',
  emoji: '🔧',  // Choose appropriate emoji
  steps: [
    {
      number: 1,
      instruction: 'First step instruction.',
      imagePath: '/images/firstaid/your-topic-id/step1.jpg',
    },
    // Add more steps...
  ],
  color: 'from-blue-100 to-cyan-100',  // Pastel gradient
}
```

3. Create the corresponding image folder: `/public/images/firstaid/your-topic-id/`
4. Add images following the naming convention
5. The new topic will automatically appear on the main First Aid page

## Offline Behavior

- **Data Storage**: All step data is stored in `/data/firstAid.ts` and bundled with the app
- **Progress Tracking**: User progress is saved in browser `localStorage` (key: `firstaid-[topic-id]-step`)
- **No Internet Required**: Once the app is loaded, all first aid content works offline
- **Image Caching**: Images are cached by the browser after first load

## Accessibility Notes

### Font Sizes
- **Titles**: 3xl to 7xl (responsive)
- **Instructions**: 2xl to 5xl (responsive)
- **Buttons**: xl to 2xl (responsive)
- All text scales appropriately on mobile devices

### Contrast
- Light pastel backgrounds with dark text for readability
- High contrast buttons for important actions
- Clear visual hierarchy

### Text Length
- Instructions are kept short and simple
- Maximum 1-2 sentences per step
- 6th-grade reading level maintained

### Navigation
- Large, tappable buttons (minimum 44x44px on mobile)
- Clear visual feedback on interactions
- Sequential navigation prevents confusion

## Emergency Disclaimer

**⚠️ IMPORTANT SAFETY NOTICE:**

ZENSAFE+ First Aid does not replace professional medical help. Always call emergency services when possible.

- This module provides basic first aid guidance only
- It is not a substitute for professional medical training
- If a condition worsens or the victim becomes unresponsive, seek immediate medical help
- Always prioritize calling emergency services (112, 911, or local emergency number)

## Technical Details

### Files Structure

```
/data/
  └── firstAid.ts          # All topic data and steps

/app/firstaid/
  ├── page.tsx             # Main First Aid page (topic grid)
  └── [topic]/
      └── page.tsx         # Individual topic step-by-step page

/public/images/firstaid/   # Image storage (create manually)
  └── [topic-id]/
      └── stepN.jpg
```

### Key Features Implementation

- **Sequential Navigation**: Uses `useState` to track current step, prevents skipping
- **Progress Saving**: `localStorage` saves user progress per topic
- **Image Fallback**: Shows placeholder if image is missing
- **Responsive Design**: Tailwind CSS breakpoints for mobile/tablet/desktop
- **Animations**: Framer Motion for smooth transitions between steps

## Support

For questions or issues:
1. Check that image paths match the folder structure
2. Verify file names use lowercase and hyphens (no spaces)
3. Ensure images are in supported formats (JPG, PNG, WebP)
4. Clear browser cache if images don't update

---

**Last Updated**: 2024
**Version**: 1.0.0


