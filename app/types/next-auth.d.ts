import type { User } from 'next-auth';
import { UsersType } from '@/utils/db.type';
import NextAuth from 'next-auth';

export type AuthenticatedUserType = Pick<
  UsersType,
  'id' | 'email' | 'userName' | 'role' | 'department' | 'status' | 'profile'
>;

declare module 'next-auth' {
  interface Session {
    user: User;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    user: User;
  }
}