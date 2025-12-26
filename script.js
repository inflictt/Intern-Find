// JS to render cards and handle logic

const internshipData = [
    {
        title: "Microsoft Imagine Cup 2026",
        company: "Microsoft",
        tags: ["Hackathon", "AI", "Global"],
        location: "Global (Remote/Hybrid)",
        duration: "Oct 2025 - May 2026",
        stipend: "100,000 USD Prize + Mentorship",
        status: "Open",
        link: "https://imaginecup.microsoft.com",
        type: "Hackathon",
        postedDate: "2024-12-20",
        description: "Microsoft Imagine Cup is the premier global student technology competition. Build AI-driven solutions with Microsoft Cloud technologies to address real-world challenges.",
        eligibility: "Students aged 16+ enrolled in an accredited institution. Teams of 1-4 members.",
        deadline: "May 2026"
    },

    {
        title: "HackWithInfy 2026",
        company: "Infosys",
        tags: ["Hackathon", "Coding", "India"],
        location: "India (Online Rounds)",
        duration: "Feb - July 2026",
        stipend: "PPO + 2L Prize (Winner)",
        status: "Coming Soon",
        link: "https://www.infosys.com/careers/hackwithinfy.html",
        type: "Hackathon",
        postedDate: "2024-12-15",
        description: "Infosys HackWithInfy is a coding competition for engineering students. Top performers get pre-placement interviews (PPIs) and cash prizes.",
        eligibility: "B.E./B.Tech/M.E./M.Tech students graduating in 2026.",
        deadline: "July 2026"
    },
    {
        title: "Engineering Campus Hiring 2026",
        company: "Goldman Sachs",
        tags: ["Internship", "FTE", "Finance"],
        location: "Bangalore / Hyderabad / Pune",
        duration: "Summer 2026",
        stipend: "1,00,000/mo + FTE Offer",
        status: "Coming Soon",
        link: "https://www.goldmansachs.com/careers",
        type: "Internship",
        postedDate: "2024-12-18"
    },
    {
        title: "Walmart Sparkathon",
        company: "Walmart Global Tech",
        tags: ["Hackathon", "Retail Tech", "Innovation"],
        location: "India (Online + Bangalore)",
        duration: "June - Sept 2025",
        stipend: "2.9L Winning Prize + Interviews",
        status: "Closed",
        link: "https://walmart.converge.tech/content/converge/en_in/sparkathon.html",
        type: "Hackathon",
        postedDate: "2024-11-10",
        description: "Walmart Sparkathon involves building innovative retail tech solutions. Winners get huge cash prizes and interview opportunities.",
        eligibility: "Open to all engineering students across India in teams of 3-4.",
        deadline: "Sept 2025"
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
        type: "Hackathon",
        postedDate: "2024-12-05",
        description: "JPMorgan's Code for Good is a 24-hour hackathon solving social good problems. Performers are hired for internships and FTE roles.",
        eligibility: "Pre-final year students (2026 batch) with good coding fundamentals.",
        deadline: "July 2026"
    },
    {
        title: "Smart India Hackathon 2026",
        company: "Govt of India",
        tags: ["Hackathon", "Innovation", "National"],
        location: "Pan India",
        duration: "June - Dec 2026",
        stipend: "1.5 Lakh Winning Prize/team",
        status: "Coming Soon",
        link: "https://sih.gov.in",
        type: "Hackathon",
        postedDate: "2024-12-01",
        description: "Smart India Hackathon (SIH) is a nationwide initiative to solve problem statements provided by government ministries.",
        eligibility: "Teams of 6 members (at least 1 female member mandatory). College students only.",
        deadline: "Dec 2026"
    },
    {
        title: "Flipkart GRiD 7.0",
        company: "Flipkart",
        tags: ["Hackathon", "E-commerce", "Robotics"],
        location: "India (Online + Bangalore)",
        duration: "June - Aug 2025",
        stipend: "PPO + 1.5L Prize (Rank 1)",
        status: "Coming Soon",
        link: "https://unstop.com/hackathons",
        type: "Hackathon",
        postedDate: "2024-11-20",
        description: "Flipkart GRiD is a flagship engineering campus challenge with tracks in Software Development, Robotics, and InfoSec.",
        eligibility: "B.Tech/M.Tech/Ph.D. students from all batches (2025, 2026, 2027, 2028).",
        deadline: "Aug 2025"
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
        type: "Hackathon",
        postedDate: "2024-12-10",
        description: "Adobe India Hackathon for women in technology. Code, collaborate, and win internships + Apple products.",
        eligibility: "Female students graduating in 2025 or 2026.",
        deadline: "March 2026"
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
        type: "Internship",
        postedDate: "2024-12-22"
    },
    {
        title: "GitHub Octernships",
        company: "GitHub / Partners",
        tags: ["Internship", "Open Source", "Remote"],
        location: "Remote",
        duration: "Rolling (12 weeks)",
        stipend: "500 - 1000 USD/month",
        status: "Open",
        link: "https://education.github.com/students/octernships",
        type: "Internship",
        postedDate: "2024-12-20",
        description: "ServiceNow interns work on enterprise cloud software that changes how people work.",
        eligibility: "Pursuing a degree in Computer Science or related field.",
        deadline: "Summer 2026"
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
        type: "Internship",
        postedDate: "2024-12-15",
        description: "GSoC connects students with open source organizations. You write code for 3 months and get paid by Google.",
        eligibility: "Students aged 18+ enrolled in a post-secondary institution.",
        deadline: "Aug 2026"
    },
    {
        title: "Juspay Hiring Challenge",
        company: "Juspay",
        tags: ["Hackathon", "Functional Programming", "Hiring"],
        location: "Bangalore (Online Round 1)",
        duration: "March - May 2026",
        stipend: "40k/mo Internship + 21-27 LPA FTE",
        status: "Coming Soon",
        link: "https://juspay.io/careers",
        type: "Hackathon",
        postedDate: "2024-12-08"
    },
    {
        title: "Google Summer of Code 2026",
        company: "Google",
        tags: ["Open Source", "Global", "Mentorship"],
        location: "Remote",
        duration: "May - Aug 2026",
        stipend: "1500 - 3000+ USD (PPP Adjusted)",
        status: "Coming Soon",
        link: "https://summerofcode.withgoogle.com",
        type: "Internship",
        postedDate: "2024-11-30"
    },
    {
        title: "MLH Fellowship 2026",
        company: "Major League Hacking",
        tags: ["Fellowship", "Open Source", "Remote"],
        location: "Remote",
        duration: "12 Weeks (Rolling)",
        stipend: "Up to 5,000 USD (PPP Adjusted)",
        status: "Open",
        link: "https://fellowship.mlh.io",
        type: "Internship",
        postedDate: "2024-12-23"
    },
    {
        title: "Outreachy May 2026",
        company: "Outreachy",
        tags: ["Internship", "Diversity", "Open Source"],
        location: "Remote",
        duration: "May - Aug 2026",
        stipend: "7,000 USD Total (3k + 4k)",
        status: "Coming Soon",
        link: "https://www.outreachy.org",
        type: "Internship",
        postedDate: "2024-11-25"
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
        type: "Internship",
        postedDate: "2024-12-10"
    },
    {
        title: "Morgan Stanley Summer Analyst",
        company: "Morgan Stanley",
        tags: ["Internship", "Finance", "Tech"],
        location: "Mumbai / Bangalore",
        duration: "May - July 2026",
        stipend: "87k - 1.2L/month",
        status: "Open",
        link: "https://www.morganstanley.com/people-opportunities/students-graduates",
        type: "Internship",
        postedDate: "2024-12-24"
    },
    {
        title: "Intuit Summer Internship 2026",
        company: "Intuit",
        tags: ["Internship", "SDE", "Product"],
        location: "Bangalore",
        duration: "Summer 2026",
        stipend: "80k - 1L/month",
        status: "Coming Soon",
        link: "https://jobs.intuit.com/job-search-results/?keyword=Intern&location=India",
        type: "Internship",
        postedDate: "2024-12-12",
        description: "Autodesk's internship program focuses on 3D design software development. Work on products like AutoCAD and Fusion 360.",
        eligibility: "Computer Science or related majors. Final year students preferred.",
        deadline: "Jan 2026"
    },
    {
        title: "Cisco Technical Intern 2026",
        company: "Cisco",
        tags: ["Internship", "Networking", "Security"],
        location: "Bangalore",
        duration: "Jan - June 2026",
        stipend: "60k - 95k/month",
        status: "Open (Job ID 1449112)",
        link: "https://jobs.cisco.com/jobs/SearchJobs",
        type: "Internship",
        postedDate: "2024-12-19"
    },
    {
        title: "Amazon SDE Internship 2026",
        company: "Amazon",
        tags: ["Internship", "SDE", "FAANG"],
        location: "Bangalore / Hyderabad / Delhi",
        duration: "Summer 2026 (6 Months)",
        stipend: "80k - 1.1L/month",
        status: "Apply ASAP",
        link: "https://www.amazon.jobs/en/teams/internships-for-students",
        type: "Internship",
        postedDate: "2024-12-25",
        description: "Outreachy provides internships in open source and open science for underrepresented groups in tech.",
        eligibility: "Women, non-binary people, and other underrepresented groups. Global.",
        deadline: "Aug 2026"
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
        type: "Internship",
        postedDate: "2024-12-21"
    },
    {
        title: "Cred Internship 2026",
        company: "Cred",
        tags: ["Internship", "Backend", "Web"],
        location: "Bangalore",
        duration: "Summer 2026",
        stipend: "30k - 50k/month",
        status: "Coming Soon",
        link: "https://careers.cred.club/",
        type: "Internship",
        postedDate: "2024-12-16"
    },
    {
        title: "Securonix SECUROTHON 2025",
        company: "Securonix",
        tags: ["Internship", "Cybersecurity", "SDE"],
        location: "Bangalore / Pune",
        duration: "Jan - May 2026",
        stipend: "50,000/month",
        status: "Open",
        link: "https://www.securonix.com/careers/",
        type: "Internship",
        postedDate: "2024-12-22"
    },
    {
        title: "Oracle Internship 2026",
        company: "Oracle",
        tags: ["Internship", "Cloud", "SDE"],
        location: "Bangalore / Hyderabad / Pune",
        duration: "Summer 2026",
        stipend: "35k - 55k/month",
        status: "check careers",
        link: "https://careers.oracle.com/",
        type: "Internship",
        postedDate: "2024-12-05",
        description: "Intuit Software Engineering Interns work on products used by millions of small businesses. Focus on full-stack development.",
        eligibility: "Current undergraduate pursuing CS/IT degree.",
        deadline: "Apply ASAP"
    },
    {
        title: "ServiceNow Internship 2026",
        company: "ServiceNow",
        tags: ["Internship", "SaaS", "Cloud"],
        location: "Hyderabad",
        duration: "Summer 2026",
        stipend: "70,000/month",
        status: "Open",
        link: "https://careers.servicenow.com/",
        type: "Internship",
        postedDate: "2024-12-18"
    },
    {
        title: "IBM Internship 2026",
        company: "IBM",
        tags: ["Internship", "AI", "Cloud"],
        location: "Bangalore / Gurgaon",
        duration: "Summer 2026",
        stipend: "30k - 43k/month",
        status: "Open",
        link: "https://www.ibm.com/in-en/careers",
        type: "Internship",
        postedDate: "2024-12-14",
        description: "Morgan Stanley Summer Analyst Program creates a pipeline for future leaders in financial technology.",
        eligibility: "Students graduating between Dec 2026 and July 2027.",
        deadline: "July 2026"
    },
    {
        title: "AI for Bharat Nationwide Program",
        company: "AWS / Hack2skill",
        tags: ["Hackathon", "AI", "Workshops"],
        location: "Online",
        duration: "Two Phases",
        stipend: "40 Lakh Prize Pool",
        status: "Open",
        link: "https://vision.hack2skill.com/event/ai-for-bharat",
        type: "Hackathon",
        postedDate: "2024-12-24"
    },
    {
        title: "OIST Research Internship Fall 2026",
        company: "OIST Japan",
        tags: ["Internship", "Research", "Fully Funded"],
        location: "Okinawa, Japan",
        duration: "Oct 2026 - March 2027",
        stipend: "2,400 JPY/day + Travel + Stay",
        status: "Open (Apply by Apr 15)",
        link: "https://admissions.oist.jp/apply-research-internship",
        type: "Internship",
        postedDate: "2024-12-23"
    },
    {
        title: "Autodesk Internship 2026",
        company: "Autodesk",
        tags: ["Internship", "SDE", "Cloud"],
        location: "Pune / Bengaluru",
        duration: "Summer 2026",
        stipend: "Competitive + Perks",
        status: "Check Careers",
        link: "https://www.autodesk.com/careers",
        type: "Internship",
        postedDate: "2024-12-10"
    },
    {
        title: "Atlassian Women in Tech Internship",
        company: "Atlassian",
        tags: ["Internship", "Women in Tech", "SDE"],
        location: "Bangalore / Remote",
        duration: "May - July 2025",
        stipend: "1,20,000/mo + Perks",
        status: "Open",
        link: "https://www.atlassian.com/company/careers/students",
        type: "Women in Tech",
        postedDate: "2024-12-24",
        description: "Atlassian Women in Tech Internship is a tailored program to support female engineers. Work on Jira/Confluence/Trello.",
        eligibility: "Female students graduating in 2026.",
        deadline: "July 2025"
    },
    {
        title: "NXP Women in Tech Program",
        company: "NXP Semiconductors",
        tags: ["Internship", "Women in Tech", "Core"],
        location: "Noida / Bangalore",
        duration: "1 Year Program",
        stipend: "50,000 Scholarship + Internship",
        status: "Coming Soon",
        link: "https://www.nxp.com/company/about-nxp/careers",
        type: "Women in Tech",
        postedDate: "2024-12-25"
    }
];

