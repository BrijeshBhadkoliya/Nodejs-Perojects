import { app } from '@/.server/app';
import { SpecialRoutePage } from '@kottster/react';
import { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node';

export const loader = async (args: LoaderFunctionArgs) => {
  return app.createServiceRouteLoader()(args);
};

export const action = async (args: ActionFunctionArgs) => {
  return app.createServiceRouteLoader()(args);
};

export default SpecialRoutePage;