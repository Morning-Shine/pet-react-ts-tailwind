export type TPageSizeSelectProps = {
  pageSizes: readonly number[];
  pageSize:number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};
