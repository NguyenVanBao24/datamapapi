module.exports = {
  async rewrites() {
    return [
      {
        source: '/data.json',
        destination: '/data.json',
      },
    ];
  },
};
