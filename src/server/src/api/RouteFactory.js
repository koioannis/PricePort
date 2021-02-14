const BasePrefix = 'api';

const RouteFactory = (version) => {
  const Base = `/${BasePrefix}/${version}`;
  const AuthBase = `${Base}/auth`;
  const ProductsBase = `${Base}/products`;

  return {
    Register: `${AuthBase}/register`,
    LogIn: `${AuthBase}/login`,
    LogOut: `${AuthBase}/logout`,
    RefreshToken: `${AuthBase}/refresh`,

    ProductAction: `${ProductsBase}/product`,
    GetRandomProducts: `${ProductsBase}/get-random-products/:count`,
  };
};

module.exports = RouteFactory;
