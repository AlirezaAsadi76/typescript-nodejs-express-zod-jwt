import {Request,NextFunction,Response} from 'express';
import { verifyJWT } from '../../startUp/JWT';
import {get} from 'lodash';

const deserializeUser=(req: Request,res: Response, next: NextFunction)=>{
    const token=get(req,"headers.token");
    const refreshToken=get(req,"headers.refresh");
    console.log(token);
    if(!token)
    {
        next();
    }
    
    const {decoded,expired}=verifyJWT(token);
    if(decoded)
    {
    
        res.locals.user=decoded;
        return next();
    }
    if(expired && refreshToken)
    {
        
    }
}
export default deserializeUser;