// JS to render cards and handle logic

const internshipData = [
    {
        title: "Google STEP Intern 2026",
        company: "Google",
        tags: ["Internship", "Diversity", "First Year"],
        location: "Bangalore / Hyderabad",
        duration: "Summer 2026",
        stipend: "Competitive + Perks",
        status: "Open",
        link: "https://buildyourfuture.withgoogle.com/programs/step",
        type: "Internship",
        postedDate: "2024-12-28",
        description: "Program for 1st/2nd-year CS students to work on real software projects. Focus on personal and professional development.",
        eligibility: "First and Second year undergraduate students. Historically underrepresented groups in tech encouraged.",
        deadline: "Jan 2026"
    },
    {
        title: "Microsoft Explore Intern 2026",
        company: "Microsoft",
        tags: ["Internship", "Rotational", "First Year"],
        location: "Hyderabad / Bangalore",
        duration: "Summer 2026",
        stipend: "Competitive + Benefits",
        status: "Open",
        link: "https://careers.microsoft.com/students/us/en/explore-program",
        type: "Internship",
        postedDate: "2024-12-28",
        description: "Rotational program across software engineering and program management. Designed to help students explore different roles.",
        eligibility: "First or Second year students enrolled in a bachelor's degree program.",
        deadline: "Feb 2026"
    },
    {
        title: "Meta University 2026",
        company: "Meta",
        tags: ["Internship", "Education", "Diversity"],
        location: "Remote / Menlo Park",
        duration: "10 Weeks",
        stipend: "Paid Internship",
        status: "Coming Soon",
        link: "https://www.metacareers.com/students",
        type: "Internship",
        postedDate: "2024-12-28",
        description: "10-week immersive program for underrepresented students in tech. Includes coding bootcamps and project work.",
        eligibility: "First and Second year college students.",
        deadline: "Spring 2026"
    },
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
        eligibility: "Students aged 16+ enrolled in an accredited institution (School/University). Teams of 1-4 members. No coding experience required for some tracks.",
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
        eligibility: "B.E./B.Tech/M.E./M.Tech students graduating in 2026. Minimum 60% or 6 CGPA throughout academics.",
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
        postedDate: "2024-12-18",
        description: "Goldman Sachs Engineering Campus Hiring is a premier opportunity to join their global engineering teams.",
        eligibility: "Pre-final year B.Tech/Dual Degree students (2026 Batch). Strong DSA and Quant skills.",
        deadline: "Apply ASAP"
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
        eligibility: "Open to all engineering students across India in teams of 3-4. All members must be from same college.",
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
        postedDate: "2024-12-22",
        description: "Shopify internships are remote-first. Work on high-scale e-commerce systems used by millions.",
        eligibility: "Undergraduate students graduating in 2026 or later. Experience with Ruby/Rails or React is proficient.",
        deadline: "Feb 2026"
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
        description: "GitHub Octernships connect students with real-world projects in partner organizations. Paid remote work.",
        eligibility: "Students who are verifiable GitHub Education Scholars.",
        deadline: "Rolling"
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
        description: "Uber She++ is a diversity initiative aimed at empowering women in technology through mentorship and networking.",
        eligibility: "Female engineering students (2nd/3rd Year).",
        deadline: "Apply ASAP"
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
        postedDate: "2024-12-08",
        description: "Juspay Hiring Challenge. Solve complex functional programming challenges.",
        eligibility: "B.E/B.Tech students (2025/2026 Batch). Proficiency in Functional Programming (Haskell/PureScript) is a preferred.",
        deadline: "May 2026"
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
        postedDate: "2024-11-30",
        description: "GSoC is a global program focused on bringing more student developers into open source software development.",
        eligibility: "Students aged 18+ enrolled in a post-secondary academic program (College/University), or fresh graduates.",
        deadline: "April 2026"
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
        postedDate: "2024-12-10",
        description: "Deloitte India consulting and technical internships. Work on enterprise solutions.",
        eligibility: "B.Tech/M.Tech (CS/IT/Circuital Branches) graduating in 2026. 6.5+ CGPA.",
        deadline: "Rolling"
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
        postedDate: "2024-12-24",
        description: "Morgan Stanley Technology Summer Analyst Program. Work on financial technology platforms.",
        eligibility: "Bachelors/Masters students graduating between Dec 2025 and June 2026. Strong CS fundamentals.",
        deadline: "Apply ASAP"
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
        description: "Intuit Summer Internship offers hands-on experience in building financial products like TurboTax and QuickBooks.",
        eligibility: "Undergraduate students in Computer Science or related fields.",
        deadline: "Apply ASAP"
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
        postedDate: "2024-12-19",
        description: "Cisco Technical Interns work on networking protocols, security, and cloud infra.",
        eligibility: "B.E/B.Tech students (CS/IT/ECE). CGPA 7.0 and above. 2026 Batch.",
        deadline: "Apply ASAP"
    },
    {
        title: "Amazon SDE Internship 2026",
        company: "Amazon",
        tags: ["Internship", "SDE", "FAANG"],
        location: "Bangalore / Hyderabad / Pune / Chennai",
        duration: "Summer (10-12 Weeks) or 6 Months",
        stipend: "1,10,000/month + Relocation",
        status: "Apply ASAP",
        link: "https://www.amazon.jobs/",
        type: "Internship",
        postedDate: "2024-12-25",
        description: "Amazon SDE Interns get to solve complex technical challenges at scale. Pipeline to full-time SDE roles.",
        eligibility: "Pursuing B.Tech/M.Tech in CS (2026/2027 grads). Strong knowledge of OS, DBMS, CN.",
        deadline: "June 2026"
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
        postedDate: "2024-12-21",
        description: "Work on digital learning platforms and academic publishing tech. Innovative environment.",
        eligibility: "Final or pre-final year students.",
        deadline: "Jan 17 2025"
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
        postedDate: "2024-12-16",
        description: "CRED backend interns build high-scale financial systems. Requires strong problem-solving skills and coding capability.",
        eligibility: "Passionate builders. Past internship experience is a bonus.",
        deadline: "Apply ASAP"
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
        postedDate: "2024-12-22",
        description: "Securonix offers cybersecurity internships working on SIEM and threat detection platforms.",
        eligibility: "CS students with interest in Cyber Security and Networking.",
        deadline: "May 2026"
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
        description: "Oracle Cloud Infrastructure (OCI) interns work on building the next generation public cloud.",
        eligibility: "Strong coding skills in C++/Java. Pre-final year students.",
        deadline: "Summer 2026"
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
        postedDate: "2024-12-18",
        description: "ServiceNow interns work on enterprise cloud software that changes how people work.",
        eligibility: "Pursuing a degree in Computer Science or related field.",
        deadline: "Summer 2026"
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
        description: "IBM Research internships involve working on cutting-edge AI, Hybrid Cloud, and Quantum Computing.",
        eligibility: "Master's or PhD students preferred, but strong undergrads considered.",
        deadline: "Apply ASAP"
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
        postedDate: "2024-12-24",
        description: "A nationwide AI skilling and innovation initiative by AWS and Hack2Skill.",
        eligibility: "Open to all students and working professionals. No age limit.",
        deadline: "Phase 1 Ending Soon"
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
        postedDate: "2024-12-23",
        description: "OIST Research Internship Program (Japan). Fully funded research opportunity in STEM fields.",
        eligibility: "Excellent students in final 2 years of Undergraduate or Masters program (STEM).",
        deadline: "Apr 15 2026"
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

const getCompanyLogo = (item) => {
    // Strategy: Use Clearbit Logo API based on the link domain. 
    // This is most accurate for "all" companies.
    let domain = '';
    try {
        const urlObj = new URL(item.link);
        domain = urlObj.hostname.replace('www.', '');
    } catch (e) {
        domain = item.company.toLowerCase().replace(/ /g, '') + ".com";
    }

    const initial = item.company.charAt(0);

    // Clearbit logo
    return `<img src="https://logo.clearbit.com/${domain}" alt="${item.company}" 
                 class="company-logo-img" 
                 onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
            <div class="company-logo-fallback" style="display:none; width:100%; height:100%; align-items:center; justify-content:center; font-weight:bold; color:#fff; background:#333; font-size:1.2rem;">${initial}</div>`;
};

function renderCards(data, container = grid) {
    if (!container) return;
    container.innerHTML = '';

    if (data.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 20px;">No opportunities found matching your criteria.</p>';
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
                <div style="display:flex; gap:12px; align-items:center;">
                    <div class="company-logo-wrapper" style="width:40px; height:40px; border-radius:8px; overflow:hidden; background:var(--bg-color); display:flex; align-items:center; justify-content:center; border:1px solid var(--border-color);">
                        ${getCompanyLogo(item)}
                    </div>
                    <div>
                        <h3 class="role-title">${item.title}</h3>
                        <div class="company-name" style="margin-top:2px;">${item.company}</div>
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

// Initial Render handled below based on page context

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
    // Stricter threshold: 0 for short strings (<4), else 30% of length
    const threshold = query.length < 4 ? 0 : Math.floor(query.length * 0.3);
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

// Initial Render Logic based on Page
const isOpportunitiesPage = window.location.pathname.includes('opportunities.html');

if (isOpportunitiesPage) {
    // Show ALL on opportunities page
    renderCards(internshipData);

    // 1. Check for URL params to auto-search
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');

    if (searchParam && searchInput) {
        searchInput.value = decodeURIComponent(searchParam);
        // Trigger search immediately
        performSearch();
    }

    // 2. Normal Search Listeners for Opportunities Page
    if (searchBtn) searchBtn.addEventListener('click', performSearch);

    if (searchInput) {
        searchInput.addEventListener('input', performSearch); // Real-time
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') e.preventDefault();
        });
    }
} else {
    // Show only 5 on Home page (User requested 5)
    renderCards(internshipData.slice(0, 5));

    // --- Home Page Search Modal Logic ---
    const searchModal = document.getElementById('searchModal');
    const closeSearchModalBtn = document.getElementById('closeSearchModalBtn');
    const searchResultsGrid = document.getElementById('searchResultsGrid');
    const searchQueryDisplay = document.getElementById('searchQueryDisplay');
    const searchSortSelect = document.getElementById('searchSortSelect');

    const handleHomeSearch = (overrideQuery) => {
        const query = overrideQuery || (searchInput ? searchInput.value.trim() : '');
        if (!query && !overrideQuery) return; // Allow empty if just sorting? No, modal needs query.

        // Filter Logic
        let filtered = internshipData.filter(item => {
            const q = query.toLowerCase();
            return isFuzzyMatch(item.title, q) ||
                isFuzzyMatch(item.company, q) ||
                isFuzzyMatch(item.location, q) ||
                item.tags.some(tag => isFuzzyMatch(tag, q));
        });

        // Sorting Logic
        const sortMode = searchSortSelect ? searchSortSelect.value : 'relevance';
        if (sortMode === 'latest') {
            filtered.sort((a, b) => new Date(b.postedDate) - new Date(a.postedDate));
        } else if (sortMode === 'stipend') {
            filtered.sort((a, b) => parseStipendValue(b.stipend) - parseStipendValue(a.stipend));
        }

        // Populate Modal
        if (searchQueryDisplay) searchQueryDisplay.textContent = query;
        renderSearchResults(filtered, searchResultsGrid);

        // Show Modal
        if (searchModal) {
            searchModal.classList.remove('hidden');
            // Force reflow
            void searchModal.offsetWidth;
            searchModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    // Close Logic
    if (closeSearchModalBtn) {
        closeSearchModalBtn.addEventListener('click', () => {
            searchModal.classList.remove('active');
            setTimeout(() => {
                searchModal.classList.add('hidden');
                document.body.style.overflow = '';
            }, 300);
        });
    }

    if (searchBtn) {
        searchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            handleHomeSearch();
        });
    }

    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleHomeSearch();
            }
        });
    }

    if (searchSortSelect) {
        searchSortSelect.addEventListener('change', () => handleHomeSearch());
    }

    // Handle "Popular" Tag Buttons on Home
    const tagBtns = document.querySelectorAll('.tag-btn');
    tagBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            if (category) {
                handleHomeSearch(category);
            }
        });
    });


}

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
    currentInternshipLink = item.link; // Critical: Update apply link

    // Header Apply Button
    const headerBtn = document.getElementById('headerApplyBtn');
    if (headerBtn) {
        headerBtn.onclick = () => window.open(item.link, '_blank');
    }

    // Logo Injection
    const logoContainer = document.getElementById('modalIconContainer');
    if (logoContainer) {
        logoContainer.innerHTML = getCompanyLogo(item);
        // Force larger size for modal? Or keep micro?
        // User asked for "Micro mini logos" generally, but Modal header usually bigger. 
        // But our helper uses specific class. We can override in CSS if needed.
        // For now, Clearbit looks good.
        logoContainer.style.background = 'white'; // Ensure transparency looks good if black logo
        logoContainer.style.display = 'flex';
        logoContainer.style.alignItems = 'center';
        logoContainer.style.justifyContent = 'center';
        logoContainer.style.overflow = 'hidden';
    }

    document.getElementById('modalTitle').textContent = item.title;
    document.getElementById('modalCompany').textContent = item.company;
    document.getElementById('modalLocation').textContent = item.location;
    document.getElementById('modalDuration').textContent = item.duration;
    document.getElementById('modalStipend').textContent = item.stipend;

    // Safety check for optional description fields
    const descEl = document.getElementById('modalDescription');
    if (descEl) descEl.textContent = item.description || "No description available yet.";

    const eligEl = document.getElementById('modalEligibility');
    if (eligEl) eligEl.textContent = item.eligibility || "Open to all relevant candidates.";

    // Posted date removed from voucher layout, skipping
    // Icons
    const stipendIcon = document.getElementById('modalStipendIcon');
    if (stipendIcon) { // Check existence to prevent crash
        stipendIcon.className = 'fa-solid ' + getCurrencyIcon(item.stipend);
    }

    // Tags
    const tagsContainer = document.getElementById('modalTags');
    tagsContainer.innerHTML = item.tags.map(tag => `<span class="card-tag">${tag}</span>`).join('');

    // Show Modal
    modal.classList.remove('hidden'); // Fix: Remove hidden class
    // Force reflow to enable transition if needed, though usually not strictly necessary if we wait a tick
    // but for now just removing hidden + adding active is enough to show it
    // slightly delayed adding 'active' allows transition if display:none was used

    // Use a small timeout to allow display:block to apply before opacity transition
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);

    document.body.style.overflow = 'hidden'; // Prevent scrolling
};

