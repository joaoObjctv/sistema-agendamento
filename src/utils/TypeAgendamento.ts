export interface TypeAgendamento {
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
  data_agendamento: string
  paciente_slc: number[]
  procedimento_slc: number[]
  status_agendamento: string
}