class LoadDB {
  dataList: Array<string>;
  constructor() {
    this.dataList = [
      'http://localhost:5000/countries/load',
      'http://localhost:5000/genres/load',
      'http://localhost:5000/films/load',
      'http://localhost:5100/actors/load'     
    ]
  }

  async load() {
    this.dataList.forEach((url) => this.fethDB(url));
  }

  async fethDB(url: string) {
    let result;
    try {
      const response = await fetch(url, {
        mode: 'no-cors',
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
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
