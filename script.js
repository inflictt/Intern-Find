// JS to render cards and handle logic

const internshipData = [
    {
        title: "Microsoft Imagine Cup 2026",
        company: "Microsoft",
        tags: ["Hackathon", "AI", "Global"],
        location: "Global (Remote/Hybrid)",
        duration: "Oct 2025 - May 2026",
        stipend: "$100,000 Prize + Mentorship",
        status: "Open",
        link: "https://imaginecup.microsoft.com",
        type: "Hackathon"
    },
    {
        title: "HackWithInfy 2026",
        company: "Infosys",
        tags: ["Hackathon", "Coding", "India"],
        location: "India (Online Rounds)",
        duration: "Feb - July 2026",
        stipend: "PPO + ₹2L Prize (Winner)",
        status: "Coming Soon",
        link: "https://www.infosys.com/careers/hackwithinfy.html",
        type: "Hackathon"
    },
    {
        title: "Engineering Campus Hiring 2026",
        company: "Goldman Sachs",
        tags: ["Internship", "FTE", "Finance"],
        location: "Bangalore / Hyderabad / Pune",
        duration: "Summer 2026",
        stipend: "₹1,00,000/mo + FTE Offer",
        status: "Coming Soon",
        link: "https://www.goldmansachs.com/careers",
        type: "Internship"
    },
    {
        title: "Walmart Sparkathon",
        company: "Walmart Global Tech",
        tags: ["Hackathon", "Retail Tech", "Innovation"],
        location: "India (Online + Bangalore)",
        duration: "June - Sept 2025",
        stipend: "₹2.9L Winning Prize + Interviews",
        status: "Closed",
        link: "https://walmart.converge.tech/content/converge/en_in/sparkathon.html",
        type: "Hackathon"
    },
    {
        title: "Code for Good 2026",
        company: "JPMorgan Chase",
        tags: ["Hackathon", "Social Good", "Hiring"],
        location: "India (Mumbai/Bangalore/Hyd)",
        duration: "March - July 2026",
        stipend: "Internship + FTE Opportunity",
        status: "Coming Soon",
        link: "https://careers.jpmorgan.com/US/en/students/programs/code-for-good",
        type: "Hackathon"
    },
    {
        title: "Smart India Hackathon 2026",
        company: "Govt of India",
        tags: ["Hackathon", "Innovation", "National"],
        location: "Pan India",
        duration: "June - Dec 2026",
        stipend: "₹1.5 Lakh Winning Prize/team",
        status: "Coming Soon",
        link: "https://sih.gov.in",
        type: "Hackathon"
    },
    {
        title: "Flipkart GRiD 7.0",
        company: "Flipkart",
        tags: ["Hackathon", "E-commerce", "Robotics"],
        location: "India (Online + Bangalore)",
        duration: "June - Aug 2025",
        stipend: "PPO + ₹1.5L Prize (Rank 1)",
        status: "Coming Soon",
        link: "https://unstop.com/hackathons",
        type: "Hackathon"
    },
    {
        title: "Adobe India Hackathon",
        company: "Adobe",
        tags: ["Hackathon", "Women in Tech", "Coding"],
        location: "India (Virtual/Hybrid)",
        duration: "Jan - March 2026",
        stipend: "Internship + Products",
        status: "Open",
        link: "https://www.adobe.com/in/careers.html",
        type: "Hackathon"
    },
    {
        title: "Summer Engineering Internship 2026",
        company: "Shopify",
        tags: ["Internship", "Remote", "Ruby"],
        location: "Remote / Canada / USA",
        duration: "Summer 2026",
        stipend: "Competitive Salary (USD/CAD)",
        status: "Open",
        link: "https://www.shopify.com/careers/interns",
        type: "Internship"
    },
    {
        title: "GitHub Octernships",
        company: "GitHub / Partners",
        tags: ["Internship", "Open Source", "Remote"],
        location: "Remote",
        duration: "Rolling (12 weeks)",
        stipend: "$500 - $1000/month",
        status: "Open",
        link: "https://education.github.com/students/octernships",
        type: "Internship"
    },
    {
        title: "Uber She++ 2026",
        company: "Uber",
        tags: ["Diversity", "Event", "Hiring"],
        location: "India (Virtual/Hybrid)",
        duration: "March 2026",
        stipend: "Mentorship + Interview Opportunity",
        status: "Open",
        link: "https://www.uber.com/in/en/careers/",
        type: "Internship"
    },
    {
        title: "Juspay Hiring Challenge",
        company: "Juspay",
        tags: ["Hackathon", "Functional Programming", "Hiring"],
        location: "Bangalore (Online Round 1)",
        duration: "March - May 2026",
        stipend: "₹40k/mo Internship + ₹21-27 LPA FTE",
        status: "Coming Soon",
        link: "https://juspay.io/careers",
        type: "Hackathon"
    },
    {
        title: "Google Summer of Code 2026",
        company: "Google",
        tags: ["Open Source", "Global", "Mentorship"],
        location: "Remote",
        duration: "May - Aug 2026",
        stipend: "$1500 - $3000+ (PPP Adjusted)",
        status: "Coming Soon",
        link: "https://summerofcode.withgoogle.com",
        type: "Internship"
    },
    {
        title: "MLH Fellowship 2026",
        company: "Major League Hacking",
        tags: ["Fellowship", "Open Source", "Remote"],
        location: "Remote",
        duration: "12 Weeks (Rolling)",
        stipend: "Up to $5,000 (PPP Adjusted)",
        status: "Open",
        link: "https://fellowship.mlh.io",
        type: "Internship"
    },
    {
        title: "Outreachy May 2026",
        company: "Outreachy",
        tags: ["Internship", "Diversity", "Open Source"],
        location: "Remote",
        duration: "May - Aug 2026",
        stipend: "$7,000 Total ($3k + $4k)",
        status: "Coming Soon",
        link: "https://www.outreachy.org",
        type: "Internship"
    },
    {
        title: "Deloitte Internship 2026",
        company: "Deloitte India",
        tags: ["Internship", "Consulting", "Tech"],
        location: "Hyderabad / Bangalore / Pune",
        duration: "Jan - June 2026",
        stipend: "Competitive + PPO",
        status: "Check Careers",
        link: "https://www2.deloitte.com/in/en/pages/careers/articles/life-at-deloitte-india-careers.html",
        type: "Internship"
    },
    {
        title: "Morgan Stanley Summer Analyst",
        company: "Morgan Stanley",
        tags: ["Internship", "Finance", "Tech"],
        location: "Mumbai / Bangalore",
        duration: "May - July 2026",
        stipend: "₹87k - ₹1.2L/month",
        status: "Open",
        link: "https://www.morganstanley.com/people-opportunities/students-graduates",
        type: "Internship"
    },
    {
        title: "Intuit Summer Internship 2026",
        company: "Intuit",
        tags: ["Internship", "SDE", "Product"],
        location: "Bangalore",
        duration: "Summer 2026",
        stipend: "₹80k - ₹1L/month",
        status: "Coming Soon",
        link: "https://jobs.intuit.com/job-search-results/?keyword=Intern&location=India",
        type: "Internship"
    },
    {
        title: "Cisco Technical Intern 2026",
        company: "Cisco",
        tags: ["Internship", "Networking", "Security"],
        location: "Bangalore",
        duration: "Jan - June 2026",
        stipend: "₹60k - ₹95k/month",
        status: "Open (Job ID 1449112)",
        link: "https://jobs.cisco.com/jobs/SearchJobs",
        type: "Internship"
    },
    {
        title: "Amazon SDE Internship 2026",
        company: "Amazon",
        tags: ["Internship", "SDE", "FAANG"],
        location: "Bangalore / Hyderabad / Delhi",
        duration: "Summer 2026 (6 Months)",
        stipend: "₹80k - ₹1.1L/month",
        status: "Apply ASAP",
        link: "https://www.amazon.jobs/en/teams/internships-for-students",
        type: "Internship"
    },
    {
        title: "Tech & Product Internship 2026",
        company: "Taylor & Francis Group",
        tags: ["Internship", "Product", "Tech"],
        location: "Bangalore",
        duration: "Summer 2026",
        stipend: "Competitive Stipend",
        status: "Open (Apply by Jan 17)",
        link: "https://careers.taylorandfrancisgroup.com/jobs",
        type: "Internship"
    },
    {
        title: "Cred Internship 2026",
        company: "Cred",
        tags: ["Internship", "Backend", "Web"],
        location: "Bangalore",
        duration: "Summer 2026",
        stipend: "₹30k - ₹50k/month",
        status: "Coming Soon",
        link: "https://careers.cred.club/",
        type: "Internship"
    },
    {
        title: "Securonix SECUROTHON 2025",
        company: "Securonix",
        tags: ["Internship", "Cybersecurity", "SDE"],
        location: "Bangalore / Pune",
        duration: "Jan - May 2026",
        stipend: "₹50,000/month",
        status: "Open",
        link: "https://www.securonix.com/careers/",
        type: "Internship"
    },
    {
        title: "Oracle Internship 2026",
        company: "Oracle",
        tags: ["Internship", "Cloud", "SDE"],
        location: "Bangalore / Hyderabad / Pune",
        duration: "Summer 2026",
        stipend: "₹35k - ₹55k/month",
        status: "check careers",
        link: "https://careers.oracle.com/",
        type: "Internship"
    },
    {
        title: "ServiceNow Internship 2026",
        company: "ServiceNow",
        tags: ["Internship", "SaaS", "Cloud"],
        location: "Hyderabad",
        duration: "Summer 2026",
        stipend: "₹70,000/month",
        status: "Open",
        link: "https://careers.servicenow.com/",
        type: "Internship"
    },
    {
        title: "IBM Internship 2026",
        company: "IBM",
        tags: ["Internship", "AI", "Cloud"],
        location: "Bangalore / Gurgaon",
        duration: "Summer 2026",
        stipend: "₹30k - ₹43k/month",
        status: "Open",
        link: "https://www.ibm.com/in-en/careers",
        type: "Internship"
    },
    {
        title: "AI for Bharat Nationwide Program",
        company: "AWS / Hack2skill",
        tags: ["Hackathon", "AI", "Workshops"],
        location: "Online",
        duration: "Two Phases",
        stipend: "₹40 Lakh Prize Pool",
        status: "Open",
        link: "https://vision.hack2skill.com/event/ai-for-bharat",
        type: "Hackathon"
    }
];

