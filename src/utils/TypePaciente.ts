export interface TypePaciente {
  id: number
  date: string
  date_gmt: string
  guid: Guid
  modified: string
  modified_gmt: string
  slug: string
  status: string
  type: string
  link: string
  title: Title
  template: string
  class_list: string[]
  acf: Acf
}

export interface Guid {
  rendered: string
}

export interface Title {
  rendered: string
}

export interface Acf {
  data_nascimento: string
  cpf_rg: string
  telefone: string
  anamnese: string
}