export interface TypeProcedimento {
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
  featured_media: number
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
  descricao_procedimento: string
  numero_sessoes: string
  preco_procedimento: string
  area_aplicada: string
  produtos_utilizados: string[]
  tempo_aplicacao: string
}