// Close Modal
function closeModal() {
    modal.classList.remove('active');

    // Wait for transition to finish before hiding
    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }, 300); // Matches CSS transition duration
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

    // If on Home Page and NO filters/text are active, limit to 4
    // Defaults: type='all', status='Open', company='all', query=''
    if (!isOpportunitiesPage) {
        const isDefaultFilters =
            currentFilters.type === 'all' &&
            currentFilters.status === 'Open' &&
            currentFilters.company === 'all' &&
            query === '';

        if (isDefaultFilters) {
            renderCards(filtered.slice(0, 5));
            // Also update count to show "Showing Top 5"
            if (document.getElementById('resultsCount')) {
                document.getElementById('resultsCount').textContent = `Showing 5 featured opportunities`;
            }
            return;
        }
    }

    renderCards(filtered);
    updateResultsCount(filtered.length);
}

function updateResultsCount(count) {
    if (resultsCount) {
        resultsCount.textContent = `Showing ${count} opportunit${count !== 1 ? 'ies' : 'y'}`;
    }
}

const headerApplyBtn = document.getElementById('headerApplyBtn');

// Proceed to Confirmation (New Button)
if (headerApplyBtn) {
    headerApplyBtn.addEventListener('click', () => {
        detailsView.classList.add('hidden');
        confirmView.classList.remove('hidden');
    });
}

