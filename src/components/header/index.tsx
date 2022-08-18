
const defaultProps = {
  title: 'header',
};

export interface params {
  title?: string;
};

const App = (params: params): JSX.Element => {
  params = { ...defaultProps, ...params}
  return (
  <div>
    <h1>{params.title}</h1>
  </div>
)};

export default App;
