// Loading Screen
window.addEventListener('load', () => {
    const loadingScreen = document.querySelector('.loading');
    loadingScreen.style.display = 'none';
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Lazy Load Animation
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.lazy-load').forEach(element => {
    observer.observe(element);
});

// Project Cards Animation
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('.card-inner').style.transform = 'rotateY(180deg)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.querySelector('.card-inner').style.transform = 'rotateY(0deg)';
    });
});

// Show More Projects
let isShowingAll = false;
const projectGrid = document.getElementById('project-grid');
const showMoreBtn = document.querySelector('.show-more-btn');

function showMoreProjects() {
    if (!isShowingAll) {
        // Add more project cards
        const newProjects = [
            {
                title: 'Weather App',
                description: 'A real-time weather application using OpenWeatherMap API.',
                link: '#'
            },
            {
                title: 'Task Manager',
                description: 'A full-stack task management application with user authentication.',
                link: '#'
            }
        ];

        newProjects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.innerHTML = `
                <div class="card-inner">
                    <div class="card-front">
                        <h3>${project.title}</h3>
                    </div>
                    <div class="card-back">
                        <p>${project.description}</p>
                        <a href="${project.link}" target="_blank" class="project-link">View Project</a>
                    </div>
                </div>
            `;
            projectGrid.appendChild(projectCard);
            
            // Add hover animation to new cards
            projectCard.addEventListener('mouseenter', () => {
                projectCard.querySelector('.card-inner').style.transform = 'rotateY(180deg)';
            });
            
            projectCard.addEventListener('mouseleave', () => {
                projectCard.querySelector('.card-inner').style.transform = 'rotateY(0deg)';
            });
        });

        showMoreBtn.innerHTML = 'Show Less <i class="fas fa-chevron-up"></i>';
    } else {
        // Remove added project cards
        const cards = projectGrid.querySelectorAll('.project-card');
        for (let i = cards.length - 1; i >= 3; i--) {
            cards[i].remove();
        }
        showMoreBtn.innerHTML = 'Show More <i class="fas fa-chevron-down"></i>';
    }
    isShowingAll = !isShowingAll;
}

// Contact Form Handling
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Here you would typically send the data to a server
    // For now, just show an alert
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});
