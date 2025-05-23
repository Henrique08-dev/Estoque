const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ message: 'Acesso negado.' });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError'){
      return res.status(401).json({message: 'Token expirado'});
    }
      res.status(400).json({ message: 'Token inválido.' });
  }
};

app.get('/Circuito', authMiddleware, (req, res) => {
    res.json({ message: 'Bem-vindo à página do circuito!', user: req.user });
});

app.get('/Galeria', (req, res) => {
    res.json({ message: 'Esta é uma rota pública.' });
});

app.get('/Login', (req, res) => {
    res.json({ message: 'Esta é uma rota pública.' });
});

app.get('/Cadastro', (req, res) => {
    res.json({ message: 'Esta é uma rota pública.' });
});

app.get('/Sobre', (req, res) => {
    res.json({ message: 'Esta é uma rota pública.' });
});

app.get('/Home', (req, res) => {
    res.json({ message: 'Esta é uma rota pública.' });
});


module.exports = authMiddleware;
