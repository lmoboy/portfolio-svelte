// GitHub store using Svelte runes

// Define reactive state variables
let repositories = [{}];
let isLoading = false;
let error = null;

// GitHub API URL for user repositories
const GITHUB_API_URL = 'https://api.github.com/users/lmoboy/repos';

// Cache configuration
const CACHE_KEY = 'github_repositories';
const CACHE_EXPIRY = 60 * 60 * 1000; // 1 hour in milliseconds

/**
 * Check if cached data exists and is still valid
 * @returns {Array|null} - Cached repositories or null if cache is invalid/missing
 */
function getRepositoriesFromCache() {
  try {
    const cachedData = localStorage.getItem(CACHE_KEY);
    if (!cachedData) return null;
    
    const { data, timestamp } = JSON.parse(cachedData);
    const now = new Date().getTime();
    
    // Check if cache is still valid (not expired)
    if (now - timestamp < CACHE_EXPIRY) {
      return data;
    }
    return null;
  } catch (err) {
    console.error('Error reading from localStorage:', err);
    return null;
  }
}

/**
 * Save repositories to localStorage cache
 * @param {Array} data - Repository data to cache
 */
function saveRepositoriesToCache(data) {
  try {
    const cacheData = {
      data,
      timestamp: new Date().getTime()
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
  } catch (err) {
    console.error('Error saving to localStorage:', err);
  }
}

async function fetchRepositories(options = {}) {
  // Set default options
  const {
    sort = 'updated',
    direction = 'desc',
    per_page = 100,
    forceRefresh = false
  } = options;
  
  // Check cache first if not forcing refresh
  if (!forceRefresh) {
    // Try to get data from localStorage
    const cachedRepos = getRepositoriesFromCache();
    if (cachedRepos) {
      repositories = cachedRepos;
      return;
    }
  }
  
  // Build query parameters
  const params = new URLSearchParams({
    sort,
    direction,
    per_page: per_page.toString()
  });
  
  // Set loading state
  isLoading = true;
  error = null;
  
  try {
    // Fetch repositories from GitHub API
    const response = await fetch(`${GITHUB_API_URL}?${params}`);
    
    // Check if response is ok
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }
    
    // Parse response as JSON
    const data = await response.json();
    
    // Update repositories state
    repositories = data.map(repository => ({
      title: repository.name,
      description: repository.description || 'No description available',
      language: repository.language || 'Unknown',
      technologies: repository.topics || [],
      link: repository.html_url,
      stars: repository.stargazers_count,
      forks: repository.forks_count,
      updated_at: repository.updated_at
    }));
    
    // Save to cache
    saveRepositoriesToCache(data);

  } catch (err) {
    // Set error state
    error = err.message;
    console.error('Error fetching GitHub repositories:', err);
  } finally {
    // Reset loading state
    isLoading = false;
  }
}

/**
 * Filter repositories by language
 * @param {string} language - Language to filter by (case insensitive)
 * @returns {Array} - Filtered repositories
 */
function filterByLanguage(language) {
  if (!language) return repositories;
  
  return repositories.filter(repo => 
    repo.language && repo.language.toLowerCase() === language.toLowerCase()
  );
}

// Initialize with a check for browser environment to avoid SSR issues
let initialized = false;

function initialize() {
  if (initialized) return;
  
  // Check if we're in a browser environment (has localStorage)
  if (typeof window !== 'undefined' && window.localStorage) {
    fetchRepositories();
    initialized = true;
  }
}

// Initialize the store
initialize();

// Export state variables and functions
export {
  repositories,
  isLoading,
  error,
  filterByLanguage,
  fetchRepositories
};