export interface TypeTextBtnItem {
  text: string,
  funcConfig?: (row: any) => any
  handleClick: (row: any, scope: any) => any
}
export interface TypeColumnsItem {
  key: string,
  label: string,
  header?: string,
  type?: string,
  slot?: string,
  disabledCustom?: boolean,
  textBtn?: TypeTextBtnItem[],
  config?: Record<string, any>,
  format?: (row: any) => any
}