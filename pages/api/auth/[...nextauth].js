import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const providers = [
  Providers.Spotify({
    scope:
      'user-read-email playlist-read-collaborative playlist-read-private playlist-modify-public playlist-modify-private',
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  }),
];

const callbacks = {};

/**
 * @param  {object} session      Session object
 * @param  {object} user         User object    (if using database sessions)
 *                               JSON Web Token (if not using database sessions)
 * @return {object}              Session that will be returned to the client
 */

callbacks.jwt = async (token, user, account, profile) => {
  if (token) {
    return Promise.resolve({ ...token, ...user, ...account, ...profile });
  }
};

callbacks.session = async (session, user, sessionToken) => {
  console.log(user);
  return Promise.resolve({ ...session, ...user, ...sessionToken });
};

const options = {
  providers,
  session: {
    jwt: true,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  callbacks,
};

export default (req, res) => NextAuth(req, res, options);
