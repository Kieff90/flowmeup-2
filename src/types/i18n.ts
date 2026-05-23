export type Locale = 'it' | 'en'
export type Dict = {
  // Populated in Wave 2 when sections are built
  [key: string]: string | Dict
}
