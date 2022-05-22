export interface TypeTextBtnItem {
  text: string,
  funcConfig?: (row: unknown) => unknown
  handleClick: (row: unknown, scope: unknown) => unknown
}
export interface TypeColumnsItem {
  key: string,
  label: string,
  header?: string,
  type?: string,
  slot?: string,
  disabledCustom?: boolean,
  textBtn?: TypeTextBtnItem[],
  config?: Record<string, unknown>,
  format?: (row: unknown) => unknown
}