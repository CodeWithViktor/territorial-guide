document.addEventListener('DOMContentLoaded', () => {
    // Navigation functionality
    const navButtons = document.querySelectorAll('.nav-button');
    const sections = document.querySelectorAll('main > section');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetSection = button.getAttribute('data-section');
            sections.forEach(section => {
                if (section.id === targetSection) {
                    section.classList.remove('hidden');
                    section.classList.add('active');
                } else {
                    section.classList.add('hidden');
                    section.classList.remove('active');
                }
            });
        });
    });

    // Animated background
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    document.getElementById('particles-background').appendChild(canvas);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 100;

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 5 + 1;
            this.speedX = Math.random() * 3 - 1.5;
            this.speedY = Math.random() * 3 - 1.5;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.size > 0.2) this.size -= 0.1;

            if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
            if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
        }

        draw() {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
        }
    }

    function initParticles() {
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
        }
        requestAnimationFrame(animateParticles);
    }

    initParticles();
    animateParticles();

    // Resize event listener
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    // Clan join button functionality
    const joinClanButtons = document.querySelectorAll('.join-clan-btn');
    joinClanButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const clanName = e.target.parentElement.querySelector('h3').textContent;
            alert(`You've requested to join ${clanName}. An admin will review your request soon.`);
        });
    });

    // Add bot button functionality
    const addBotButtons = document.querySelectorAll('.add-bot-btn');
    addBotButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const botName = e.target.parentElement.querySelector('h3').textContent;
            alert(`You're about to add ${botName} to your Discord server. Please follow the authorization process.`);
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Tutorial accordion functionality
    const tutorialHeaders = document.querySelectorAll('.tutorial-content h4');
    tutorialHeaders.forEach(header => {
        header.addEventListener('click', () => {
            header.classList.toggle('active');
            const content = header.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    // News "Read More" functionality
    const readMoreLinks = document.querySelectorAll('.read-more');
    readMoreLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const newsTitle = e.target.parentElement.querySelector('h3').textContent;
            alert(`You're reading more about: ${newsTitle}. Full article coming soon!`);
        });
    });

    // Simple form validation for a newsletter signup (if you decide to add one)
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = document.getElementById('newsletter-email');
            if (emailInput.value.includes('@') && emailInput.value.includes('.')) {
                alert('Thank you for signing up for our newsletter!');
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }

    // Add a simple loading animation
    window.addEventListener('load', () => {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.display = 'none';
        }
        document.body.classList.add('loaded');
    });

    // Implement a simple theme switcher
    const themeSwitcher = document.getElementById('theme-switcher');
    if (themeSwitcher) {
        themeSwitcher.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            document.body.classList.toggle('light-theme');
        });
    }
});



// tutorial
document.addEventListener('DOMContentLoaded', function() {
    const tutorialCards = document.querySelectorAll('.tutorial-card');
    const tutorialContent = document.getElementById('tutorial-content');

    tutorialCards.forEach(card => {
        card.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            const title = this.querySelector('h3').textContent;
            showTutorialContent(section, title);
        });
    });

    function showTutorialContent(section, title) {
        const tutorialContent = document.getElementById('tutorial-content');
        const usernameContent = document.getElementById('username-content');
        const clanContent = document.getElementById('clan-content');
        const currencyContent = document.getElementById('currency-content');
    
        // Hide all content sections first
        usernameContent.classList.add('hidden');
        clanContent.classList.add('hidden');
        currencyContent.classList.add('hidden');
    
        if (section === 'username') {
            usernameContent.classList.remove('hidden');
        } else if (section === 'clan') {
            clanContent.classList.remove('hidden');
        } else if (section === 'currency') {
            currencyContent.classList.remove('hidden');
        } else {
            // For other sections, you might want to show a "coming soon" message
            tutorialContent.innerHTML = `
                <h2>${title}</h2>
                <div class="tutorial-content">
                    <p>Detailed content for the ${section} section is coming soon. Stay tuned for updates!</p>
                </div>
            `;
        }
    
        tutorialContent.classList.remove('hidden');
        tutorialContent.scrollIntoView({behavior: "smooth"});
    }
    
    
});








document.addEventListener('DOMContentLoaded', function() {
    const categoryCards = document.querySelectorAll('.clan-category-card');
    const clanLists = document.querySelectorAll('.clan-list');
    const clanListsContainer = document.getElementById('clan-lists');
    const backButton = document.getElementById('back-to-categories');
    const categoriesContainer = document.querySelector('.clan-categories');

    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            
            // Hide categories, show clan lists container
            categoriesContainer.classList.add('hidden');
            clanListsContainer.classList.remove('hidden');
            
            // Hide all clan lists
            clanLists.forEach(list => list.classList.add('hidden'));
            
            // Show the selected clan list
            document.getElementById(`${category}-clans`).classList.remove('hidden');
        });
    });

    backButton.addEventListener('click', function() {
        // Hide clan lists, show categories
        clanListsContainer.classList.add('hidden');
        categoriesContainer.classList.remove('hidden');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const categoryCards = document.querySelectorAll('.clan-category-card');
    const clanLists = document.querySelectorAll('.clan-list');
    const clanListsContainer = document.getElementById('clan-lists');
    const backButton = document.getElementById('back-to-categories');
    const categoriesContainer = document.querySelector('.clan-categories');
    const joinButtons = document.querySelectorAll('.join-discord-btn');
    const discordPrompt = document.getElementById('discord-prompt');
    const confirmJoin = document.getElementById('confirm-join');
    const cancelJoin = document.getElementById('cancel-join');
    let currentDiscordUrl = '';

    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            
            // Hide categories, show clan lists container
            categoriesContainer.classList.add('hidden');
            clanListsContainer.classList.remove('hidden');
            
            // Hide all clan lists
            clanLists.forEach(list => list.classList.add('hidden'));
            
            // Show the selected clan list
            document.getElementById(`${category}-clans`).classList.remove('hidden');
        });
    });

    backButton.addEventListener('click', function() {
        // Hide clan lists, show categories
        clanListsContainer.classList.add('hidden');
        categoriesContainer.classList.remove('hidden');
    });

    joinButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            currentDiscordUrl = this.dataset.discord;
            discordPrompt.classList.remove('hidden');
        });
    });

    confirmJoin.addEventListener('click', function() {
        window.open(currentDiscordUrl, '_blank');
        discordPrompt.classList.add('hidden');
    });

    cancelJoin.addEventListener('click', function() {
        discordPrompt.classList.add('hidden');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const creatorGrid = document.querySelector('.creator-grid');

    creatorGrid.addEventListener('click', function(event) {
        if (event.target.classList.contains('about-btn')) {
            const creatorItem = event.target.closest('.creator-item');
            const description = creatorItem.querySelector('.creator-description');
            description.classList.toggle('hidden');
        } else if (event.target.classList.contains('visit-channel-btn')) {
            const channelUrl = event.target.dataset.channel;
            window.open(channelUrl, '_blank');
        }
    });
});
