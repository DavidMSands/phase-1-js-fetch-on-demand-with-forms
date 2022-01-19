const init = () => {
  const inputForm = document.querySelector('form');
  inputForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = e.target.children[1].value;
      fetch(`http://localhost:3000/movies/${input}`)
      .then(res => res.json())
      .then(movies => {
          const title = document.querySelector('section#movieDetails h4');
          const summary = document.querySelector('section#movieDetails p')
          title.innerText = movies.title;
          summary.innerText = movies.summary;
      })
  })
}

document.addEventListener('DOMContentLoaded', init);