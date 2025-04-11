document.addEventListener("DOMContentLoaded", function () {
    // Text animation for the left box
    let textElement = document.getElementById("animated-text");
    if (textElement) {
        let text = textElement.textContent.trim();
        textElement.innerHTML = ""; // Clear existing text

        text.split("").forEach((char, index) => {
            let span = document.createElement("span");
            span.textContent = char;

            if (char === " ") {
                span.innerHTML = " "; // Preserve spaces
            }

            span.style.animation = `fadeIn 0.8s ease ${index * 0.02}s forwards`;
            span.style.display = "inline"; // Ensures normal word wrapping
            textElement.appendChild(span);
        });
    }

    // Text for the right box (sample skills)
    let rightTextElement = document.getElementById("animated-text-right");
    if (rightTextElement) {
        const skills = [
            "Data Analysis",
            "Machine Learning",
            "Python",
            "Statistical Modeling",
            "Research Methodology",
            "Problem Solving"
        ];
        
        rightTextElement.innerHTML = "<strong style='font-size: 18px; color: #c45e84;'>Skills</strong><br><br>";
        
        skills.forEach((skill, index) => {
            let skillElement = document.createElement("div");
            skillElement.style.marginBottom = "10px";
            skillElement.style.opacity = "0";
            skillElement.style.animation = `fadeIn 0.8s ease ${index * 0.2 + 0.5}s forwards`;
            
            // Create skill name
            let skillName = document.createElement("div");
            skillName.textContent = skill;
            skillName.style.marginBottom = "5px";
            skillElement.appendChild(skillName);
            
            // Create progress bar background
            let progressBg = document.createElement("div");
            progressBg.style.height = "6px";
            progressBg.style.backgroundColor = "#f0e0e6";
            progressBg.style.borderRadius = "3px";
            progressBg.style.width = "100%";
            
            // Create progress bar
            let progressBar = document.createElement("div");
            // Random skill level between 65-95%
            let width = Math.floor(Math.random() * 30) + 65;
            progressBar.style.width = `${width}%`;
            progressBar.style.height = "100%";
            progressBar.style.backgroundColor = "#E69DB8";
            progressBar.style.borderRadius = "3px";
            progressBar.style.transition = "width 1s ease";
            progressBar.style.width = "0";
            
            progressBg.appendChild(progressBar);
            skillElement.appendChild(progressBg);
            
            rightTextElement.appendChild(skillElement);
            
            // Animate progress bars after delay
            setTimeout(() => {
                progressBar.style.width = `${width}%`;
            }, (index * 0.2 + 1) * 1000);
        });
    }

    // Image scroll animation
    const journeyImage = document.querySelector(".slide-in-image");

    function checkVisibility() {
        if (!journeyImage) return;

        const rect = journeyImage.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top < windowHeight * 0.9 && !journeyImage.classList.contains("show-image")) {
            journeyImage.classList.add("show-image");
        }
    }

    // Optimize performance using requestAnimationFrame
    function onScroll() {
        requestAnimationFrame(checkVisibility);
    }

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", checkVisibility);

    // Check visibility on load
    setTimeout(checkVisibility, 500);
});
// Add theme toggle button and functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create theme toggle button
    const themeToggle = document.createElement('div');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="sun-icon">
            <path d="M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S14.76,7,12,7L12,7z M2,13h2c0.55,0,1-0.45,1-1s-0.45-1-1-1H2 c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13h2c0.55,0,1-0.45,1-1s-0.45-1-1-1h-2c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2 c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1 S11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0 s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06 c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41 c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36 c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="moon-icon" style="display:none;">
            <path d="M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36c-0.98,1.37-2.58,2.26-4.4,2.26 c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"/>
        </svg>
    `;
    document.body.appendChild(themeToggle);

    // Check for saved theme preference or prefer-color-scheme
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Set initial theme
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
        document.body.classList.add('dark-theme');
        document.querySelector('.sun-icon').style.display = 'none';
        document.querySelector('.moon-icon').style.display = 'block';
    }

    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        
        const isDark = document.body.classList.contains('dark-theme');
        
        // Update icons
        document.querySelector('.sun-icon').style.display = isDark ? 'none' : 'block';
        document.querySelector('.moon-icon').style.display = isDark ? 'block' : 'none';
        
        // Save preference
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    // Listen for OS theme changes
    prefersDarkScheme.addEventListener('change', (e) => {
        // Only auto-switch if user hasn't manually set a preference
        if (!localStorage.getItem('theme')) {
            if (e.matches) {
                document.body.classList.add('dark-theme');
                document.querySelector('.sun-icon').style.display = 'none';
                document.querySelector('.moon-icon').style.display = 'block';
            } else {
                document.body.classList.remove('dark-theme');
                document.querySelector('.sun-icon').style.display = 'block';
                document.querySelector('.moon-icon').style.display = 'none';
            }
        }
    });
});