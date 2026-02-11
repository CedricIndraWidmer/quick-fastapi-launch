module.exports = {
    apps: [
        {
            name: "fastapi-app-staging",
            script: "uvicorn",
            args: "main:app --host 0.0.0.0 --port 8000",
            interpreter: "python3",
            autorestart: true,
            max_memory_restart: '1G',
            env: {
                NODE_ENV: "staging"
            }
        },
        {
            name: "fastapi-app-prod",
            script: "uvicorn",
            args: "main:app --host 0.0.0.0 --port 8001",
            interpreter: "python3",
            autorestart: true,
            max_memory_restart: '1G',
            env: {
                NODE_ENV: "production"
            }
        }
    ]
};
