import Header from './Header';
import PropTypes from 'prop-types';

const Sobre = ({ onLogout }) => {
  return (
    <div>
      <Header onLogout={onLogout} />
      <div className="container mt-5">
        <h1>Sobre a Organização</h1>
        <p>
          Nossa organização é dedicada a promover competições esportivas de
          alta qualidade, conectando atletas de diversas modalidades em eventos
          nacionais e internacionais. Nossa missão é incentivar o espírito
          esportivo, proporcionar um ambiente saudável para o crescimento dos
          atletas e fortalecer a comunidade esportiva global.
        </p>
      </div>
    </div>
  );
};

Sobre.propTypes = {
    onLogout: PropTypes.func.isRequired,
};

export default Sobre;
