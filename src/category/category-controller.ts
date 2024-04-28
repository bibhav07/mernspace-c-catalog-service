import { Request, Response } from "express";

export class CategoryController {
    async create(req: Request, res: Response) {
        return res.json({ message: "new category create" });
    }
}