const grid = document.getElementById('internship-grid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const filterBtns = document.querySelectorAll('.filter-btn');

function renderCards(data) {
    grid.innerHTML = '';

    if (data.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">No opportunities found matching your criteria.</p>';
        return;
    }

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';

        // Tags rendering
        const tagsHtml = item.tags.map(tag => `<span class="card-tag">${tag}</span>`).join('');

        // Status Color Logic
        let statusColor;
        // Normalize for easier matching
        const statusLower = item.status.toLowerCase();

        if (statusLower.includes('open') || statusLower.includes('apply')) {
            statusColor = '#22c55e'; // Green
        } else if (statusLower.includes('soon') || statusLower.includes('check')) {
            statusColor = '#f59e0b'; // Yellow/Orange
        } else if (statusLower.includes('closed')) {
            statusColor = '#ef4444'; // Red
        } else {
            statusColor = '#ef4444'; // Default to Red
        }

        card.innerHTML = `
            <div class="card-header">
                <div>
                    <h3 class="role-title">${item.title}</h3>
                    <div class="company-name">
                        <i class="fa-solid fa-building"></i> ${item.company}
                    </div>
                </div>
                ${item.type === 'Hackathon' ? '<i class="fa-solid fa-trophy" style="color: gold;"></i>' : '<i class="fa-solid fa-briefcase"></i>'}
            </div>
            
            <div class="card-tags">
                ${tagsHtml}
            </div>
            
            <div class="card-info">
                <div class="info-item">
                    <i class="fa-solid fa-location-dot"></i> ${item.location}
                </div>
                <div class="info-item">
                     <i class="fa-regular fa-calendar"></i> ${item.duration}
                </div>
                <div class="info-item">
                    <i class="fa-solid fa-indian-rupee-sign"></i> ${item.stipend}
                </div>
                <div class="info-item" style="color: ${statusColor}">
                    <i class="fa-solid fa-circle-check"></i> ${item.status}
                </div>
            </div>
            
            <div class="card-footer">
                <a href="${item.link}" target="_blank" class="btn btn-primary apply-btn">View Details</a>
            </div>
        `;

        grid.appendChild(card);
    });
}

