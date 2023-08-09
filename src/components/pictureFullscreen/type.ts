export type TPictureFullscreen = {
  picture: string;
  nextPicture: () => void;
  previousPicture: () => void;
  isFirst: boolean;
  isLast: boolean;
};
