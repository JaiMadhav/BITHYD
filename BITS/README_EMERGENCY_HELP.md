# Emergency Help Module — Government Schemes & NGO Support

## Overview

The Emergency Help module has been expanded to include two new informational subsections:

1. **Government Schemes & Programs** — Provides information about central and state-level government initiatives for disaster relief, financial aid, healthcare, and rehabilitation.

2. **NGOs & Local Mental Health Clinics** — Directory of trusted NGOs, volunteer groups, and clinics providing on-ground help, counselling, and post-crisis rehabilitation.

Both sections are fully **offline-accessible** and designed to work without internet connectivity, making them essential during disaster situations.

---

## Feature Structure

### Location
- **Main Page**: `app/emergency/page.tsx`
- **Data File**: `data/emergencyHelpData.ts`

### Access Points
1. **Government Relief Schemes** card on Emergency Help homepage
2. **NGOs & Local Support** card on Emergency Help homepage

Each card opens a scrollable modal with detailed information.

---

## Government Schemes & Programs

### Data Structure

Located in: `data/emergencyHelpData.ts`

```typescript
interface GovernmentScheme {
  name: string
  description: string
  supportType: string[]
  eligibility: string[]
  applyThrough: string[]
  website?: string
  helpline?: string
}
```

### Current Schemes (8 Demo Entries)

1. **NDMA Disaster Assistance Program**
   - Support: Cash, Shelter, Medical kits
   - Apply: Local Collector's Office, NDMA helpline, Online portal

2. **Prime Minister's National Relief Fund (PMNRF)**
   - Support: Monetary relief
   - Apply: Online portal, District Collector's Office

3. **Aapda Mitra Scheme**
   - Support: Volunteer training, Equipment
   - Apply: NDMA website, District Headquarters

4. **National Disaster Response Force (NDRF) Welfare Fund**
   - Support: Health, Education, Rehabilitation
   - Apply: NDRF Website, Relief Center

5. **State Relief & Rehabilitation Program**
   - Support: Housing, Ration, Clothing
   - Apply: Local District Collectorate

6. **Pradhan Mantri Awas Yojana (Gramin)**
   - Support: Construction aid
   - Apply: Block Office, Gram Panchayat

7. **Jeevan Jyoti Bima Yojana**
   - Support: Life insurance
   - Apply: Partner banks, CSCs

8. **PM Fasal Bima Yojana**
   - Support: Agricultural recovery
   - Apply: Agriculture Department, CSCs

### UI Features

- **Scrollable modal** with all schemes
- **Color scheme**: Amber/Orange gradients (soft pastel tones)
- **Each scheme card displays**:
  - Name
  - Description (2-3 lines)
  - Type of Support (badges)
  - Eligibility (bullet list)
  - How to Apply (bullet list)
  - Action buttons (Call, Visit Website)
- **Footer line**: "Government and community support systems exist to help you rebuild safely — reach out when you can."

---

## NGOs & Local Support

### Data Structure

Located in: `data/emergencyHelpData.ts`

```typescript
interface NGO {
  name: string
  description: string
  serviceType: string[]
  contact: string
  website?: string
  location?: string
  whatsapp?: string
}
```

### Service Type Filters

- **All** 🌐 — Show all NGOs
- **Mental Health** 🧠 — Mental health and counselling services
- **Medical / First Aid** 🏥 — Medical and health services
- **Animal & Environmental Relief** 🐾 — Animal welfare and environmental support
- **Food / Shelter** 🍲 — Relief and rehabilitation services

### Current NGOs (8 Demo Entries)

1. **AASRA Helpline** — 24/7 emotional support and suicide prevention
2. **The Banyan** — Community mental health services
3. **Blue Cross of India** — Animal rescue and shelter
4. **Goonj** — Disaster rehabilitation
5. **Smile Foundation** — Medical camps and educational relief
6. **People for Animals (PFA)** — Nationwide animal rescue
7. **Snehi Clinic** — Affordable counselling (New Delhi)
8. **NIMHANS** — Trauma and mental health support (Bengaluru)

### UI Features

- **Filter buttons** at top for service types
- **Scrollable modal** with filtered NGO list
- **Color scheme**: Blue/Cyan gradients (soft pastel tones)
- **Each NGO card displays**:
  - Name
  - Description (1-2 lines)
  - Service Type (badges)
  - Location (if available)
  - Action buttons (Call, Visit Website, WhatsApp)
- **Footer line**: "You are not alone — people and organizations are here to help you heal."

---

## How to Update Content

### Adding a New Government Scheme

Edit `data/emergencyHelpData.ts`:

```typescript
{
  name: 'Scheme Name',
  description: 'Brief 2-3 line description.',
  supportType: ['Type 1', 'Type 2'],
  eligibility: [
    'Eligibility criterion 1',
    'Eligibility criterion 2',
  ],
  applyThrough: [
    'Method 1',
    'Method 2',
  ],
  website: 'scheme.gov.in', // Optional
  helpline: '1800-XXX-XXXX', // Optional
}
```

Add to `governmentSchemes` array.

### Adding a New NGO

Edit `data/emergencyHelpData.ts`:

