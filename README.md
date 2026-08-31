# Abhishek Yadav – Professional Developer Portfolio

A responsive, high-performance developer portfolio website built using React, TypeScript, Vite, and Tailwind CSS. The website features an interactive developer terminal, light/dark mode switcher, project showcaser, custom credentials timeline, and a fully functional contact form.

## 🚀 Features

- **Dynamic Theme Switcher**: Toggle between light and dark modes with system preference sync.
- **Interactive Terminal Mock IDE**: A custom developer profile rendered inside a styled terminal component.
- **Projects Showcase**: Interactive list of projects filtering dynamically by stack, with detailed modals.
- **Education & Credentials**: Interactive timeline featuring courses, certifications, and skill tags.
- **Functional Contact Form**: Direct email delivery using Web3Forms with mock fallback.
- **Fully Responsive**: Optimized for all devices (mobiles, tablets, and large screens).

---

## 🛠️ Tech Stack

- **Framework**: React 19
- **Bundler & Dev Server**: Vite 8
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Hosting Suitability**: Vercel, Netlify, Render, GitHub Pages

---

## 💻 Local Development Setup

To run the project locally on your machine:

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure environment variables (Optional)**:
   - Create a `.env` file in the root directory.
   - Copy the contents from `.env.example` and add your Web3Forms access key.

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open **[http://localhost:5173](http://localhost:5173)** in your browser.

4. **Production Build**:
   To compile and minify the project for production:
   ```bash
   npm run build
   ```
   The compiled assets will be placed in the `dist/` directory.

---

## ✉️ Setting up the Contact Form

The contact form uses **Web3Forms** to send inquiries directly to your email without needing a backend server:

1. Go to [Web3Forms](https://web3forms.com/) and enter your email to get a free **Access Key**.
2. Create a `.env` file in your project root.
3. Add your key:
   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your-access-key-here
   ```
4. Restart your development server. Now, when visitors submit the form, you will receive their messages directly in your inbox.
5. If no key is set, the website runs in **mock mode**, showing a success message in local testing.

---

## 🌐 Deployment Guide

### Vercel
1. Import your project repository into Vercel.
2. In the project settings, add the environment variable:
   - Key: `VITE_WEB3FORMS_ACCESS_KEY`
   - Value: `(Your Web3Forms access key)`
3. Deploy! Vercel will automatically detect Vite and build the site.

### Netlify
1. Import your project into Netlify.
2. Under Site Configuration > Environment variables, add:
   - Key: `VITE_WEB3FORMS_ACCESS_KEY`
   - Value: `(Your Web3Forms access key)`
3. Click deploy!