// Initial placeholder render (will be cleared when real data comes)
/*
renderCards([
    {
        title: "Software Engineer Intern",
        company: "Google",
        tags: ["Java", "Python"],
        location: "Bangalore",
        duration: "3 Months",
        stipend: "45k/month",
        status: "Open",
        link: "#",
        type: "Internship"
    }
]);
*/

// --- Theme Toggle Logic ---
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Check local storage or system preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    enableLightMode();
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        if (body.hasAttribute('data-theme')) {
            disableLightMode();
        } else {
            enableLightMode();
        }
    });
}

function enableLightMode() {
    body.setAttribute('data-theme', 'light');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
    localStorage.setItem('theme', 'light');
}

function disableLightMode() {
    body.removeAttribute('data-theme');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
    localStorage.setItem('theme', 'dark');
}


// --- Fuzzy Search Logic (Levenshtein Distance) ---
function levenshtein(a, b) {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;

    const matrix = [];

    // increment along the first column of each row
    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }

    // increment each column in the first row
    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    // Fill in the rest of the matrix
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) == a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1, // substitution
                    Math.min(
                        matrix[i][j - 1] + 1, // insertion
                        matrix[i - 1][j] + 1 // deletion
                    )
                );
            }
        }
    }

    return matrix[b.length][a.length];
}

