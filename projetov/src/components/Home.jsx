import Header from './Header';
import PropTypes from 'prop-types';

const Home = ({ onLogout }) => {
  return (
    <div>
      <Header onLogout={onLogout} />
      <div className="container mt-5">
        <h1>Bem-vindo à Organização de Eventos Esportivos</h1>
        <p>
          Organizando competições de alto nível, conectando atletas e proporcionando experiências
          esportivas inesquecíveis!
        </p>
      </div>
    </div>
  );
};

Home.propTypes = {
    onLogout: PropTypes.func.isRequired,
};

export default Home;
