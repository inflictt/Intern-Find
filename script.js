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
                <div class="info-item" style="color: ${item.status === 'Open' ? '#22c55e' : '#ef4444'}">
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

// Initial Render
renderCards(internshipData);

// Basic Search Logic
searchBtn.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase();
    const filtered = internshipData.filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.company.toLowerCase().includes(query) ||
        item.tags.some(tag => tag.toLowerCase().includes(query))
    );
    renderCards(filtered);
});

// Category Buttons Logic
document.querySelectorAll('.tag-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const category = e.target.dataset.category;
        searchInput.value = category; // Visual feedback
        const filtered = internshipData.filter(item =>
            item.tags.some(tag => tag.includes(category)) ||
            item.title.includes(category)
        );
        renderCards(filtered);
    });
});

// Tab Filters Logic
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active to clicked
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        if (filter === 'all') {
            renderCards(internshipData);
        } else if (filter === 'Global' || filter === 'India') {
            const filtered = internshipData.filter(item => item.location.includes(filter));
            renderCards(filtered);
        } else {
            const filtered = internshipData.filter(item => item.type === filter || item.tags.includes(filter));
            renderCards(filtered);
        }
    });
});

