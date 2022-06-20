function isBanned(text) {
  return text.match(/Alan Smithee/);
}

const Comment = ({ avatar, authorName, date, children }) => {
  return isBanned(authorName) ? (
    <h4>Author is banned!</h4>
  ) : (
    <article className="comment">
      <header>
        <img src={avatar} alt="avatar" />
        <p>{authorName || "Unknown"}</p>
        <time>{date}</time>
      </header>
      <div className="content">{children}</div>
    </article>
  );
};

export default Comment;
