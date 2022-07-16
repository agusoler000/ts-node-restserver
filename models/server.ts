import express, { Application } from 'express';
import userRoutes from '../routes/user.routes';
import cors from 'cors';
import database from '../database/connections';

class Server {
  private app: Application;
  private port: string | number;
  private apiPaths = {
    users: '/api/users',
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8000;
    this.dbConnection();
    /**
     * define middlewares
     */
    this.middlewares();
    /**
     * define routes
     */
    this.routes();
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port} `);
    });
  }

  private routes() {
    this.app.use(this.apiPaths.users, userRoutes);
  }

  /**
   * DDBB
   * for sql alternatives:
   *  -https://ampps.com/downloads/
   *  -https://www.wampserver.com/en/
   *  -https://www.apachefriends.org/es/index.html   *
   */

  private async dbConnection() {
    try {
      await database.authenticate();
      console.log(
        'Connection with database has been established successfully.'
      );
    } catch (error: any) {
      throw new Error(error);
    }
  }

  private middlewares() {
    //Cors
    this.app.use(cors());
    //Body Parser
    this.app.use(express.json());

    //public folder
    this.app.use(express.static('public'));

    //Custom Middlewares
  }
}

export default Server;
