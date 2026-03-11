(function () {
    const updateStats = async () => {
        const container = document.getElementById('github-stats-container');
        if (!container) return;

        const repo = container.dataset.repo;
        const cacheKey = `github-stats-${repo}`;
        const oneHour = 60 * 60 * 1000;
        const now = new Date().getTime();

        const format = (n) => {
            if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
            if (n >= 1000) return (n / 1000).toFixed(1) + 'K';
            return n;
        };
        const setUI = (stars, forks) => {
            const sEl = document.getElementById('github-stars');
            const fEl = document.getElementById('github-forks');
            if (sEl) sEl.textContent = format(stars);
            if (fEl) fEl.textContent = format(forks);
        };

        // Check cache
        const cached = JSON.parse(localStorage.getItem(cacheKey));
        if (cached && (now - cached.timestamp < oneHour)) {
            setUI(cached.stars, cached.forks);
            return;
        }

        try {
            const res = await fetch(`https://api.github.com/repos/${repo}`);
            if (!res.ok) return;
            const data = await res.json();

            setUI(data.stargazers_count, data.forks_count);
            localStorage.setItem(cacheKey, JSON.stringify({
                stars: data.stargazers_count,
                forks: data.forks_count,
                timestamp: now
            }));
        } catch (e) {
            console.error("GitHub API error", e);
        }
    };
    updateStats();
})();