```typescript
{
  name: 'NGO Name',
  description: 'Brief 1-2 line description.',
  serviceType: ['Mental Health'], // Must match filter categories
  contact: '+91 XXXXXXXXXX',
  website: 'ngoname.org', // Optional
  location: 'City, State', // Optional
  whatsapp: '+91 XXXXXXXXXX', // Optional
}
```

Add to `ngos` array.

### Service Type Categories

For NGO filtering, use these service types:

- **Mental Health**: `'Mental Health'`, `'Local Mental Health'`, `'Clinical Support'`
- **Medical**: `'Health & Education'`
- **Animal**: `'Animal Relief'`, `'Animal Welfare'`
- **Food/Shelter**: `'Relief & Rehabilitation'`

---

## File Structure

```
data/
  └── emergencyHelpData.ts    # All scheme and NGO data

app/
  └── emergency/
      └── page.tsx             # Main emergency page with modals
```

---

## Offline Design

### Key Features

1. **No API calls** — All data is preloaded from TypeScript file
2. **Static content** — Information is embedded in the app bundle
3. **Works offline** — No internet required to view schemes or NGOs
4. **Fast loading** — Instant access to information

### Future Enhancement

Optional "Update Data" button can be added for future online refresh functionality (not currently implemented).

---

## Accessibility

### Design Considerations

- **High contrast** — Text colors ensure readability on light backgrounds
- **Responsive fonts** — Scales from mobile to desktop
- **Touch-friendly** — Large buttons and tap targets
- **Keyboard navigation** — Modal can be closed with ESC key
- **Screen reader friendly** — Semantic HTML and ARIA labels

### Mobile Optimization

- **Responsive layout** — Adapts to all screen sizes
- **Scrollable modals** — Max height with internal scrolling
- **Touch interactions** — Call buttons open phone dialer
- **Filter buttons** — Easy to tap and select

---

## UI/UX Design

### Color Scheme

- **Government Schemes**: Amber/Orange gradients (`from-amber-50 to-orange-50`)
- **NGOs**: Blue/Cyan gradients (`from-blue-50 to-cyan-50`)
- **Buttons**: White background with colored borders
- **Hover effects**: Border color change and shadow increase

### Animations

- **Modal entrance**: Fade in with scale animation
- **Card entrance**: Staggered fade-in for list items
- **Button interactions**: Scale on hover/tap
- **Smooth transitions**: All state changes animated

### Typography

- **Headings**: `text-2xl sm:text-3xl md:text-4xl` (responsive)
- **Body text**: `text-base sm:text-lg md:text-xl` (responsive)
- **Labels**: `text-sm sm:text-base md:text-lg` (responsive)

---

## Safety Disclaimer

> **ZENSAFE+ does not verify or endorse listed organizations. Information is provided for educational and awareness purposes only.**

### Important Notes

1. **Contact information** may change — users should verify before contacting
2. **Scheme details** are for reference — actual eligibility and application processes may vary
3. **NGO services** are listed for awareness — ZENSAFE+ does not guarantee availability or quality
4. **Emergency situations** — Always call official emergency numbers (112, 108) for immediate help

---

## Technical Implementation

### State Management

```typescript
const [showGovernmentSchemes, setShowGovernmentSchemes] = useState(false)
const [showNGOs, setShowNGOs] = useState(false)
const [selectedServiceType, setSelectedServiceType] = useState<string>('all')
```

### Modal Components

- **Government Schemes Modal**: Displays all schemes in scrollable list
- **NGOs Modal**: Displays filtered NGOs based on service type selection

### Event Handlers

- **Call buttons**: `window.location.href = tel:...`
- **Website buttons**: `window.open('https://...', '_blank')`
- **WhatsApp buttons**: `window.open('https://wa.me/...', '_blank')`

---

## Testing Checklist

- [ ] Government Schemes modal opens and displays all schemes
- [ ] NGO modal opens and displays all NGOs
- [ ] Filter buttons work correctly (All, Mental Health, Medical, Animal, Food)
- [ ] Call buttons open phone dialer
- [ ] Website buttons open in new tab
- [ ] WhatsApp buttons open WhatsApp (if installed)
- [ ] Modals close on backdrop click
- [ ] Modals close on "Back" button
- [ ] Content is readable on mobile devices
- [ ] Scrollable content works smoothly
- [ ] Footer lines display correctly

---

## Future Enhancements

1. **Search functionality** — Search schemes/NGOs by name or keyword
2. **Location-based filtering** — Filter NGOs by state/city
3. **Favorites** — Save frequently accessed schemes/NGOs
4. **Update data button** — Refresh content from online source (optional)
5. **Share functionality** — Share scheme/NGO information via SMS/WhatsApp
6. **Offline map integration** — Show NGO locations on map (if available)

---

## Support

For questions or issues related to the Emergency Help module:

1. Check this README for update instructions
2. Verify data file structure matches TypeScript interfaces
3. Ensure all imports are correct in `app/emergency/page.tsx`
4. Test on multiple devices and screen sizes

---

**Last Updated**: Emergency Help module updated with Government Schemes and NGO Support directories.

