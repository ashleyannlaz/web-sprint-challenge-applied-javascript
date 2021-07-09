const Header = (title, date, temp) => {
  const head = document.createElement('div');
  const dates = document.createElement('span');
  const h1Title = document.createElement('h1');
  const temperature = document.createElement('span');

  head.classList.add('header');
  dates.classList.add('date');
  temperature.classList.add('temp');

  dates.textContent = date;
  h1Title.textContent = title;
  temperature.textContent = temp;

  head.appendChild(dates);
  head.appendChild(h1Title);
  head.appendChild(temperature);

  return head;

  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

const headerAppender = (selector) => {
  const text = Header('Lambda Times','July 9, 2021','95°');
  document.querySelector(selector).append(text);
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}


export { Header, headerAppender }
