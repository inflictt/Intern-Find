# InternNow - Find Your Next Internship

InternNow is a student-run aggregator designed to help engineering students and professionals discover curated top tech internships and hackathons globally. The platform provides a clean, responsive, and dynamic user interface to browse, search, and apply for high-quality opportunities (FAANG, top startups, major competitions) with verified stipends and details.

## 🚀 Features

- **Curated Opportunities**: Hand-picked internships, fellowships, and hackathons from top global companies.
- **Advanced Search & Filtering**: 
  - Search by role, company, or keyword.
  - Filter by Type (Internship, Hackathon, Fellowship).
  - Filter by Status (Open, Closed, Coming Soon).
  - Sort by Relevance, Latest, Stipend (High/Low).
- **Interactive UI/UX**:
  - **Dark Mode / Light Mode** toggle for better viewing experience.
  - Interactive internship cards with insight badges (e.g., "FAANG", "Freshers Friendly", "High Competition").
  - Clean modal views displaying comprehensive details (Stipend, Eligibility, Deadline, Description).
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices.
- **Feedback Integration**: Built-in user feedback mechanism utilizing EmailJS.

## 📂 Project Structure

This project is built as a highly interactive purely static Vanilla Web Application.

```text
Intern-Find-main/
│
├── index.html           # Main landing page (hero section, featured internships, how it works)
├── opportunities.html   # Dedicated explorer page with full grid, advanced search, and filters
├── resume.html          # Resource page for resume building tips and guides
│
├── style.css            # Global stylesheet (custom properties, responsive grid, modal & card designs)
├── script.js            # Core logic (data array, search algorithm, filter logic, DOM manipulation, EmailJS)
│
└── README.md            # Project documentation (this file)
```

## 🛠️ Technologies Used

- **HTML5**: Semantic structure.
- **CSS3**: Vanilla CSS, Flexbox/Grid, Custom Properties (Variables) for theming, Media Queries for responsiveness.
- **JavaScript (ES6+)**: Vanilla JS for all state management, DOM updates, and search logic—no heavy frameworks!
- **EmailJS**: For handling the feedback form submissions client-side.
- **Clearbit API**: Dynamically fetching company logos on the fly.
- **FontAwesome**: For scalable vector icons.

## 🎯 How to Use / Run Locally

Since InternNow is a purely static website, running it locally is incredibly straightforward. No build steps or package installations are required!

1. **Clone the repository** (or download and extract the ZIP):
   ```bash
   git clone <your-repository-url>
   cd Intern-Find-main
   ```

2. **Open the project**:
   - Double-click the `index.html` file to open it directly in your default web browser.
   - *Optional (Recommended)*: Use a local development server like VS Code's **Live Server** extension to preview the site with automatic hot-reloading.

3. **Deploying**:
   - The project is ready to be hosted out-of-the-box on platforms like **GitHub Pages**, **Vercel**, **Netlify**, or **Cloudflare Pages**. 

## 🔮 Future Scope

While the current version is an excellent and fast static site, here are several features planned for the future to scale the application:

1. **Backend & Database Integration**: Migrate the hardcoded `internshipData` in JavaScript to a proper backend API (Node.js/Express or Python/Django) and a database (MongoDB/PostgreSQL) to handle thousands of listings dynamically.
2. **Automated Scraping**: Implement web scrapers or API integrations to automatically fetch new internships from career pages and job boards, reducing manual updates.
3. **User Authentication**: Allow students to create accounts, save/bookmark their favorite opportunities, and track their application statuses centrally.
4. **AI Assistant Integration**: Turn the currently planned "InternBot Helper" into a fully functional AI-powered chatbot using LLMs (like Gemini or OpenAI) to answer specific student queries regarding eligibility, resume checks, and interview prep.
5. **Admin Dashboard**: Build a secure admin panel for moderators to easily Add, Update, or Delete job postings without modifying the codebase.
6. **Email Newsletters**: Allow users to subscribe to specific tags (e.g., "Remote", "SDE") and receive automated weekly emails with the latest matching opportunities.

## 🤝 Contributing

Contributions are welcome! If you find a broken link, UI bug, or have a feature request:
1. Open an issue detailing the problem/feature.
2. Fork the repository and create a new branch.
3. Submit a Pull Request with your changes.

---
**Disclaimer**: InternNow is an independent aggregator. It is not directly affiliated with companies like Google, Microsoft, Meta, etc. All logos are the property of their respective owners.
