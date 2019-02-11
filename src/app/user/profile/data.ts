export interface CountyInterface {
  code: number
  name: string
}

export function CountiesFilter(value: string): CountyInterface[] {
  return Counties.filter(state => {
    return (
      state.name.toLowerCase().indexOf(value.toLowerCase()) === 0 ||
        state.code.valueOf()

    )
  })
}

export enum PhoneType {
  Mobile,
  Home,
  Work
}

const Counties = [
  { code: 1, name: 'Mombasa' },
  { code: 2, name: 'Kwale' },
  { code: 3, name: 'Kilifi' },
  { code: 4, name: 'Tana River' },
  { code: 5, name: 'Lamu' },
  { code: 6, name: 'Taita–Taveta' },
  { code: 7, name: 'Garissa' },
  { code: 8, name: 'Wajir' },
  { code: 9, name: 'Mandera' },
  { code: 10, name: 'Marsabit' },
  { code: 11, name: 'Isiolo' },
  { code: 12, name: 'Meru' },
  { code: 13, name: 'Tharaka-Nithi' },
  { code: 14, name: 'Embu' },
  { code: 15, name: 'Kitui' },
  { code: 16, name: 'Machakos' },
  { code: 17, name: 'Makueni' },
  { code: 18, name: 'Nyandarua' },
  { code: 19, name: 'Nyeri' },
  { code: 20, name: 'Kirinyaga' },
  { code: 21, name: 'Muranga' },
  { code: 22, name: 'Kiambu' },
  { code: 23, name: 'Turkana' },
  { code: 24, name: 'West Pokot' },
  { code: 25, name: 'Samburu' },
  { code: 26, name: 'Trans-Nzoia' },
  { code: 27, name: 'Uashin Gishu' },
  { code: 28, name: 'Elgeyo-Marakwet' },
  { code: 29, name: 'Nandi' },
  { code: 30, name: 'Baringo' },
  { code: 31, name: 'Laikipia' },
  { code: 32, name: 'Nakuru' },
  { code: 33, name: 'Narok' },
  { code: 34, name: 'Kajiado' },
  { code: 35, name: 'Kericho' },
  { code: 36, name: 'Bomet' },
  { code: 37, name: 'Kakamega' },
  { code: 38, name: 'Vihiga' },
  { code: 39, name: 'Bungoma' },
  { code: 40, name: 'Busia' },
  { code: 41, name: 'Siaya' },
  { code: 42, name: 'Kisumu' },
  { code: 43, name: 'Homa Bay' },
  { code: 44, name: 'Migori' },
  { code: 45, name: 'Kisii' },
  { code: 46, name: 'Nyamira' },
  { code: 47, name: 'Nairobi' },
]
