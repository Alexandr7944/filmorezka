import { IUserAccount } from "@/interface/IUserAccount";

class Autorization {
    private static _url: string = 'http://localhost:5010/auth/';

    static readonly badRequest: number = 500;

    static async checkEmail(email: string): Promise<boolean> {
      const data = {
        email
      }

			try {
				const response = await fetch(this._url + 'email', {
					mode: 'cors',
					method: 'POST',
					headers: {
						'Content-type': 'application/json',
					},
					body: JSON.stringify(data),
				});

        const result: string = await response.text();
        
				return result !== email;
			} catch (err) {
				throw err;
			}
    }

    static async checkDisplayName(displayName: string): Promise<boolean> {
      const data = {
        displayName
      }

			try {
				const response = await fetch(this._url + 'name', {
					mode: 'cors',
					method: 'POST',
					headers: {
						'Content-type': 'application/json',
					},
					body: JSON.stringify(data),
				});

        const result: string = await response.text();
        
				return result !== displayName;
			} catch (err) {
				throw err;
			}
    }
  
    static async registration(email: string, displayName: string, password: string): Promise<boolean> {
			const data = {
				email,
				displayName,
				password
			};

			try {
				const response = await fetch(this._url + 'registration', {
					mode: 'cors',
					method: 'POST',
					headers: {
						'Content-type': 'application/json',
					},
					body: JSON.stringify(data),
					credentials: 'include',
				});

				const result: string = await response.text();

				return !result;
			} catch (err) {
				throw err;
			}
    }

		static async login(email: string, password: string): Promise<boolean> {
			const data = {
				email,
				password
			};

			try {
				const response = await fetch(this._url + 'login', {
					mode: 'cors',
					method: 'POST',
					headers: {
						'Content-type': 'application/json',
					},
					body: JSON.stringify(data),
					credentials: 'include'
				});

				const result: string = await response.text();
        
				return !result;
			} catch (err) {
				throw err;
			}
    }

		static async loginVK(): Promise<boolean> {
			try {
				const response = await fetch(this._url + 'vkontakte/login', {
					mode: 'cors',
					method: 'GET',
					headers: {
						'Content-type': 'application/json',
					},
					credentials: 'include'
				});

				console.log(response)
				const result: string = await response.text();
				console.log(result)
        
				return true;
			} catch (err) {
				throw err;
			}
    }

		static async loginGmail(): Promise<boolean> {
			try {
				const response = await fetch(this._url + 'google/login', {
					mode: 'cors',
					method: 'GET',
					headers: {
						'Content-type': 'application/json',
					},
					credentials: 'include'
				});

				console.log(response)
				const result: string = await response.text();
				console.log(result)
        
				return true;
			} catch (err) {
				throw err;
			}
    }

		static async getUser(): Promise<IUserAccount | undefined> {
			try {
				const response = await fetch(this._url + 'user/info', {
					mode: 'cors',
					method: 'GET',
					headers: {
						'Content-type': 'application/json',
					},
					credentials: 'include'
				});

				if (response.status === this.badRequest) {
					return undefined;
				}

				const result: IUserAccount = await response.json();
        
				return result;
			} catch (err) {
				throw err;
			}
		}

		static async logOut(): Promise<boolean> {
			try {
				await fetch(this._url + 'logout', {
					mode: 'cors',
					method: 'POST',
					headers: {
						'Content-type': 'application/json',
					},
					credentials: 'include'
				});
        
				return true;
			} catch (err) {
				throw err;
			}
		}
}
  
  export default Autorization;