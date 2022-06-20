import Card from "./Card";
import Comment from "./Comment";

const App = () => {
  return (
    <>
      <Card>
        <h1>Comments</h1>
      </Card>
      <section className="comments">
        <Comment
          avatar="https://i.pravatar.cc/75?1"
          authorName="Mary Smith"
          date="11/12/21"
        >
          <h3>This is a comment</h3>
          <ul>
            <li>One</li>
            <li>Two</li>
          </ul>
        </Comment>
        <Card>
          <Comment
            avatar="https://i.pravatar.cc/75?2"
            authorName="Joe Bloggs"
            date="8/9/21"
          >
            <p>This is another comment</p>
          </Comment>
        </Card>
        <Comment
          avatar="https://i.pravatar.cc/75?3"
          authorName="Alan Smithee"
          date="1/1/21"
        >
          <p>Happy New Year!</p>
        </Comment>
      </section>
    </>
  );
};

export default App;