// Helper to get currency icon
function getCurrencyIcon(stipend) {
    const s = stipend.toLowerCase();

    // Non-monetary rewards
    if (s.includes('internship +') || s.includes('mentorship') && !s.match(/\d/)) {
        return 'fa-gift';
    }

    if (s.includes('$') || s.includes('usd')) return 'fa-dollar-sign';
    if (s.includes('€') || s.includes('eur')) return 'fa-euro-sign';
    if (s.includes('£') || s.includes('gbp')) return 'fa-pound-sign';
    if (s.includes('yen') || s.includes('jpy')) return 'fa-yen-sign';
    if (s.includes('₹') || s.includes('inr') || s.includes('lakh') || s.includes('crore')) return 'fa-indian-rupee-sign';

    return 'fa-indian-rupee-sign'; // Default to Rupee
}

// Helper to parse stipend value for sorting (Returns annual estimate in INR)
function parseStipendValue(stipend) {
    const s = stipend.toLowerCase().replace(/,/g, '');
    const numbers = s.match(/(\d+\.?\d*)/g);
    if (!numbers) return 0;

    let value = parseFloat(numbers[0]);

    // Multipliers
    if (s.includes('k')) value *= 1000;
    if (s.includes('lakh') || s.includes('l')) value *= 100000;
    if (s.includes('cr')) value *= 10000000;

    // Currency Conversion (Approx)
    if (s.includes('$') || s.includes('usd')) value *= 83;
    if (s.includes('jpy')) value *= 0.55;

    // Period estimation (normalize to Monthly)
    if (s.includes('year') || s.includes('lpa') || s.includes('annum')) value /= 12;
    if (s.includes('day')) value *= 22; // ~22 working days
    // prize pools are one-time, treat as flat value

    return value;
}

