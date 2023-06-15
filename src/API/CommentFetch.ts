import { Comment } from "@/interface/Comment";

class CommentFetch {
  static async getComment(
      movieId: number, 
      setCommentsList: (result: Comment[]) => void
    ) {    
    try {
      const response = await fetch(
        'http://localhost:8000/comments/filmId/' + movieId, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json"
          },
          credentials: "include"
      });
      const result = await response.json();
      result && setCommentsList(result);
    } catch (err) {
      console.log(err);
    }
  }

  static async addComment(
      text: string,
      displayName: string,
      movieId: number,
      parentCommentId: number | null = null
    ) {    
    try {
      const response = await fetch('http://localhost:8000/comments', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          displayName: displayName,
          comment: text,
          filmId: movieId,
          parentCommentId
        }),
        credentials: "include"
      });
      const result = await response;
      if (!response.ok) return new Error('Ошибка запроса');
      console.log('Success: ', result);
    } catch (err) {
      console.log(err);
    }
  }

  static async changeComment(
      commentId: number,
      comment: string
    ) {    
    try {
      const response = await fetch('http://localhost:8000/comments/update', {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({commentId, comment}),
        credentials: "include"
      });
      const result = await response;
      if (!response.ok) return new Error('Ошибка запроса');
      console.log('Success: ', result);
    } catch (err) {
      console.log(err);
    }
  }

  static async deleteComment(comId: number) {
    try {
      const response = await fetch('http://localhost:8000/comments/comId/' + comId, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      const result = await response;
      if (!response.ok) return new Error('Ошибка запроса');
      console.log('Success: ', result);
    } catch (err) {
      console.log(err);
    }
  }
}

export default CommentFetch;