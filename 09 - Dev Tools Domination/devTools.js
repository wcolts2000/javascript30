const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    // console.log('hello');

    // Interpolated
    // console.log('Hello I am a %s string!', 'rg');
    // console.log(`Hello I am a ${var} string!`);
    

    // Styled
    // console.log('%c I am some great text', 'font-size:50px; background:yellow; text-shadow: 2px 2px 0 pink;');

    // warning!
    // console.warn("OH NO!!!");
    
    // Error :|
    // console.error("OH NO!!!");

    // Info
    // console.info("crocodiles eat 4-5 people per year")

    // Testing
    // const p = document.querySelector('p');

    // console.assert(p.classList.contains('ouch'), 'You did not select the right element')

    // clearing
    // console.clear();

    // Viewing DOM Elements
    // console.dir(p)
    // console.log(p)

    // Grouping together
    // dogs.forEach(dog => {
    // // console.group(`${dog.name}`);
    // console.groupCollapsed(`${dog.name}`);
    // console.log(`This is ${dog.name}`);
    // console.log(`${dog.name} is ${dog.age} years old`);
    // console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    // console.groupEnd(`${dog.name}`);
    // });

    // counting
    // console.count('sean');
    // console.count('sean');
    // console.count('steve');
    // console.count('steve');
    // console.count('steve');
    // console.count('sean');
    // console.count('sean');
    // console.count('sean');
    // console.count('steve');
    // console.count('steve');
    // console.count('steve');
    // console.count('sean');

    // timing
    // console.time('fetching data');
    // fetch('https://api.github.com/users/wesbos')
    //   .then(data => data.json())
    //   .then(data => {
    //     console.timeEnd('fetching data');
    //     console.log(data);        
    //   });


    // console.table(dogs)

