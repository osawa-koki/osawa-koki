FROM node:20 as build_stage
WORKDIR /src
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM nginx:1.25
EXPOSE 80
COPY --from=build_stage /src/dist /usr/share/nginx/html
