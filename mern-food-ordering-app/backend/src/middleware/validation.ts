import { Request, Response, NextFunction } from "express";
import { body } from "express-validator";

const handleValidationErrors = async (req: Request, res: Response, next: NextFunction) {
    
}

export const validateUserRequest = [
    body("name").isString().notEmpty().withMessage("Name must be a String"),
    body("addressLine1").isString().notEmpty().withMessage("AddressLine1 must be a String"),
    body("city").isString().notEmpty().withMessage("City must be a String"),
    body("Country").isString().notEmpty().withMessage("Country must be a String"),

];