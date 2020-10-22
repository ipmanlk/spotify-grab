/* eslint-disable */
'use strict';

// settings for jest
jest.setTimeout(30000); // 30s

const { getInfo } = require("../dist");

describe("Various Spotify URIs.", () => {

  const trackUrl = "https://open.spotify.com/track/6habFhsOp2NvshLv26DqMb?si=FkyYtDchRW-L8L2BlCweRw";
  test("Track", async () => {
    const data = await getInfo(trackUrl);
    expect(typeof data).toBe("object");
  });

  const artistUrl = "https://open.spotify.com/artist/6S2OmqARrzebs0tKUEyXyp?si=Z9bKuJqOTUijM-6DCOeUzw";
  test("Artist", async () => {
    const data = await getInfo(artistUrl);
    expect(typeof data).toBe("object");
  });

  const albumUrl = "https://open.spotify.com/album/6Kssm2LosQ0WyLukFZkEG5?si=Beef3bOiQE2NWsduUj5zEw";
  test("Album", async () => async () => {
    const data = await getInfo(albumUrl);
    expect(typeof data).toBe("object");
  });

  const playlistUrl = "https://open.spotify.com/playlist/67T8G3AMlkFcQ8l1XKAfXt?si=bKLImB7pTKiIwO33wGKk8A";
  test("Playlist", async () => {
    const data = await getInfo(playlistUrl);
    expect(typeof data).toBe("object");
  });

});