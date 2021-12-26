export interface Props {
  localName: string,
  show?: boolean,
  baseColumns?: ColumnsItem[],
  columns?: ColumnsItem[],
  defaultColumns?: string[]
}
export interface TextBtnItem {
  text: string,
  funcConfig: () => void
  handleClick: () => void
}
export interface ColumnsItem {
  key: string,
  label: string,
  header: string,
  type: string,
  slot: string,
  disabledCustom: boolean,
  textBtn: TextBtnItem[],
  format: () => void
}