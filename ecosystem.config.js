module.exports = {
    apps: [{
        // --- Shared Core Config ---
        script: "uvicorn",
        interpreter: "python3",
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',

        // --- 1. DEFAULT (Fallback) ---
        // Used if you run: pm2 start ecosystem.config.js
        env: {
            name: "fastapi-app-dev",
            args: "main:app --host 0.0.0.0 --port 8000",
            NODE_ENV: "development"
        },

        // --- 2. STAGING ---
        // Used if you run: pm2 start ecosystem.config.js --env staging
        env_staging: {
            name: "fastapi-app-staging",
            args: "main:app --host 0.0.0.0 --port 8000",
            NODE_ENV: "staging",
            ROOT_PATH: "/staging"
        },

        // --- 3. PRODUCTION ---
        // Used if you run: pm2 start ecosystem.config.js --env production
        env_production: {
            name: "fastapi-app-prod",
            args: "main:app --host 0.0.0.0 --port 8001",
            NODE_ENV: "production",
            ROOT_PATH: "/prod"
        }
    }]
};
