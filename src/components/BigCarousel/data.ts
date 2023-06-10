type movie = {
  imageURL: string,
  logoURL: string,
  description: string
}

const movies: movie[] = [
  {
    imageURL: 'https://thumbs.dfs.ivi.ru/storage6/contents/2/4/4835e3c9686f4678e9fe5792a36694.jpg/1216x524/?q=85',
    logoURL: 'https://thumbs.dfs.ivi.ru/storage15/contents/c/e/832f39e00112c0a244c5b67fe781ca.png/x200/',
    description: 'Детектив и профессор расследуют серию загадочных оккультных убийств. Триллер с Морганом Фриманом.'
  },
  {
    imageURL: 'https://thumbs.dfs.ivi.ru/storage37/contents/1/9/38f8beebe2fcacc9f9aecc65df1d89.jpg/1216x524/?q=85',
    logoURL: 'https://thumbs.dfs.ivi.ru/storage2/contents/3/1/44124e84f5f968df069d9a4886b5c8.png/x200/',
    description: 'Наследники бизнес-империи грызутся за власть. Завершающий сезон одного из главных сериалов XXI века'
  },
  {
    imageURL: 'https://thumbs.dfs.ivi.ru/storage29/contents/6/d/ef27c0c7a0feaea24c5667970a8913.jpg/1216x524/?q=85',
    logoURL: 'https://thumbs.dfs.ivi.ru/storage4/contents/7/2/bb47ee7788aee92721fbabd8a8e069.png/x200/',
    description: 'Драма с Юлией Снигирь о репрессиях в Москве 1952-ого от режиссёра великого «Белорусского вокзала»'
  },
  {
    imageURL: 'https://thumbs.dfs.ivi.ru/storage15/contents/4/5/d21190d034a191ab8801afde48c808.jpg/1216x524/?q=85',
    logoURL: 'https://thumbs.dfs.ivi.ru/storage6/contents/f/1/0a323dd758f01f46ff96633a0c6db8.png/x200/',
    description: 'Детектив спасает город от группы бандитов. Возможно, последняя экшн-франшиза в карьере Брюса Уиллиса'
  },
]

export default movies;

export type {
  movie
}