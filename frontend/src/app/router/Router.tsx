import { routes } from "@shared/config/routes";
import React from "react";
import { Redirect, Route, Switch, Router as WouterRouter } from "wouter";
import { AboutPage } from "@/src/pages/about/AboutPage";
import { AuthEmailVerify } from "../../pages/auth/AuthEmailVerify";
import { AuthLoginPage } from "../../pages/auth/AuthLoginPage";
import { AuthRegisterPage } from "../../pages/auth/AuthRegisterPage";
import { AuthResetPassword } from "../../pages/auth/AuthResetPassword";
import { HomePage } from "../../pages/home/HomePage";

const NonAuthRouter: React.FC = () => {
	return (
		<WouterRouter>
			<Switch>
				<Route path={routes.AUTH_LOGIN} component={AuthLoginPage} />

				<Route path={routes.AUTH_REGISTER} component={AuthRegisterPage} />
				<Route path={routes.AUTH_RESET_PASSWORD} component={AuthResetPassword} />

				<Route path={"*"}>
					<Redirect to={routes.AUTH_LOGIN} />
				</Route>
			</Switch>
		</WouterRouter>
	);
};

const AuthRouter: React.FC = () => {
	return (
		<WouterRouter>
			<Switch>
				<Route path={routes.HOME} component={HomePage} />
				<Route path={routes.ABOUT} component={AboutPage} />

				<Route path={routes.AUTH_EMAIL_VERIFY} component={AuthEmailVerify} />

				<Route path={"*"}>
					<Redirect to={routes.HOME} />
				</Route>
			</Switch>
		</WouterRouter>
	);
};

export const Router: React.FC = () => {
	const isAuth = true;

	return isAuth ? <AuthRouter /> : <NonAuthRouter />;
};
