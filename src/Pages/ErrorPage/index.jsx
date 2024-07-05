import PropTypes from 'prop-types';
import { useEffect } from 'react';

function ErrorPage({ setHasError }) {
  useEffect(() => {
    setHasError(true);
  }, [setHasError]);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Parece que algum erro ocorreu!</p>
    </div>
  );
}

ErrorPage.propTypes = {
  setHasError: PropTypes.func.isRequired,
};

export default ErrorPage;
