const checkbox = document.querySelectorAll('input');
let lastChecked = null;
const checkboxes = Array.from(checkbox)

checkboxes.forEach( checkbox => checkbox.addEventListener( 'click', event => {
    if ( !lastChecked ) {
      lastChecked = checkbox;
      return;
    }
    if ( event.shiftKey ) {
      const start = checkboxes.indexOf( checkbox );
      const end   = checkboxes.indexOf( lastChecked );
      checkboxes
        .slice( Math.min( start, end ), Math.max( start, end ) + 1 )
        .forEach( checkbox => checkbox.checked = lastChecked.checked );
    }
    lastChecked = checkbox;
  })
)



// const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

// let lastChecked;

// function handleCheck(e) {
//   let inBetween = false;
//   if(e.shiftKey && this.checked) {
//     checkboxes.forEach(checkbox => {
//       if(checkbox === this || checkbox === lastChecked) {
//         inBetween = !inBetween;
//       }
//       if(inBetween) {
//         checkbox.checked = true;
//       }
//     })
//   }
//   lastChecked = this;
// }


// checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
