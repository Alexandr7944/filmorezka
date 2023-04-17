class Fetching {
  static async getAll(url: string, method: string = 'GET') {
    const response = await fetch(url, {
      method: method,
      headers: {
          'X-API-KEY': 'bd41c576-b9b8-455e-b3fa-dc54c04dc1dd',
          'Content-Type': 'application/json',
      },
    });
    const json = response.json();
    return json;
  }  
}

export default Fetching;