function isFuzzyMatch(text, query) {
    text = text.toLowerCase();
    query = query.toLowerCase();
    if (text.includes(query)) return true;

    // Allow for some typos based on length
    const distance = levenshtein(text, query);
    const threshold = Math.max(3, Math.floor(query.length * 0.4)); // Adaptive threshold
    return distance <= threshold;
}


const companyFilter = document.getElementById('companyFilter');

// State for filters
let currentFilters = {
    type: 'all',
    status: 'all',
    company: 'all'
};

// Populate Company Dropdown
function populateCompanyDropdown() {
    if (!companyFilter) return;

    const companies = [...new Set(internshipData.map(item => item.company))].sort();

    companies.forEach(company => {
        const option = document.createElement('option');
        option.value = company;
        option.textContent = company;
        companyFilter.appendChild(option);
    });
}
populateCompanyDropdown();

// Initial Render
renderCards(internshipData);

// --- Search Logic ---
function performSearch() {
    const query = searchInput.value.trim();

    const filtered = internshipData.filter(item => {
        // Multi-facet filtering logic

        // 1. Check Type Filter
        const typeMatch = (currentFilters.type === 'all') ||
            (item.type === currentFilters.type);

        // 2. Check Status Filter
        let statusMatch = true;
        if (currentFilters.status !== 'all') {
            const s = item.status.toLowerCase();
            const filterS = currentFilters.status.toLowerCase();

            if (filterS === 'open') statusMatch = s.includes('open') || s.includes('apply');
            else if (filterS === 'coming soon') statusMatch = s.includes('soon') || s.includes('check');
            else if (filterS === 'closed') statusMatch = s.includes('closed');
        }

        // 3. Check Company Filter
        const companyMatch = (currentFilters.company === 'all') ||
            (item.company === currentFilters.company);

        // 4. Search Query
        let searchMatch = true;
        if (query) {
            searchMatch = isFuzzyMatch(item.title, query) ||
                isFuzzyMatch(item.company, query) ||
                item.tags.some(tag => isFuzzyMatch(tag, query));
        }

        return typeMatch && statusMatch && companyMatch && searchMatch;
    });

    renderCards(filtered);
}

searchBtn.addEventListener('click', performSearch);
searchInput.addEventListener('input', performSearch); // Real-time search

// --- Filter Buttons Logic ---
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const filterType = btn.dataset.type; // 'type' or 'status'
        const filterValue = btn.dataset.filter;

        // Update Active State within group
        const group = btn.parentElement;
        group.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Update State
        if (filterType === 'type') {
            currentFilters.type = filterValue;
        } else if (filterType === 'status') {
            currentFilters.status = filterValue;
        }

        performSearch();
    });
});

// --- Company Dropdown Logic ---
if (companyFilter) {
    companyFilter.addEventListener('change', (e) => {
        currentFilters.company = e.target.value;
        performSearch();
    });
}

// Category Buttons Logic
document.querySelectorAll('.tag-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const category = e.target.dataset.category;
        searchInput.value = category;
        performSearch();
    });
});


