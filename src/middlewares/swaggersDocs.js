import swaggerUI from 'swagger-ui-express';
import readFileSync from 'node:fs';
import { SWAGGER_PATH } from '../constants/index.js';

export const swaggerDocs = () => {
  try {
    const swaggerDoc = () =>
      json.parse(fs.readFileSync(SWAGGER_PATH).toString());
    return [...swaggerUI.serve, swaggerUI.setup(swaggerDoc)];
  } catch (err) {
    return (req, res) => {
      res.status(500).json({
        message: 'Can`t load swagger docs',
      });
    };
  }
};
