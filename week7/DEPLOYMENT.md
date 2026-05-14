# Deployment Guide

This document explains how to deploy this MERN Blog Application to cloud platforms like **Render**, **Railway**, or **DigitalOcean**.

## Deployment Strategy
The application is configured to be **Single Origin**. 
- The React Frontend is built into a `dist/` folder.
- The Express Backend serves these static files from the `dist/` folder.
- This allows you to host the entire application (frontend + backend) as a single web service.

## Configuration Steps

### 1. Environment Variables
You MUST set the following environment variables on your hosting provider:
- `PORT`: Usually set automatically by the provider (e.g., 10000 on Render).
- `DB_URL`: Your MongoDB Atlas connection string.
- `SECRET_KEY`: A long, random string used for JWT signing.
- `NODE_ENV`: Set to `production`.

### 2. Build Commands
On your hosting provider, use the following build and start commands (running from the **root** of the repository):

- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`

### 3. Database Access
Whitelisting IP addresses:
- If using MongoDB Atlas, remember to whitelist the IP address of your hosting server or allow access from anywhere (`0.0.0.0/0`) if the provider uses dynamic IPs.

---

## Example: Deploying to Render

1. Create a new **Web Service**.
2. Connect your GitHub repository.
3. **Build Command**: `npm install && npm run build`
4. **Start Command**: `npm start`
5. Add the environment variables (`DB_URL`, `SECRET_KEY`, etc.) in the **Environment** tab.

## Local Production Testing
To test the production build locally:
1. Run `npm run build` in the root folder.
2. Run `npm start` in the root folder.
3. Access the app at `http://localhost:5000` (or the port specified in your `.env`).
