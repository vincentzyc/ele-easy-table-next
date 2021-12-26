export interface Props {
  localName: string,
  show?: boolean,
  baseColumns?: Record<string, any>[],
  columns?: Record<string, any>[],
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