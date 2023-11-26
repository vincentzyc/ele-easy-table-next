export declare const EleEasyTable: import("vue").DefineComponent<{
  formData: {
    type: ObjectConstructor;
    required: boolean;
    default: () => Record<string, any>;
  };
  form: {
    type: ObjectConstructor;
    required: boolean;
    default: () => Record<string, any>;
  };
  table: {
    type: ObjectConstructor;
    required: boolean;
    default: () => ({
      list: []
    });
  };
  pagination: {
    type: [boolean, Record<string, any>],
    default: true
  }
}>

export interface TypeTextBtnItem {
  text?: string,
  config?: Record<string, any>
  funcText?: (row: any) => any
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

export declare const CustomColumn: import("vue").DefineComponent<{
  localName: string,
  show?: boolean,
  baseColumns?: TypeColumnsItem[],
  columns?: TypeColumnsItem[],
  defaultColumns?: string[]
}>

declare const _default: {
  install: (app: any) => void;
};
export default _default;
