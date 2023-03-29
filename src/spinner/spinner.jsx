import { Grid } from 'react-loader-spinner'

const Spinner = () => {
  return (
    <Grid
      height="40"
      width="40"
      color="hsl(150, 100%, 66%)"
      ariaLabel="grid-loading"
      radius="12.5"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Spinner;
