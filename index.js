const cacheDirs = `/opt/buildhome/.cache/firebase/emulators`;

module.exports = {
  async onPreBuild({ utils }) {
    if (await utils.cache.restore(cacheDirs)) {
      console.log('Found cached Firebase emulators!');
    } else {
      console.log('No cached Firebase emulators found.');
    }
  },
  async onPostBuild({ utils }) {
    if (await utils.cache.save(cacheDirs)) {
      console.log('Cached the Firebase emulators to speed up future builds!');
    } else {
      console.log('No Firebase emulators found.');
    }
  },
};
