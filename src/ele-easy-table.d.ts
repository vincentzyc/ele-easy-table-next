export declare const EleEasyTable: import("vue").DefineComponent<{
  formData: {
    type: ObjectConstructor;
    required: boolean;
    default: () => ({});
  };
  form: {
    type: ObjectConstructor;
    required: boolean;
    default: () => ({});
  };
  table: {
    type: ObjectConstructor;
    required: boolean;
    default: () => ({
      list: []
    });
  };
  pagination: {
    type: [Boolean, Object],
    default: true
  }
}>

declare const _default: {
  install: (app: any) => void;
};
export default _default;
