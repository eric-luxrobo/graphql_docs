FROM alpine:edge

# Installs latest Chromium (77) package.
RUN apk add --no-cache \
      chromium \
      nss \
      freetype \
      freetype-dev \
      harfbuzz \
      ca-certificates \
      ttf-freefont \
      nodejs \
      yarn


# Tell Puppeteer to skip installing Chrome. We'll be using the installed package.
# ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
#    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

# Puppeteer v1.19.0 works with Chromium 77.
RUN yarn add puppeteer@1.19.0

# Add user so we don't need --no-sandbox.
RUN addgroup -S pptruser && adduser -S -g pptruser pptruser \
    && mkdir -p /home/pptruser/Downloads /app \
    && chown -R pptruser:pptruser /home/pptruser \
    && chown -R pptruser:pptruser /app

WORKDIR /app

# Run everything after as non-privileged user.
USER pptruser

COPY package.json .

RUN yarn global add gatsby-cli

RUN yarn install

RUN mkdir -p ./public
COPY source  ./source
# COPY public  ./public
COPY src  ./src
COPY gatsby-config.js gatsby-node.js ./

RUN yarn build
EXPOSE 9000

CMD ["yarn", "serve"]



