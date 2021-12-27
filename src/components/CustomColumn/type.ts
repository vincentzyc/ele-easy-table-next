export interface TypeTextBtnItem {
  text: string,
  funcConfig: () => void
  handleClick: () => void
}
export interface TypeColumnsItem {
  key: string,
  label: string,
  header: string,
  type: string,
  slot: string,
  disabledCustom: boolean,
  textBtn: TypeTextBtnItem[],
  format: () => void
}