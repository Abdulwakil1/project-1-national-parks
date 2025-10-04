# WEB103 Project 1 - _National Parks Explorer_

Submitted by: **Abdul Wakil Najibi**

About this web app: **National Parks Explorer is a sleek, modern web application where users can discover and explore U.S. National Parks. The homepage features a cinematic hero with responsive park cards. Users can click on each park card to view a detailed page with a larger image, park information, and descriptions. The design emphasizes readability, a friendly user experience, and a clean modern theme using Tailwind CSS with light custom global styles.**

Time spent: **Approximately 30–40 hours**

---

## Required Features

The following **required** functionality is completed:

- [x] **The web app uses only HTML, CSS (Tailwind + minimal global CSS), and JavaScript without a frontend framework**
- [x] **The web app displays a title**
- [x] **The web app displays at least five unique list items, each with at least three displayed attributes (title, state, and image with description)**
- [x] **The user can click on each item in the list to see a detailed view of it, including all database fields**
- [x] **Each detail view has a unique endpoint (e.g., `/parks/1`, `/parks/2`)**
- [x] **The web app serves an appropriate 404 page when no matching route is defined**
- [x] **The web app is styled using Tailwind (instead of PicoCSS)**

---

The following **optional** features are implemented:

- [x] Park items are displayed as **responsive cards** with hover effects rather than plain lists
- [x] Hero background with gradient overlay creates a **cinematic landing experience**
- [x] Cards and header include **translucent overlays** for better readability
- [x] Smooth scrolling and fixed background for modern feel

---

The following **additional** features are implemented:

- [x] **“Home” button** reliably scrolls back to the top hero section from any page
- [x] **“View All” button** displays all park cards directly from the details page
- [x] **Factual, extended descriptions** for each park to make content informative and engaging
- [x] **8 U.S. National Parks included** (Yellowstone, Yosemite, Grand Canyon, Zion, Glacier, Acadia, Rocky Mountain, Everglades)
- [x] **Consistent typography** (Merriweather for titles, Inter for body text) to enhance readability and design coherence
- [x] **Fully responsive design** with cards adapting from 2 → 3 → 4 per row depending on screen size
- [x] **Hover effects** on cards and buttons for polished interactivity
- [x] **Custom error handling** for missing or invalid routes
- [x] Sleek, minimalist UI with **dark background theme** to make park images pop

---

## Video Walkthrough

## Demo

![App Demo](./docs/demo.gif)

Here’s a walkthrough of implemented required features:

<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with … Add GIF tool here  
(Examples: [Kap](https://getkap.co/) for macOS, [ScreenToGif](https://www.screentogif.com/) for Windows, [peek](https://github.com/phw/peek) for Linux)

---

## Notes

Some challenges included:

- Ensuring the **hero background only applied to the homepage** without affecting the details page.
- Balancing **text readability vs. image visibility** with gradient overlays.
- Debugging static file paths for images served from `public/` and Express.
- Designing a **responsive grid** that feels cinematic but not overcrowded (settled on 2–3–4 column layout).
- Implementing **smooth navigation** back to homepage and consistent “View All” functionality.
- Carefully fine-tuning the **UX and aesthetics** to keep the project modern, minimal, and user-friendly.

---

## License

Copyright 2025 Abdul Wakil Najibi

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
