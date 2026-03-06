# Stage 1: Build the Vite application
FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine
# Copy the built assets from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port (Cloud Run expects apps to listen on 8080 by default, Nginx defaults to 80, we will override nginx config or let Cloud Run map it if needed, but it's safer to configure nginx to use 8080 or pass PORT env)
# Overriding nginx config to listen on the PORT environment variable 
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
