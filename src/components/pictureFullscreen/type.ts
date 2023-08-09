export type TPictureFullscreen = {
  picture: string;
  title?: string;
  nextPicture: () => void;
  previousPicture: () => void;
  isFirst: boolean;
  isLast: boolean;
};
