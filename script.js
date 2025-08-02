const blogPosts = [
  { title: "AI and the Future", image: "AI.jpeg", description: "Exploring AI advancements...", date: "2025-07-01", category: "Tech" },
  { title: "Trip to Iceland", image: "trip to island.jpg", description: "My journey through glaciers and volcanoes.", date: "2025-06-15", category: "Travel" },
  { title: "Best Vegan Dishes", image: "vegan dish.jpeg", description: "Top recipes you must try!", date: "2025-05-30", category: "Food" },
  { title: "Quantum Computing", image: "quantum computing.jpeg", description: "A beginner’s guide.", date: "2025-07-15", category: "Tech" },
  { title: "Hiking in Nepal", image: "winter-hike-everest-base-camp.jpg", description: "What to expect and prepare.", date: "2025-05-20", category: "Travel" },
  { title: "Street Food Tour", image: "street food.jpeg", description: "Tasting flavors around the world.", date: "2025-04-22", category: "Food" },
   { title: "AI and the Future of Humans", image: "https://www.miraiwebsitedesigning.com/wp-content/uploads/2024/10/Will-artificial-intelligence-surpass-human-intelligence.jpg", description: "Exploring AI advancements...", date: "2025-07-01", category: "Tech" },
  { title: "Trip to Iceland with Friends", image: "https://img.mobilestyles.com/images/blog_posts/1467/623b1db7c9157.jpeg", description: "My journey through glaciers and volcanoes.", date: "2025-06-15", category: "Travel" },
  { title: "Best Vegan Dishes-Pakistan", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxjdxuXJOIgMocyMUo_Eikvn1i6uhJ_XqtPw&s", description: "Top recipes you must try!", date: "2025-05-30", category: "Food" },
  { title: "Quantum Computing-Advanced", image: "https://eurohpc-ju.europa.eu/sites/default/files/styles/oe_theme_medium_no_crop/public/2025-04/EuroHPC%20Quantum%20computers.png?itok=wWMABV8y", description: "A beginner’s guide.", date: "2025-07-15", category: "Tech" },
  { title: "Hiking in Nepal-Part2", image: "https://api.swotahtravel.com/images/blogs/cover/trekking-in-Nepal.jpg", description: "What to expect and prepare.", date: "2025-05-20", category: "Travel" },
  { title: "Street Food Tour-Bangkok", image: "bangkok-street-food.jpg", description: "Tasting flavors around the world.", date: "2025-04-22", category: "Food" },  
  // Add more posts as needed
];

let currentPage = 1;
const postsPerPage = 6;

const blogContainer = document.getElementById("blogContainer");
const categoryFilter = document.getElementById("categoryFilter");
const searchInput = document.getElementById("searchInput");
const pageInfo = document.getElementById("pageInfo");

function renderPosts() {
  const category = categoryFilter.value;
  const keyword = searchInput.value.toLowerCase();

  const filtered = blogPosts.filter(post => {
    const matchesCategory = category === "All" || post.category === category;
    const matchesSearch = post.title.toLowerCase().includes(keyword);
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filtered.length / postsPerPage);
  currentPage = Math.min(currentPage, totalPages || 1);

  const start = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filtered.slice(start, start + postsPerPage);

  blogContainer.innerHTML = "";
  paginatedPosts.forEach(post => {
    blogContainer.innerHTML += `
      <div class="card">
        <img src="${post.image}" alt="${post.title}">
        <div class="card-content">
          <h3>${post.title}</h3>
          <p>${post.description}</p>
          <div class="date">${post.date}</div>
        </div>
      </div>`;
  });

  pageInfo.textContent = `Page ${currentPage} of ${totalPages || 1}`;
  document.getElementById("prevPage").disabled = currentPage === 1;
  document.getElementById("nextPage").disabled = currentPage === totalPages || totalPages === 0;
}

document.getElementById("prevPage").onclick = () => {
  if (currentPage > 1) currentPage--;
  renderPosts();
};

document.getElementById("nextPage").onclick = () => {
  currentPage++;
  renderPosts();
};

searchInput.addEventListener("input", () => {
  currentPage = 1;
  renderPosts();
});

categoryFilter.addEventListener("change", () => {
  currentPage = 1;
  renderPosts();
});

renderPosts();
