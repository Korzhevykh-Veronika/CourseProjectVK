class API {
    API_URL = "https://calendarific.com/api/v2";
    #API_KEY = "IGP7xqlXPDUz9UU8Zp1VdqZCVoP2JkvK";
  
    async getCountries() {
        const response = await fetch(
            `${this.API_URL}/countries?api_key=${this.#API_KEY}`
          );
          const data = await response.json();

        if (!response.ok) {
            if (response.status === 404) {
            throw new Error(data.message);
            }

            throw new Error("Something went wrong!");
        }

        return data;
    };

    async getAllHolidays(countryName, year) {
        const response = await fetch(
            `${this.API_URL}/holidays?&api_key=${this.#API_KEY}&country=${countryName}&year=${year}`
          );
          const data = await response.json();

        if (!response.ok) {
            if (response.status === 404) {
            throw new Error(data.message);
            }

            throw new Error("Something went wrong!");
        }

        return data;
    };
}
  
  export const api = new API();