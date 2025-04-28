export interface MessageEntity {
  id: number
  role: Role
  text: string
}

export enum Role {
  USER,
  BOT,
}
