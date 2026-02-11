module.exports = {
    apps: [
        {
            name: "fastapi-app-staging",
            script: "uvicorn",
            args: "main:app --host 0.0.0.0 --port 8000",
            interpreter: "./venv/bin/python3",
            autorestart: true,
            watch: false,
            max_memory_restart: '1G',
            env: {
                NODE_ENV: "staging"
            }
        },
        {
            name: "fastapi-app-prod",
            script: "./venv/bin/uvicorn",
            args: "main:app --host 0.0.0.0 --port 8001",
            interpreter: "./venv/bin/python3",
            autorestart: true,
            watch: false,
            max_memory_restart: '1G',
            env: {
                NODE_ENV: "production"
            }
        }
    ]
};
