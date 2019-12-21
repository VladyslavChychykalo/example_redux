# Шаги

- Создать store
- Продумать структуру state
- Создать типы действий
- Создать действия (action creators)
- Создать reducers
- Обернуть все в Provider и передать ему store
- Подключить компоненты с connect(mapState, mapDispatch)(BaseComponent)

<!-- коллекция

noteReducer

case ADD_NOTE
return [...state, payload]

 -->

 <!-- componentDidMount() {
    const persistedAccount = localStorage.getItem('account');

    if (persistedAccount) {
      this.setState(JSON.parse(persistedAccount));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      localStorage.setItem('account', JSON.stringify(this.state));
    }
  } -->

<!-- import React, { Component, createRef() } from 'react'; -->
<!-- buttonLoadMoreRef = createRef(); -->
 <!-- if (page > 1) {
          // const { current } = this.buttonLoadMoreRef;
          window.scrollTo({
            // top: current.offsetTop - 2 * window.innerHeight,
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }
      }); -->
<!-- <button
            className={styles.button}
            type="button"
            onClick={this.handleIncrementPage}
            // ref={this.buttonLoadMoreRef}
          >
            Load more
          </button> -->

<!-- ======================================================================================= -->

<!-- // {
// // link, name, character, id;
// /_ <img
// src={
// link !== null
// ? `http://image.tmdb.org/t/p/original${link}`
// : 'http://image.tmdb.org/t/p/original/zUqyn3aQXTzeP1n8yd8Udt1twYA.jpg'
// }
// alt=""
// style={{ width: '185px', height: '200px' }}
// />
// <p>{name}</p>
// <p>{character}</p> _/
// } -->

<!-- =================================================== -->

 <!-- // <div>
  // <button type="button" onClick={onClick}>
  //   Go back
  // </button>
  // <div>
  //   <img
  //     src={
  //       movie.poster_path !== null
  //         ? `http://image.tmdb.org/t/p/original${movie.poster_path}`
  //         : 'http://image.tmdb.org/t/p/original/zUqyn3aQXTzeP1n8yd8Udt1twYA.jpg'
  //     }
  //     alt=""
  //     style={{ width: '400px', height: '500px' }}
  //   />
  //   <h1>{movie.title}</h1>
  //   <p>{movie.overview}</p>
  //   {movie.genres.map(name => (
  //     <p key={name.id}>{name.name}</p>
  //   ))}
  // </div>
  // <div>
  //   <ul>
  //     <li>
  //       <Link to={`/movies/${movie.id}/cast`}>Cast</Link>
  //     </li>
  //     <li>
  //       <Link to={`/movies/${movie.id}/reviews`}>Review</Link>
  //     </li>
  //   </ul>
  // </div>
  // </div> -->
