
module.exports = {
  parser: require('postcss-comment'), // for support inline comments in Postcss -> https://stackoverflow.com/questions/46774659/how-to-support-inline-comments-in-postcss/50649102#50649102
  plugins: [
    require('autoprefixer')({
      browsers: ['iOS >= 7', 'Android >= 4.1']
    })
  ]
};
