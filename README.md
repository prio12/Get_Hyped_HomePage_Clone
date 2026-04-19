# Get Hyped - Frontend Recreation Task

This repository contains a high-fidelity recreation of the [gethyped.nl](https://www.gethyped.nl/) homepage. This project was developed as a technical assessment for the **Junior MERN Developer** position at **DeveloperLook**.

The core focus of this task was to replicate the premium "Agency Feel" of the original site, specifically focusing on complex GSAP animations, smooth scroll behaviors, and pixel-perfect responsiveness.

## 🚀 Live Demo

**[PASTE YOUR VERCEL/DEPLOYMENT LINK HERE]**

---

## 🛠️ Technical Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** GSAP (GreenSock Animation Platform)
- **Scroll Engine:** Lenis Smooth Scroll
- **Icons:** Lucide React & React Icons
- **Deployment:** Vercel

---

## ⚡ Key Challenges & Solutions

### 1. The "Stacked" Expertise Section

The original site uses a pinning effect where cards stack on top of each other. I implemented this using **GSAP ScrollTrigger**.

- **The Logic:** Each card is pinned to the top of the viewport while the subsequent card slides over it.
- **Optimization:** I integrated **Lenis** with a custom GSAP ticker to ensure that the pinning calculations remain perfectly synced with the smooth scroll position, preventing any "jitter" or layout shifts.

### 2. Interactive CTA (Image Spawning)

In the "Let's Get Hyped" section, I recreated the mouse-tracking logic where brand assets spawn at the cursor's location.

- **Human-Centric UX:** I added distance-based logic (Hypot) to ensure images only spawn when the mouse moves a certain distance, preventing the screen from becoming overcrowded and maintaining performance.

### 3. Responsive Slopes & Clip-Paths

A signature design element of the site is its sloped containers.

- Instead of using simple images, I utilized **CSS Clip-Paths** and **Polygon mapping** to ensure the slopes remain sharp on Retina displays and adapt fluidly to mobile screen widths.

### 4. Performance & Video Handling

Since the site is heavy on video content, I used the **Intersection Observer API** to ensure videos only play when they are at least 50% visible in the viewport, significantly reducing CPU/GPU overhead.

---

## 📱 Mobile Behavior

Following the task requirements, the mobile version includes:

- A fully custom-built **Hamburger Menu** with the specific overlay transitions seen on the live site.
- Adaptive layouts for the "Cases" section, including the specific rotation offsets used on smaller screens.
- Touch-optimized scrolling.

---

## 🛠️ Local Development

1.  **Clone the repo:**
    ```bash
    git clone [https://github.com/your-username/get-hyped-clone.git](https://github.com/your-username/get-hyped-clone.git)
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the dev server:**
    ```bash
    npm run dev
    ```

---

**Developed by Maksudur Rahman Prio** _Focused on building production-ready, interactive web applications._
