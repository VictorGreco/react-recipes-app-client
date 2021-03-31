import React, { useState } from "react";

import "./Login.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Label from "../../components/Label";
// import ROUTES from "../../utils/routes";
import makePrefix from "../../utils/make-prefix";

function Login() {
  const { isAuthenticated, loginError, isLoggingIn } = {
    isAuthenticated: false,
    loginError: null,
    isLoggingIn: false,
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const prefix = makePrefix("login-form");

  function handleSubmit(e) {
    e.preventDefault();

    // dispatch(login({ email, password }));
  }

  if (isAuthenticated) {
    return "redirect to the ROUTES.HOME path...";
  }

  return (
    <div className="Login d-flex flex-column min-vh-100">
      <Header />

      <main className="container d-flex flex-column flex-shrink-0 flex-grow-1">
        <div className="row justify-content-sm-center align-items-sm-center flex-grow-1">
          <section className="Form col-md-8 col-xl-6 mx-sm-auto border rounded p-sm-5">
            <header>
              <h1 className="h2 pt-5 pt-sm-2 pb-4">Iniciar sesión</h1>
            </header>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  data-testid={prefix("email")}
                  placeholder="Tu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <Label htmlFor="password">Contraseña</Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Tu contraseña"
                  data-testid={prefix("password")}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button
                htmlType="submit"
                additionalClasses="mt-4 btn-block"
                disabled={isLoggingIn}
                data-testid={prefix("cta")}
              >
                Iniciar sesión
              </Button>
              {loginError && (
                <div className="bg-dark p-3 mt-3">
                  <p className="text-white mb-0">{loginError}</p>
                </div>
              )}
            </form>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Login;