// Proceed to Confirmation (Old Button - kept for safety)
if (proceedBtn) {
    proceedBtn.addEventListener('click', () => {
        detailsView.classList.add('hidden');
        confirmView.classList.remove('hidden');
    });
}

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

// --- Render Search Results (List View) ---
function renderSearchResults(data, container) {
    if (!container) return;
    container.innerHTML = '';

    if (data.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px; color: var(--text-muted);">
                <i class="fa-solid fa-cloud-moon" style="font-size: 3rem; margin-bottom: 16px; opacity: 0.5;"></i>
                <p>No matches found.</p>
                <p style="font-size: 0.85rem;">Try "Amazon", "Hackathon", or "Internship"</p>
            </div>
        `;
        return;
    }

    const list = document.createElement('div');
    list.className = 'search-list';

    data.forEach(item => {
        const row = document.createElement('div');
        row.className = 'search-item';

        // Status Badge Logic
        let statusClass = 'status-badge';
        const s = item.status.toLowerCase();
        if (s.includes('open')) statusClass += ' status-open';
        else if (s.includes('closed')) statusClass += ' status-closed';
        else statusClass += ' status-pending';

        const logoHTML = getCompanyLogo(item);

        row.innerHTML = `
            <div class="search-item-left">
                <div class="company-icon-sm" style="background:white; padding:4px; overflow:hidden;">${logoHTML}</div>
                <div class="search-info">
                    <h4>${item.title}</h4>
                    <span class="search-meta"><i class="fa-solid fa-building"></i> ${item.company} &bull; ${item.location}</span>
                </div>
            </div>
            <div class="search-item-right">
                <span class="${statusClass}">${item.status}</span>
                <button class="btn-icon-sm"><i class="fa-solid fa-chevron-right"></i></button>
            </div>
        `;

        // Interaction
        row.addEventListener('click', () => {
            // Close search modal
            const searchModal = document.getElementById('searchModal');
            if (searchModal) searchModal.classList.remove('active');
            setTimeout(() => {
                if (searchModal) searchModal.classList.add('hidden');
                document.body.style.overflow = '';
                // Open Details Modal
                window.openModal(item.title);
            }, 200);
        });

        list.appendChild(row);
    });

    container.appendChild(list);
}

// --- Widget Logic (Feedback & Chat) ---
const fabFeedback = document.getElementById('fabFeedback');
const feedbackModal = document.getElementById('feedbackModal');
const closeFeedbackBtn = document.getElementById('closeFeedbackBtn');
const submitFeedbackBtn = document.getElementById('submitFeedbackBtn');
const feedbackInput = document.getElementById('feedbackInput');

if (fabFeedback && feedbackModal) {
    fabFeedback.addEventListener('click', () => {
        feedbackModal.classList.remove('hidden');
    });
    closeFeedbackBtn.addEventListener('click', () => {
        feedbackModal.classList.add('hidden');
    });
    submitFeedbackBtn.addEventListener('click', () => {
        const text = feedbackInput.value.trim();
        if (text) {
            alert("Thank you for your feedback! We have received it.");
            feedbackInput.value = '';
            feedbackModal.classList.add('hidden');
        }
    });
}

// --- Chat Bot Logic ---
const fabChat = document.getElementById('fabChat');
const chatWidget = document.getElementById('chatWidget');
const closeChatBtn = document.getElementById('closeChatBtn');
const chatInput = document.getElementById('chatInput');
const sendChatBtn = document.getElementById('sendChatBtn');
const chatBody = document.getElementById('chatBody');

const botResponses = {
    "hello": "Hi there! How can I assist you today?",
    "hi": "Hello! Looking for an internship?",
    "internship": "You can find internships by clicking 'Browse Jobs' or scrolling to the opportunities section.",
    "hackathon": "We feature hackathons from Microsoft, government bodies, and top tech firms. Filter by 'Hackathon' type!",
    "stipend": "Stipends vary by company. We list them clearly on each opportunity card.",
    "resume": "Need resume help? Check out our Resume section for templates and tips.",
    "contact": "You can reach us at support@internnow.com",
    "default": "I'm not sure about that. Try asking about internships, hackathons, or stipends!"
};

function addMessage(text, sender) {
    if (!chatBody) return;
    const msg = document.createElement('div');
    msg.className = `chat-msg ${sender}`;
    msg.textContent = text;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function handleChat() {
    const text = chatInput.value.trim().toLowerCase();
    if (!text) return;

    addMessage(chatInput.value, 'user');
    chatInput.value = '';

    let response = "I'm not sure about that. Try asking about **internships**, **stipends**, or a specific company like **Amazon**.";

    // 1. Check for specific company existence (Fuzzy Match for Typos!)
    // We check if any company name fuzzy matches the input text
    const foundCompany = internshipData.find(item => {
        // Check if user text fuzzy matches company name
        // OR if company name is essentially inside the text
        const companyName = item.company.toLowerCase();
        return isFuzzyMatch(companyName, text) || text.includes(companyName);
    });

    if (foundCompany) {
        response = `Yes! We have an opening for **${foundCompany.company}** (${foundCompany.title}). <br>Status: <b>${foundCompany.status}</b>. Search for "${foundCompany.company}" to apply!`;
    }
    // 2. Common Conversational Intents
    else if (text.includes('hello') || text.includes('hi') || text.includes('hey')) {
        response = "Hello! 👋 I can help you find internships. Try typing a company name like 'Google' or 'Amazon'!";
    }
    else if (['yes', 'yeah', 'sure', 'yup', 'okay'].some(word => text.includes(word))) {
        response = "Great! You can start by using the Search bar to find specific roles, or browse the latest cards.";
    }
    else if (text.includes('stipend') || text.includes('salary') || text.includes('pay') || text.includes('money')) {
        response = "Stipends range from 10k to 1.5L+. Check specific cards for details. Amazon pays ~1.1L!";
    }
    else if (text.includes('resume') || text.includes('cv')) {
        response = "We have a Resume Builder! Check the navigation menu.";
    }
    else if (text.includes('hackathon')) {
        response = "We list Hackathons too! Look for the trophy icon 🏆.";
    }

    setTimeout(() => {
        addMessage(response, 'bot');
    }, 500);
}

if (fabChat && chatWidget) {
    fabChat.addEventListener('click', () => {
        chatWidget.classList.toggle('hidden');
    });
    closeChatBtn.addEventListener('click', () => {
        chatWidget.classList.add('hidden');
    });

    if (sendChatBtn) sendChatBtn.addEventListener('click', handleChat);
    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleChat();
        });
    }
}





