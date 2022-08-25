import { useState } from "react";
import { history, useHistory } from "react-router-dom"

const Create = () => {
  const [ title, setTitle ] = useState('')
  const [ body, setBody ] = useState('')
  const [ author, setAuthor ] = useState('princess')
  const [ isPending, setIsPending ] = useState(false)
  const history  = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    const blog = {title, body, author}

    setIsPending(true)
    
    fetch("http://localhost:8000/blogs", {
      method: 'POST',
      headers: { 'Content-Type':'Application/json'},
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added')
      setIsPending(false)
      history.push('/')
    })
  }

  return (
    <div className="create">
      <h2>Add new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}></input>
        <label>Blog Body</label>
        <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        <label>Blog Author</label>
        <select defaultValue={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="luigi">luigi</option>
          <option value="princess">princess</option>
        </select>
        { isPending && <button>Adding blog...</button>}
        { !isPending && <button>Add blog</button>}
      </form>
    </div>
  );
};

export default Create;
