export function spanKey(postid: number){
    const date = new Date();
    return date.getHours() + date.getMinutes() + date.getSeconds() + postid;
}