module.exports = {
    apps: [
        {
            name: "fastapi-app-staging",
            script: "/var/www/app-staging/venv/bin/uvicorn",
            args: "main:app --host 0.0.0.0 --port 8000",
            autorestart: true,
            watch: false,
            max_memory_restart: '1G',
            env: {
                NODE_ENV: "staging"
            }
        },
        {
            name: "fastapi-app-prod",
            script: "/var/www/app-prod/venv/bin/uvicorn",
            args: "main:app --host 0.0.0.0 --port 8001",
            autorestart: true,
            watch: false,
            max_memory_restart: '1G',
            env: {
                NODE_ENV: "production"
            }
        }
    ]
};