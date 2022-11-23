import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
  let age: number = 23;
  let showOld: boolean = false;

  if (age > 18) {
    showOld = true;
  }
  res.render("pages/home", {
    firstName: "joao",
    lastName: "cabral",
    showOld
  });
};
