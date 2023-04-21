import { EnvVariable } from "../types/env";

const loadEnvVariable = (name: EnvVariable) => {
  const variable = process.env[name];
  if (!variable) throw new Error(`No environment variable for ${name} found`);
  return variable;
};

export const VITE_TEST_VAR = loadEnvVariable("VITE_TEST_VAR");
