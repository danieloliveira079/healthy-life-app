const Strings = {};

Strings.default = {
  language: 'default'
};

Strings['pt-BR'] = Object.assign({}, Strings['en-US'], {
  language: 'pt-BR',

  App: {
    Name: 'Healthy Life',
    FooterText: `©  ${new Date().getFullYear()}`,
    Exit: 'Sair'
  },
  Campaign: {
    Title: 'Campanhas',
    TitleList: 'Lista de Campanhas',
    FormTitle: 'Campanha',
    Info: {
      Subscribers: 'Assinantes',
      Slides: 'Slides',
      Interval: 'Intervalo'
    }
  },
  Operations: {
    New: 'Nova',
    Edit: 'Alterar',
    Save: 'Salvar',
    Cancel: 'Cancelar',
    Delete: 'Excluir'
  },
  Login: {
    LoginAction: 'Entrar',
    LogoutAction: 'Sair',
    FormTitle: 'Informe suas Credenciais',
    SignUpText: 'Faça seu cadastro!',
    PasswordRecovery: 'Esqueceu sua senha?'
  }

});

module.exports = Strings['pt-BR'];
