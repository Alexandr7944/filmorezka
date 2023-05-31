class LoadDB {
  dataList: Array<string>;
  cookie: string;
  token: string;

  constructor() {
    this.dataList = [
      'http://localhost:5000/countries/load',
      'http://localhost:5000/genres/load',
      'http://localhost:5000/films/load',
      'http://localhost:5100/actors/load'
    ];
    this.cookie = '';
    this.token = 'refreshToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImlkIjoxLCJyb2xlcyI6W3siaWQiOjEsInZhbHVlIjoiYWRtaW4iLCJkZXNjcmlwdGlvbiI6Im1haW4gcm9sZSwgYm9zcyIsImNyZWF0ZWRBdCI6IjIwMjMtMDUtMjdUMDQ6Mjk6NDYuODM3WiIsInVwZGF0ZWRBdCI6IjIwMjMtMDUtMjdUMDQ6Mjk6NDYuODM3WiJ9XSwiZGlzcGxheU5hbWUiOiJBZG1pbiIsImlhdCI6MTY4NTE2MTc4NiwiZXhwIjoxNjg1MjQ4MTg2fQ.jBsV8N80-3RzxzWf2Zf0AR7OxCjpIUheyibQfhfZOMY'
  }

  async load() {
    this.dataList.forEach((url) => this.fethDB(url));
  }

  async login() {
    const body = {
      email: "test1@mail.ru", 
      password: "12345678a", 
      displayName: "Test1"
    }

    try {
      const response = await fetch('http://localhost:5010/auth/login', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(body),
        credentials: 'include',
      });
      if (!response.ok) throw new Error(`Ошибка запроса, статус: ${response}`)
      this.cookie = await response.json();
      localStorage.setItem('cookie', JSON.stringify(this.cookie))
      console.log(this.cookie);
    } catch (err) {
      console.error(err);
    }
  }

  async fethDB(url: string) {
    let result;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Cookie': this.token
        },
      });
      result = await response.json();
      return console.log(result);
    } catch (err) {
      console.error(err);
    }
  } 
}

export default LoadDB;