const grid = document.getElementById('internship-grid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const filterBtns = document.querySelectorAll('.filter-btn');
const companyFilter = document.getElementById('companyFilter');
const sortSelect = document.getElementById('sortSelect');
const resultsCount = document.getElementById('resultsCount');
const clearFiltersBtn = document.getElementById('clearFiltersBtn');


// State for filters
let currentFilters = {
    type: 'all',
    status: 'Open',
    company: 'all',
    sort: 'latest' // latest, oldest, stipend-high, stipend-low
};

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

        // Dynamic Icon
        const currencyIconClass = getCurrencyIcon(item.stipend);

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
                    <i class="fa-solid ${currencyIconClass}"></i> ${item.stipend}
                </div>
                <div class="info-item" style="color: ${statusColor}">
                    <i class="fa-solid fa-circle-check"></i> ${item.status}
                </div>
            </div>
            
            <div class="card-footer">
                <span class="posted-date">Posted: ${new Date(item.postedDate).toLocaleDateString()}</span>
                <button class="btn btn-primary apply-btn">View Details</button>
            </div>
        `;

        // Attach Event Listener directly to the button
        // This prevents quote escaping issues with inline onclick
        const btn = card.querySelector('.apply-btn');
        btn.addEventListener('click', () => {
            openModal(item.title);
        });

        grid.appendChild(card);
    });
}
// Note: We'll use title as ID for simplicity in this MVP, 
// ideally would use a unique ID field. for safety we'll fuzzy match in openModal if needed.

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

// --- Modal Logic ---
const modal = document.getElementById('internshipModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const detailsView = document.getElementById('modalDetailsView');
const confirmView = document.getElementById('modalConfirmView');
const proceedBtn = document.getElementById('proceedToApplyBtn');
const confirmRedirectBtn = document.getElementById('confirmRedirectBtn');
const cancelRedirectBtn = document.getElementById('cancelRedirectBtn');

let currentInternshipLink = '';

// Open Modal
window.openModal = function (title) {
    const item = internshipData.find(i => i.title === title);
    if (!item) return;

    currentInternshipLink = item.link;

    // Reset View
    detailsView.classList.remove('hidden');
    confirmView.classList.add('hidden');

    // Populate Data
    document.getElementById('modalTitle').textContent = item.title;
    document.getElementById('modalCompany').textContent = item.company;
    document.getElementById('modalLocation').textContent = item.location;
    document.getElementById('modalDuration').textContent = item.duration;
    document.getElementById('modalStipend').textContent = item.stipend;
    document.getElementById('modalPosted').textContent = new Date(item.postedDate).toDateString();

    // Icons
    const stipendIcon = document.getElementById('modalStipendIcon');
    stipendIcon.className = 'fa-solid ' + getCurrencyIcon(item.stipend);

    // Tags
    const tagsContainer = document.getElementById('modalTags');
    tagsContainer.innerHTML = item.tags.map(tag => `<span class="card-tag">${tag}</span>`).join('');

    // Show Modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
};

// Close Modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

closeModalBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// Proceed to Confirmation
proceedBtn.addEventListener('click', () => {
    detailsView.classList.add('hidden');
    confirmView.classList.remove('hidden');
});

// Confirm Redirect
confirmRedirectBtn.addEventListener('click', () => {
    window.open(currentInternshipLink, '_blank');
    closeModal();
});

// Cancel Redirect
cancelRedirectBtn.addEventListener('click', () => {
    // Return to details view
    confirmView.classList.add('hidden');
    detailsView.classList.remove('hidden');
});

// --- Search Logic ---
function performSearch() {
    const query = searchInput.value.trim();
    const filtered = internshipData.filter(item => {
        // Multi-facet filtering logic

        // 1. Check Type Filter
        const typeMatch = (currentFilters.type === 'all') || (item.type === currentFilters.type);

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

    // --- Sort Logic ---
    const sortValue = sortSelect.value;
    if (sortValue === 'latest') {
        filtered.sort((a, b) => new Date(b.postedDate) - new Date(a.postedDate));
    } else if (sortValue === 'oldest') {
        filtered.sort((a, b) => new Date(a.postedDate) - new Date(b.postedDate));
    } else if (sortValue === 'stipend-high') {
        filtered.sort((a, b) => parseStipendValue(b.stipend) - parseStipendValue(a.stipend));
    } else if (sortValue === 'stipend-low') {
        filtered.sort((a, b) => parseStipendValue(a.stipend) - parseStipendValue(b.stipend));
    }

    renderCards(filtered);
    updateResultsCount(filtered.length);
}

function updateResultsCount(count) {
    if (resultsCount) {
        resultsCount.textContent = `Showing ${count} opportunit${count !== 1 ? 'ies' : 'y'}`;
    }
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

if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
        currentFilters.sort = e.target.value;
        performSearch();
    });
}



// Clear Filters Logic
if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener('click', () => {
        // Reset State
        currentFilters = {
            type: 'all',
            status: 'Open', // Reset to default strict view
            company: 'all'
        };
        searchInput.value = '';

        // Reset UI
        filterBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.filter === 'all' && btn.dataset.type === 'type') btn.classList.add('active');
            if (btn.dataset.filter === 'Open' && btn.dataset.type === 'status') btn.classList.add('active');
        });

        if (companyFilter) companyFilter.value = 'all';

        performSearch();
    });
}

// Initial Render (Use performSearch to respect default 'Open' filter)
performSearch();




