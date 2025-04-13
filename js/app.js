// Navbar Toggle
const navBtn = document.getElementById('nav-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');

navBtn.addEventListener('click', () => {
  sidebar.classList.remove('-translate-x-full');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.add('-translate-x-full');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    if (!sidebar.classList.contains('-translate-x-full')) {
      sidebar.classList.add('-translate-x-full');
    }
  });
});

// Typewriter Effect
const typed = new Typed('#typed', {
  strings: ['Full Stack Developer', 'API Specialist', 'Solution Architect'],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});

// Scroll Animations
const sections = document.querySelectorAll('.section-animate');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('opacity-100', 'translate-y-0');
      entry.target.classList.remove('opacity-0', 'translate-y-12');
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  section.classList.add('opacity-0', 'translate-y-12', 'transition', 'duration-700', 'ease-out');
  observer.observe(section);
});

// Skills Chart with Recharts
const { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } = Recharts;

const skillsData = [
  { name: 'Spring Boot', proficiency: 90 },
  { name: 'React', proficiency: 85 },
  { name: 'Django', proficiency: 80 },
  { name: 'PostgreSQL', proficiency: 85 },
  { name: 'WSO2', proficiency: 70 },
  { name: 'WordPress', proficiency: 75 },
  { name: 'JavaScript', proficiency: 80 },
  { name: 'Tailwind CSS', proficiency: 70 }
];

const renderSkillsChart = () => {
  ReactDOM.render(
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={skillsData} layout="vertical" margin={{ top: 20, right: 30, left: 50, bottom: 5 }}>
        <XAxis type="number" stroke="#D1D5DB" tick={{ fill: '#D1D5DB' }} domain={[0, 100]} />
        <YAxis type="category" dataKey="name" stroke="#D1D5DB" tick={{ fill: '#D1D5DB' }} />
        <Tooltip contentStyle={{ background: 'rgba(31, 31, 31, 0.9)', border: 'none', borderRadius: '8px', color: '#fff' }} />
        <Bar dataKey="proficiency" fill="#7C3AED" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>,
    document.getElementById('skills-chart')
  );
};

renderSkillsChart();

// Contact Form Validation
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('contact-name').value.trim();
  const email = document.getElementById('contact-email').value.trim();
  const message = document.getElementById('contact-message').value.trim();

  if (name && email && message) {
    alert('Message sent! (Demo alert; integrate with a backend for functionality.)');
    contactForm.reset();
  } else {
    alert('Please fill in all fields.');
  }
});

// Set Year
document.getElementById('date').textContent = new Date().getFullYear();