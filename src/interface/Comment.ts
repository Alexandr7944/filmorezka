export interface Comment {
  "id": number,
  "displayName": string,
  "comment": string,
  "filmId": number,
  "parentCommentId": number | null,
  "createdAt": string,
  "updatedAt": string
}