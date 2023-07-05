export type OnFunction = () => void;

export interface MergedActionParams {
  children: React.ReactNode;
  onAction: Record<string, OnFunction>;
}
