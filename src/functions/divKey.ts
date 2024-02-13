export function divKey(commentId: number){
    const date = new Date();
    return date.getHours() + date.getMinutes() + date.getSeconds() + commentId;
}