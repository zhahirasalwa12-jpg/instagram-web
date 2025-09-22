// Instagram Profile JavaScript

const samplePosts = [
    { id: 1, image: 'foto 2.jpg', likes: 1234, comments: 56 },
    { id: 2, image: 'foto 1.jpg', likes: 2156, comments: 89 },
    { id: 3, image: 'foto 3.jpg', likes: 856, comments: 32 },
];

const profileData = {
    username: 'sarah_travels',
    displayName: 'Sarah Martinez',
    bio: '✈️ Travel Blogger & Photographer<br>🌍 Exploring 45+ countries<br>📸 Canon EOS R5<br>💌 Collab: sarah@email.com<br>📍 Currently in: Bali, Indonesia',
    website: 'linktr.ee/sarah_travels',
    postsCount: 87,
    followersCount: '12.4K',
    followingCount: 892
};

let postsGrid;
let followBtn;
let tabBtns;

document.addEventListener('DOMContentLoaded', function() {
    initializeElements();
    generatePosts();
    attachEventListeners();
});

function initializeElements() {
    postsGrid = document.getElementById('posts-grid');
    followBtn = document.getElementById('follow-btn');
    tabBtns = document.querySelectorAll('.tab-btn');
}

function generatePosts() {
    if (!postsGrid) return;
    
    postsGrid.innerHTML = '';
    
    samplePosts.forEach(post => {
        const postElement = createPostElement(post);
        postsGrid.appendChild(postElement);
    });
}

function createPostElement(post) {
    const postDiv = document.createElement('div');
    postDiv.className = 'aspect-square relative post-hover overflow-hidden group';
    
    postDiv.innerHTML = `
        <img src="${post.image}" 
             alt="Post ${post.id}" 
             class="w-full h-full object-cover"
             loading="lazy">
        <div class="post-overlay">
            <div class="flex items-center space-x-4 text-white">
                <div class="flex items-center space-x-1">
                    <i class="fas fa-heart"></i>
                    <span class="text-sm font-semibold">${formatNumber(post.likes)}</span>
                </div>
                <div class="flex items-center space-x-1">
                    <i class="fas fa-comment"></i>
                    <span class="text-sm font-semibold">${post.comments}</span>
                </div>
            </div>
        </div>
    `;
    
    postDiv.addEventListener('click', () => openPost(post));
    return postDiv;
}

function formatNumber(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

function openPost(post) {
    console.log('Opening post:', post);
    alert(`Post ${post.id} clicked!\nLikes: ${post.likes}\nComments: ${post.comments}`);
}

function attachEventListeners() {
    if (followBtn) {
        followBtn.addEventListener('click', toggleFollow);
    }
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn));
    });
}

function toggleFollow() {
    if (!followBtn) return;
    
    const isFollowing = followBtn.textContent.trim() === 'Following';
    
    if (isFollowing) {
        followBtn.textContent = 'Follow';
        followBtn.className = 'flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold text-sm hover:bg-blue-600 transition-colors';
    } else {
        followBtn.textContent = 'Following';
        followBtn.className = 'flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg font-semibold text-sm hover:bg-gray-300 transition-colors';
    }
    
    followBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        followBtn.style.transform = 'scale(1)';
    }, 150);
}

function switchTab(clickedBtn) {
    const tabName = clickedBtn.dataset.tab;
    
    tabBtns.forEach(btn => {
        btn.classList.remove('active', 'border-gray-900', 'text-gray-900');
        btn.classList.add('border-transparent', 'text-gray-400');
    });
    
    clickedBtn.classList.add('active', 'border-gray-900', 'text-gray-900');
    clickedBtn.classList.remove('border-transparent', 'text-gray-400');
    
    switch(tabName) {
        case 'posts':
            generatePosts();
            break;
        case 'reels':
        case 'saved':
        case 'tagged':
            showEmptyState(tabName);
            break;
    }
}

function showEmptyState(tabName) {
    if (!postsGrid) return;
    
    const icons = {
        reels: 'fas fa-film',
        saved: 'fas fa-bookmark', 
        tagged: 'fas fa-user-tag'
    };
    
    const messages = {
        reels: { title: 'No Reels Yet', subtitle: 'Share your first reel' },
        saved: { title: 'Only you can see what you saved', subtitle: 'Save posts to view them here' },
        tagged: { title: 'No Photos', subtitle: 'Photos of you will appear here' }
    };
    
    postsGrid.innerHTML = `
        <div class="col-span-3 flex flex-col items-center justify-center py-16 text-gray-500">
            <i class="${icons[tabName]} text-6xl mb-4 opacity-50"></i>
            <p class="text-lg font-medium">${messages[tabName].title}</p>
            <p class="text-sm">${messages[tabName].subtitle}</p>
        </div>
    `;
}