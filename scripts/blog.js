console.log("Script is running...")

const headerElement =
  document.querySelector('#header');
headerElement.style.color = 'blue';

const subHeaderElement =
  document.querySelector('#subheader');


 headerElement.addEventListener('onscroll', () => {
    headerElement.remove(blueText);
  });

subHeaderElement.addEventListener('mouseleave', () => {
  subHeaderElement.style.color = 'red'
});

//
// setTimeout(() =>  {
//   headerElement.style.color = 'red';
// }, 3000);

// const gravity =
// document.querySelector('body');
// gravity.
