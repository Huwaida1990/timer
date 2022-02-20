const times = process.argv.slice(2).sort()

times.forEach(time => {
  setTimeout(()=>{
    console.log(`${time} second`);
    process.stdout.write('\x07');
  },time * 1000 )
});