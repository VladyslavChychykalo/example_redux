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
