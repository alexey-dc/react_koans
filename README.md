# About
This is a set of examples/tests of react edge cases. In part inspired by http://rubykoans.com/

# Demo
A live demo is hosted at https://react.alexey-dc.com/

# License
I licensed this work as [AGPL](https://www.gnu.org/licenses/agpl-3.0.en.html) - i.e. I want it to stay open source if any modifications or additions are made, and any distributions should have attribution. I'm aware of the criticisms of copyleft licenses, but in this case I don't think of this code as the foundation for any application code; I think preserving the openness of it is more important.

If you do wish to use a part of the code here in a commercial or closed-source project, or avoid attribution - I can be reached at alexey.opensource@gmail.com - perhaps we can work something out. I'm also open to being convinced that a different license is more appropriate.

This code was based on a template I own which is licensed as MIT, i.e. all code there is free for use in any form: https://github.com/alexey-dc/nextjs_express_template - you may find sufficient value there.


# Running
I use HTTPS locally, and the instructions to set that up are below. If you wish to use HTTP instead, instructions are also below.

## Http
In `app/server.js`, change
```javascript
this.server = httpsServer(this.express)
```

to
```javascript
this.server = httpServer(this.express)
```

## Https
This project is set up to run HTTPS. The instructions to set up your certificates in localhost are below.

It's recommended to use pnpm with this project, as `pnpm-lock.yaml` is commited: `pnpm install`. See https://classic.pnpmpkg.com/en/docs/install (or do `npm install -g pnpm`)

The project relies on the `dotenv` package, so you'll need to create a `.env` file at the root of this project and add some environment variables into it. Your .env file should env up looking something like this - be sure to follow the instructions in the next sextion for setting up the SSL certificates:

```bash
NODE_ENV=development
EXPRESS_PORT=3300

SSL_PRIVATE_KEY_PATH = mkcert/localhost-key.pem
SSL_CERTIFICATE_PATH = mkcert/localhost.pem
```

After all is ready, just do
```bash
# I recommend pnpm https://pnpm.io/benchmarks
pnpm start

# Otherwise use yarn or npm...
yarn start
npm start
```

# Localhost HTTPS
I recommend setting up certificates with mkcert. It's really simple:

```bash
# 1. Install mkcert
brew install mkcert   # For MacOS; for Linux - you can e.g. install brew https://docs.brew.sh/Homebrew-on-Linux
brew install nss      # for Firefox
mkcert -install

# 2. Issue certificates
mkdir mkcert          # Inside the root of this project
cd mkcert
mkcert localhost
```

Then set environment variables for your new cert:
```bash
# 3. Add certificate to a .env file at the root of this project
SSL_PRIVATE_KEY_PATH = mkcert/localhost-key.pem
SSL_CERTIFICATE_PATH = mkcert/localhost.pem
```

