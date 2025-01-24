export abstract class BaseUser {
    first_name: string;
    second_name?: string;
    last_name: string;
    dni: string;
    birthdate: string;
    email: string;
    password: string;
    state: string;
    city: string;
    role: string;
    profile_picture?: string;
    isDeleted: boolean;
  }