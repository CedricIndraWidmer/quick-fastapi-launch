import uvicorn
import asyncio
from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return "EC2 system check"


async def main():
    config = uvicorn.Config(
        "app:app", host="0.0.0.0", port=8000, log_level="info"
    )
    server = uvicorn.Server(config)
    await server.serve()


if __name__ == "__main__":
    asyncio.run(main())
