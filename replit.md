# Overview

This is a full-stack web application for "FillBot", a Chrome extension that uses AI to automatically fill forms. The application serves as a landing page and marketing site for the extension, built with React on the frontend and Express.js on the backend. The project follows a modern monorepo structure with shared TypeScript types and uses PostgreSQL with Drizzle ORM for data persistence.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent UI components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Animations**: Framer Motion for smooth UI animations
- **Form Handling**: React Hook Form with Zod validation

## Backend Architecture
- **Framework**: Express.js with TypeScript running on Node.js
- **Database ORM**: Drizzle ORM for type-safe database operations
- **API Design**: RESTful API structure with /api prefix for all endpoints
- **Session Management**: Express sessions with PostgreSQL session store
- **Development**: Hot module replacement with Vite integration for seamless development experience

## Database Design
- **Primary Database**: PostgreSQL with Neon serverless database
- **Schema Management**: Drizzle migrations with schema defined in shared directory
- **Current Schema**: Basic user management with username/password authentication
- **Storage Interface**: Abstracted storage layer with both memory and database implementations

## Development Workflow
- **Monorepo Structure**: Client, server, and shared code in separate directories
- **Type Safety**: Shared TypeScript types between frontend and backend
- **Build Process**: Separate build processes for client (Vite) and server (esbuild)
- **Development Server**: Integrated development experience with proxy setup

## Authentication & Security
- **User Management**: Basic username/password authentication system
- **Session Handling**: Server-side sessions with PostgreSQL storage
- **Password Security**: Structured for secure password hashing (implementation needed)

# External Dependencies

## Core Framework Dependencies
- **@neondatabase/serverless**: PostgreSQL serverless database connection
- **drizzle-orm**: Type-safe ORM for database operations
- **express**: Web application framework for Node.js
- **react**: Frontend UI library
- **vite**: Frontend build tool and development server

## UI and Styling
- **@radix-ui/***: Comprehensive set of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant API for components
- **framer-motion**: Animation library for React

## Development Tools
- **typescript**: Type checking and compilation
- **@replit/vite-plugin-***: Replit-specific development tools
- **tsx**: TypeScript execution for Node.js development

## State Management & Data Fetching
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight routing for React
- **react-hook-form**: Form state management
- **zod**: Schema validation library

## Session & Storage
- **connect-pg-simple**: PostgreSQL session store for Express
- **nanoid**: Unique ID generation