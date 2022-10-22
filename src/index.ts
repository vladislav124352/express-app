import { GroceryList } from './index.d';
import express, {Application, Request, Response, NextFunction} from "express";
import dotenv from "dotenv";
dotenv.config();

export const app: Application = express();
app.use(express.json());
app.use(express.urlencoded());
app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`${req.method}:${req.url}`);
    next();
})

export const groceryList: GroceryList = [
    { item: "milk", quantity: 2 },
    { item: "cereal", quantity: 1 },
    { item: "pop-tarts", quantity: 1 },
]

app.get("/groceries",(req: Request, res: Response) => {
        res.send(groceryList);
        res.sendStatus(200);
    }
);

app.post("/groceries", (req: Request, res: Response) => {
    groceryList.push(req.body);
    res.sendStatus(201);
});

export const server = app.listen(process.env.PORT, () => {
    console.log(`Start http://localhost:${process.env.PORT}`);
});