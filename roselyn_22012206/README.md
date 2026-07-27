# Campus Connect — Navigation Lab (DCIT 324)

Built with **React Navigation** (Native Stack + Drawer + Bottom Tabs).

## Navigation Structure

```
Root Stack
├── Welcome
├── Main (renders Drawer only)
│    └── Drawer
│         ├── Dashboard (renders Bottom Tabs)
│         │    └── Tabs
│         │         ├── Home (renders nested Home Stack)
│         │         │    └── Stack: Feed → EventDetails
│         │         ├── Courses
│         │         ├── Timetable
│         │         └── Profile
│         ├── Announcements
│         ├── About
│         └── Help & Support
└── EditProfile
```

## Screens (10 total)

1. Welcome — app title + Get Started button
2. Dashboard (Tabs container)
3. Home / Feed — 5 dummy events, tap to view details
4. EventDetails — receives title/date/description via route params
5. Courses — 6 dummy courses (code, title, credit hours)
6. Timetable — 6 dummy entries (day, time, course, venue)
7. Profile — student info + Edit Profile button
8. EditProfile — pre-filled via route params, saves via Context + `goBack()`
9. Announcements — 5 dummy announcements
10. About — app name, tagline, developer name & student ID
11. Help & Support — 4 FAQs (expandable)

(11 screens implemented — one more than the minimum required 10.)

## Data Passing

- **Profile → EditProfile**: current name/bio/programme are passed as navigation
  params to pre-fill the form.
- **Feed → EventDetails**: each feed item's title/date/description are passed
  as navigation params.
- Saved profile edits are written back through a small `ProfileContext` so the
  Profile screen reflects the update immediately after `navigation.goBack()`.

## Getting Started

```bash
npm install
npx expo start
```

Scan the QR code with Expo Go (Android) or the Camera app (iOS), or press
`a` / `i` to launch an emulator/simulator.

## Project Structure

```
navigation/
  RootStack.js
  DrawerNavigator.js
  TabNavigator.js
  HomeStack.js
screens/
  WelcomeScreen.js
  EditProfileScreen.js
  AnnouncementsScreen.js
  AboutScreen.js
  HelpScreen.js
  CoursesScreen.js
  TimetableScreen.js
  ProfileScreen.js
  FeedScreen.js
  EventDetailsScreen.js
context/
  ProfileContext.js
data/
  dummyData.js
constants/
  theme.js
```
