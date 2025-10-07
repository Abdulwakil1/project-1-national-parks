# WEB103 Project 2 - National Parks Explorer

Submitted by: **Abdul Wakil Najibi**

About this web app: **National Parks Explorer (Full-Stack Edition) is a continuation of Project 1, enhanced with a real PostgreSQL database and Express backend. Users can browse U.S. National Parks through a clean, cinematic interface. Each park card dynamically loads from the database, and clicking a card opens a detailed page with full park information. The project demonstrates a complete connection between frontend and backend — from database to dynamic content rendering — while maintaining the same modern, responsive UI built with Tailwind CSS.**

Time spent: **Approximately 30–40 hours**

---

## Required Features

The following **required** functionality is completed:

- [x] **The web app uses only HTML, CSS (Tailwind + minimal global CSS), and JavaScript without a frontend framework**
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured database table for the list items**
- [x] **NOTE: Walkthrough GIF includes a view of the Render dashboard demonstrating the Postgres database availability**
- [x] **NOTE: Walkthrough GIF includes a terminal demonstration of table contents using `SELECT * FROM parks;`**
- [x] **The app displays a list of National Parks fetched from the database**
- [x] **Each park card includes at least three attributes (name, state, image)**
- [x] **Each park card links to a detailed view at `/parks/:id` showing all attributes**
- [x] **Each detail view dynamically loads data from `/parks/:id/data`**
- [x] **The Express server properly handles unknown routes with a 404 page**
- [x] **The app’s design remains modern and fully responsive**

---

The following **optional** features are implemented:

- [x] The user can **search** for a park by name or state
- [x] Added a **“View All”** button on detail pages for easy navigation
- [x] Smooth scrolling and cinematic hover effects on cards
- [x] Smooth scrolling and fixed background for modern feel

---

The following **additional** features are implemented:

- [x] **Connection pool configuration** with environment variables for secure database access
- [x] **Clear separation of concerns** using modular controllers and routes
- [x] **Dynamic JSON endpoints** for both list and single park data
- [x] **“Home” button** reliably scrolls back to the top hero section from any page
- [x] **“View All” button** displays all park cards directly from the details page
- [x] **Factual, extended descriptions** for each park to make content informative and engaging
- [x] **8 U.S. National Parks included** (Yellowstone, Yosemite, Grand Canyon, Zion, Glacier, Rocky,Smokey, Everglades)
- [x] **Hero background with gradient overlay** for a cinematic first impression
- [x] **Consistent typography** (Merriweather for titles, Inter for body text) for readability and design coherence
- [x] **Fully responsive card grid** (2 → 3 → 4 columns depending on screen size)
- [x] **Hover effects** on cards and buttons for polished interactivity
- [x] **Custom 404 page** for missing or invalid routes with cohesive styling
- [x] Sleek, minimalist UI with a **dark background theme** to make park images pop
- [x] **Clickable Logo** — The site logo now links back to the **Home page** for intuitive navigation from any view.

---

## Video Walkthrough

Here’s a walkthrough of implemented required features:

## Demo

![App Demo](./docs/demo.gif)

<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with … Add GIF tool here  
(Examples: [Kap](https://getkap.co/) for macOS, [ScreenToGif](https://www.screentogif.com/) for Windows, [peek](https://github.com/phw/peek) for Linux)

---

## Notes

Some challenges included:

- Debugging the **PostgreSQL connection string** between local and hosted environments.

- Ensuring all **dynamic park routes** (/parks/:id) correctly rendered the same park.html with the proper data.

- Managing **asynchronous fetch requests** to load content smoothly before rendering.

- Maintaining **design consistency** from Project 1 while migrating to a real database backend.

- Achieving a **modular Express structure** with clean controllers, routes, and file separation.

- Ensuring the **hero background only applied to the homepage** without affecting details pages.

- Balancing **text readability vs. image visibility** using gradient overlays and responsive layouts.

- Fine-tuning **UX and visual aesthetics** for a modern, minimal, and cinematic feel.

---

## License

Copyright 2025 Abdul Wakil Najibi

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
