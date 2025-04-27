# 🌿 Nature Notice

**Nature Notice** will be a website where organizations can create events that promote environmentally conscious lifestyles. Users will then be able to find events near them that they are interested in attending.

This project a full-stack web application built with FastAPI Python backend and a modern ReactJS frontend, containerized using Docker.

---

## 📦 Tech Stack

- **Backend**: [FastAPI](https://fastapi.tiangolo.com/)
- **Frontend**: JavaScript (React, Vue, or similar)
- **Database Migration**: [Alembic](https://alembic.sqlalchemy.org/)
- **Web Server**: [Nginx](https://www.nginx.com/)
- **Containerization**: [Docker](https://www.docker.com/) + [Docker Compose](https://docs.docker.com/compose/)

---

## 🚀 Getting Started

These instructions will help you run the project locally for development and testing purposes.

### Prerequisites
- Docker
- Docker Compose
- (Optional for faster frontend development) Node.js and npm

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/rickyc19/nature_notice.git
   cd nature_notice
   ```

2. **Run the application with Docker Compose**
   ```bash
   docker-compose up -d
   ```

   > **Note**: On first build, you may see a `502 Bad Gateway` error while the frontend is building. Wait a few moments, then refresh the page.

3. **Apply database migrations**
   ```bash
   docker-compose run --rm backend alembic upgrade head
   ```

4. **Access the app**
   - **Frontend**: [http://localhost:8000](http://localhost:8000)
   - **API Docs**: [http://localhost:8000/api/docs](http://localhost:8000/api/docs)

---

## ⚡ Frontend Development (Optional)

For faster reloads during frontend development, you can run the frontend locally outside Docker:

```bash
cd frontend
npm install
npm run dev
```

The frontend will typically be available at [http://localhost:3000](http://localhost:3000).

---

## 🗂 Project Structure

```plaintext
nature_notice/
│
├── backend/         # FastAPI backend application
├── frontend/        # JavaScript frontend application
├── nginx/           # Nginx configuration files
├── docker/          # Additional Docker configurations
├── scripts/         # Utility and helper scripts
├── docker-compose.yml
└── README.md        # Project documentation
```

---

## 🛠 Useful Commands

- **View Docker logs**
  ```bash
  docker-compose logs -f
  ```

- **Stop and remove containers**
  ```bash
  docker-compose down
  ```

- **Rebuild containers**
  ```bash
  docker-compose up -d --build
  ```
