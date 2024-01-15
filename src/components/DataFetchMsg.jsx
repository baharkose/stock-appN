import { Alert, Skeleton, Stack } from "@mui/material";

export const ErrorMsg = () => {
  return <Alert severity="error">Veriler çekilemedi.</Alert>;
};

export const NoDataMsg = () => {
  return <Alert severity="warning">Gösterilecek bir veri bulunamadı.</Alert>;
};

const TableSkeleton = () => {
  return (
    <div>
      <Stack spacing={1}>
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />

        <Skeleton variant="rectangular" width="100%" height={60} />
        <Skeleton variant="rectangular" width="100%" height={40} />
        <Skeleton variant="rectangular" width="100%" height={40} />
        <Skeleton variant="rectangular" width="100%" height={40} />
      </Stack>
    </div>
  );
};

export default TableSkeleton;
