import { Request } from 'express';
import { JwtPayloadDTO } from './jwt-payload.dto';

export interface AuthenticatedRequest extends Request {
  user: JwtPayloadDTO;
}
