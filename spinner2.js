let spinner = ['\r|   ', '\r/   ','\r-   ','\r\\   ','\r/   ','\r\   ','\r|   ']

spinner.forEach(function(item, index) {
  setTimeout(function() {
    process.stdout.write(item)

   }, index * 200 );
});

