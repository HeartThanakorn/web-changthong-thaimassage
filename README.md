# Chang Thong Thaimassage Website

A modern, high-performance React website template designed specifically for Thai Massage businesses in Germany. This project focuses on **GDPR (DSGVO) compliance**, performance, and conversion.

## 🚀 Key Features

-   **Tech Stack:** React (Vite), Tailwind CSS, Docker.
-   **Bilingual:** Full support for German (DE) and English (EN) using `react-i18next`.
-   **GDPR Compliant:**
    -   **Local Fonts:** Google Fonts (Manrope) are self-hosted (no requests to Google servers).
    -   **Cookie Consent:** Strict "Opt-in" mechanism. Google Analytics only loads *after* consent.
    -   **Legal Pages:** Pre-structured templates for *Impressum* and *Datenschutz*.
-   **Booking System:** Integrated with external booking links (Setmore, Treatwell, etc.).
-   **Design:** Responsive, mobile-first design with a premium "Green & Gold" aesthetic.

## 🛠️ Getting Started

### Prerequisites
-   Node.js (v18 or higher)
-   npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/serene-thai-spa.git](https://github.com/your-username/serene-thai-spa.git)
    cd serene-thai-spa
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run development server:**
    ```bash
    npm run dev
    ```
    Open http://localhost:5173 to view it in the browser.

## ⚙️ Configuration (How to Reuse)

To use this template for a **new massage shop**, follow these customization steps:

### 1. General Info & Booking Link
Edit `src/utils/constants.js` (or `src/constants.js`) to update:
-   **`SETMORE_BOOKING_URL`**: The link to the booking system.
-   **Contact Info**: Phone, Email, Address.
-   **Social Media Links**.

### 2. Content & Translations
Edit the JSON files in `src/i18n/locales/`:
-   `de.json` (German content)
-   `en.json` (English content)
Update the hero text, services, about us bio, and testimonials here.

### 3. Images (CRITICAL)
Replace all placeholder images in `/public/images/`.
> **⚠️ COPYRIGHT WARNING:** DO NOT use images from Google Search. Use licensed stock photos (Adobe Stock, Shutterstock) or original photos taken by the owner to avoid legal fines (Abmahnung).

### 4. Google Analytics (GA4)
Open `src/App.jsx` and replace the Measurement ID:
```javascript
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; // Replace with new ID
```

### 5. Legal Pages (German Law)
-   **Impressum:** Edit `src/pages/Impressum.jsx`. Update the Owner Name, Address, Contact, and Tax ID (USt-IdNr.).
-   **Datenschutz:** Edit `src/pages/Datenschutz.jsx`. Ensure the Booking Tool section matches the tool used (e.g., Setmore).

## 🛡️ GDPR Compliance Checklist

Before deploying to production in Germany, verify these points:

-   [ ] **Impressum:** Contains full name, address (no PO Box), and contact info.
-   [ ] **Datenschutz:** Mentions all tools used (Setmore, Hosting, Google Analytics).
-   [ ] **Cookie Banner:** "Ablehnen" (Decline) button works. Analytics NOT loaded before consent.
-   [ ] **Fonts:** No network requests to `fonts.googleapis.com` in the Network tab (Local fonts only).
-   [ ] **Images:** All images are legally licensed.

## 🐳 Deployment (Docker)

This project is ready for Docker deployment (e.g., on Hetzner VPS).

1.  **Build the image:**
    ```bash
    docker build -t serene-thai-spa .
    ```

2.  **Run the container:**
    ```bash
    docker run -d -p 80:80 --name spa-website serene-thai-spa
    ```

## 📂 Project Structure

/public
  /fonts        # Local font files (Manrope)
  /images       # Website images
/src
  /components   # Reusable UI (Navbar, Footer, Buttons)
  /pages        # Page views (Home, About, Contact, Legal)
  /i18n         # Translation files (de.json, en.json)
  App.jsx       # Main Logic + GA4 Setup + Cookie Banner
  main.jsx      # Entry point + Font imports

## 📄 License

This project is proprietary. Unauthorized copying is prohibited.