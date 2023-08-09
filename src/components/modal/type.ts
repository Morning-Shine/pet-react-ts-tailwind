export type TModalProps = {
  children: React.ReactNode;
  onClose: () => void;
  /**д. соответствовать правилам tailwind */
  // top: string;
  size: 'sm' | 'md'
};
