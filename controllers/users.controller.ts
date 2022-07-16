import { Request, Response } from 'express';
import User from '../models/user';

export const getUsers = async (req: Request, res: Response) => {
  const users = await User.findAll();

  res.json({ users });
};
export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  if (!user) {
    return res.status(404).json({ message: `User not found with id ${id}` });
  }
  res.json({ user });
};
export const postUser = async (req: Request, res: Response) => {
  const { body } = req;
  try {
    const emailExiste = await User.findOne({ where: { email: body.email } });
    if (emailExiste) {
      return res.status(400).json({ message: 'Email already exists' });
    }
    const user = await User.create(body);
    res.json({ user });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: `User not found with id ${id}` });
    }

    await user.update(body);

    res.json(user);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  if (!user) {
    return res.status(404).json({ message: `User not found with id ${id}` });
  }

  // Delete user in fisical way (not recommended)

  // await user.destroy();

  // Delete user in  logical way (recommended)
  await user.update({ state: false });
  res.json({ message: 'User deleted' });
};
