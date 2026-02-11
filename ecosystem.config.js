module.exports = {
    apps: [{
        script: "uvicorn",
        interpreter: "python3",
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',

        // Use variables that PM2 will pull from the active env block
        name: process.env.APP_NAME || "fastapi-app-dev",
        args: `main:app --host 0.0.0.0 --port ${process.env.PORT || 8000} --root-path ${process.env.ROOT_PATH || ''}`,

        // --- 1. DEFAULT (Dev) ---
        env: {
            APP_NAME: "fastapi-app-dev",
            NODE_ENV: "development",
            PORT: "8000",
            ROOT_PATH: ""
        },

        // --- 2. STAGING ---
        env_staging: {
            APP_NAME: "fastapi-app-staging",
            NODE_ENV: "staging",
            PORT: "8000",
            ROOT_PATH: "/staging"
        },

        // --- 3. PRODUCTION ---
        env_production: {
            APP_NAME: "fastapi-app-prod",
            NODE_ENV: "production",
            PORT: "8001",
            ROOT_PATH: "/prod"
        }
    }]
};
