module.exports = {
    apps: [{
        name: "fastapi-app",
        script: "uvicorn",
        // DO NOT put flags in the script field
        // USE a space-separated string for args
        args: "main:app --host 0.0.0.0 --port 8000",
        interpreter: "python3",
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',

        env_staging: {
            name: "fastapi-app-staging",
            // If you want to change the port here, you must repeat the full args string
            args: "main:app --host 0.0.0.0 --port 8000",
            NODE_ENV: "staging"
        },
        env_production: {
            name: "fastapi-app-prod",
            args: "main:app --host 0.0.0.0 --port 8001",
            NODE_ENV: "production"
        }
    }]
};
