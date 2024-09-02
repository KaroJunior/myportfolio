var q=document.getElementById('matrix')
        s=window.screen
        w=q.width=s.width
        h=q.height=s.height,
        p=Array(256).join(1).split(''),
        c=q.getContext('2d'),
        m=Math;

setInterval(function(){
    c.fillStyle='rgba(0,0,0,0.05)';
        c.fillRect(0,0,w,h);
        c.fillStyle='rgba(0,255,0,1)';
        p=p.map(function(v,i){
            r=m.random();
            var str = String.fromCharCode(m.floor(2720+r*33));
            c.fillText(str,i*10,v);
            v+=10
            var ret = v>768+r*1e4?0:v
            return ret;
        });
},33);

// HAMBURGER MENU
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    toggleButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });
});
document.querySelector('.mobile-menu-toggle').addEventListener('click', function() {
    this.classList.toggle('active'); // Toggle the 'active' class
});

// COUNTER
document.addEventListener('DOMContentLoaded', function() {
    const section = document.querySelector('#counter');
    const counts = document.querySelectorAll('.count');
    const speed = 50; // Lower speed value for slower counting

    const options = {
        threshold: 1.0
    };

    function updateCounter(counter) {
        const target = Number(counter.getAttribute('data-target'));
        const count = Number(counter.innerText);
        const inc = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            requestAnimationFrame(() => updateCounter(counter)); // Use requestAnimationFrame for smoother animation
        } else {
            counter.innerText = `${target}+`; // Append "+" after reaching the target
        }
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                section.classList.add('fade-in');
                counts.forEach((counter) => {
                    updateCounter(counter);
                });
                observer.unobserve(section); // Stop observing after animation starts
            }
        });
    }, options);

    observer.observe(section);
});



// FADE-IN EFFECT FOR SERVICES PAGE
const faders = document.querySelectorAll('.section');

const appearOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('fade-in');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});


//Other aniamtions
// Intersection Observer for Animations
const animateOnScroll = new IntersectionObserver((entries, animateOnScroll) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            animateOnScroll.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.animate').forEach(el => {
    animateOnScroll.observe(el);
});

