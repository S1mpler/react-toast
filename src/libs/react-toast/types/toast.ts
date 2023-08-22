type ToastColorSchema = {
  readonly background: string;
  readonly text: string;
}

export type CreateToast = {
  readonly type: 'success' | 'warning' | 'danger';
  readonly title?: string;
  readonly message: string;
  readonly duration?: number;
}

export type Toast = {
  readonly id: string;
  readonly type: 'success' | 'warning' | 'danger';
  readonly message: string;
  readonly duration: number;
  readonly title: string;
  readonly icon: JSX.Element;
  readonly color: ToastColorSchema;
}