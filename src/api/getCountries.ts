const FETCH_URL =
  "https://gist.githubusercontent.com/sanchezzzhak/8606e9607396fb5f8216/raw/39de29950198a7332652e1e8224f988b2e94b166/ISO3166_RU.json";

export interface CountryResponse {
  flag_url: string;
  name_ru: string;
  iso_code2: string;
  iso_code3: string;
}

export interface Country {
  id: string;
  url: string;
  name: string;
}

export async function getCountries() {
  try {
    const response = await fetch(FETCH_URL);

    if (!response.ok) {
      return "Ошибка загрузки списка стран";
    }

    const data = (await response.json()) as
      | CountryResponse[]
      | null
      | undefined;

    if (!Array.isArray(data)) {
      return "Ошибка загрузки списка стран";
    }

    if (data.length === 0) {
      return "Список стран пуст";
    }

    return data.map((county) => ({
      id: county.iso_code2,
      url: county.flag_url,
      name: county.name_ru,
    }));
  } catch {
    return "Ошибка загрузки списка стран";
  }
}
