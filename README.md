# Falx-Lata-HR Website

This is the Falx-Lata HR website built with Next.js, featuring a full-featured admin panel for managing job vacancies.

## Key Features

- Public-facing website showcasing HR services
- Careers section displaying job vacancies from the database
- Administrative dashboard for managing job vacancies and categories
- Role-based authentication with admin privileges

## Technologies

- **Frontend**: Next.js 15, React 19, TailwindCSS, Framer Motion
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL
- **Authentication**: Custom JWT auth with role-based access control

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- PostgreSQL database

### Environment Setup

1. Create a `.env` file in the root directory with the following variables:

```
# Database connection
DATABASE_URL="postgresql://postgres:P@ssw0rd23@206.189.40.14:5432/falx_lata_db?schema=public"

# Admin user seed (optional)
ADMIN_EMAIL="admin@falxlata.com"
ADMIN_PASSWORD="Admin123!"
```

### Installation

1. Install dependencies:

```bash
npm install
```

2. Generate Prisma client:

```bash
npm run prisma:generate
```

3. Set up the database:

```bash
# Option 1: Run migrations and create an admin user
npm run db:migrate
npm run db:seed

# Option 2: Initialize database with sample data (categories & vacancies)
npm run db:sample

# Option 3: Initialize database with sample data (caution: resets database)
npm run db:init
```

4. Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Admin Access

Once you've set up the database with an admin user, you can access the admin panel at:

[http://localhost:3000/admin/login](http://localhost:3000/admin/login)

Use the credentials you specified in the `.env` file or the default credentials:
- Email: admin@falxlata.com
- Password: Admin123!

## Admin Features

- **Dashboard**: View statistics about vacancies and categories
- **Vacancy Management**: Create, edit, and delete job vacancies
- **Category Management**: Organize vacancies by categories
- **Active/Inactive Status**: Control which vacancies are publicly visible

## Deployment

This application can be deployed to any hosting platform that supports Next.js applications, such as Vercel, Netlify, or a custom server.

To deploy with a PostgreSQL database, ensure your database URL is properly set in the environment variables of your hosting platform.

## License

Proprietary - All rights reserved.
