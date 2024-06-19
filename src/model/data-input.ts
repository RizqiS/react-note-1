export interface PropsInput {
  label: string;
  textarea?: boolean;
  type?: string;
  rows?: number;
  cols?: number;
}

export type CustomValueRef = {
  getValue(): {
    title: string | undefined;
    description: string | undefined;
    date: string | undefined;
  };
};
