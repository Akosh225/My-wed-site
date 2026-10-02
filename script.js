// Projects data dictionary
const projectsData = {
    1: {
        title: 'Web & UI/UX Design System',
        category: 'UI/UX Design',
        embedUrl: 'https://embed.figma.com/design/Wp6aToEM9LiJrXWqC2s2dv/Untitled?node-id=0-1&embed-host=share',
        figmaUrl: 'https://www.figma.com/design/Wp6aToEM9LiJrXWqC2s2dv/Untitled',
        desc: 'Интерактивный макет и UI-концепт веб-интерфейса, спроектированный в Figma. Включает структурированные UI-компоненты, сетку и дизайн-систему.',
        tags: ['Figma', 'UI/UX', 'Design System', 'Wireframing']
    },

    2: {
        title: 'Interactive App & Web Prototype',
        category: 'UI/UX Design',
        embedUrl: 'https://embed.figma.com/design/SZnqfmP9HFPPHDFjVgI4eU/Untitled?node-id=0-1&embed-host=share',
        figmaUrl: 'https://www.figma.com/design/SZnqfmP9HFPPHDFjVgI4eU/Untitled',
        desc: 'Прототип и векторный дизайн пользовательских интерфейсов с компонентной системой и автолейаутами.',
        tags: ['Figma', 'Prototyping', 'Component Library', 'Mobile/Web UI']
    },

    3: {
        title: 'Макет «Зачет» — Web Interface',
        category: 'UI/UX Design',
        embedUrl: 'https://embed.figma.com/design/0enNMBOvnhH2E8kWNqAqSu/%D0%B7%D0%B0%D1%87%D0%B5%D1%82?node-id=3-3&embed-host=share',
        figmaUrl: 'https://www.figma.com/design/0enNMBOvnhH2E8kWNqAqSu/%D0%B7%D0%B0%D1%87%D0%B5%D1%82',
        desc: 'Учебный веб-проект и векторный дизайн интерфейса, созданный для курсовой работы / зачета в Figma.',
        tags: ['Figma', 'Academic Project', 'Web Design', 'Auto Layout']
    }
};


// Mobile Menu Toggle
const menuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});


// Filter Logic
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {

        filterBtns.forEach(b => {
            b.classList.remove('gradient-bg', 'text-white', 'active');
            b.classList.add('glass');
        });

        btn.classList.add('gradient-bg', 'text-white', 'active');
        btn.classList.remove('glass');

        const filter = btn.getAttribute('data-filter');

        projectCards.forEach(card => {

            const categories = card
                .getAttribute('data-category')
                .split(' ');

            if (filter === 'all' || categories.includes(filter)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});


// Modal Window Logic
function openModal(id) {

    const data = projectsData[id];

    if (!data) return;

    document.getElementById('modal-iframe').src = data.embedUrl;

    document.getElementById('modal-title').innerText = data.title;

    document.getElementById('modal-category').innerText = data.category;

    document.getElementById('modal-desc').innerText = data.desc;

    document.getElementById('modal-link').href = data.figmaUrl;

    const tagsContainer = document.getElementById('modal-tags');

    tagsContainer.innerHTML = '';

    data.tags.forEach(tag => {

        const tagEl = document.createElement('span');

        tagEl.className =
            'text-xs bg-slate-800 px-3 py-1 rounded-lg text-slate-300';

        tagEl.innerText = tag;

        tagsContainer.appendChild(tagEl);
    });

    document
        .getElementById('project-modal')
        .classList.remove('hidden');

    document.body.style.overflow = 'hidden';
}


function closeModal() {

    document
        .getElementById('project-modal')
        .classList.add('hidden');

    document.getElementById('modal-iframe').src = '';

    document.body.style.overflow = 'auto';
}


// Close Modal on Background Click
document
    .getElementById('project-modal')
    .addEventListener('click', (e) => {

        if (e.target.id === 'project-modal') {
            closeModal();
        }
    });


// Form Submission Simulation
function handleFormSubmit(event) {

    event.preventDefault();

    alert(
        'Спасибо за ваше сообщение! Аян свяжется с вами в ближайшее время.'
    );

    event.target.reset();
}