import { useEffect, useState } from 'react';

import './App.scss';
import Post from './components/Post.tsx';
import User from './components/User.tsx';

function App() {
  const [error, setError] = useState(null);
  const [post, setPost] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  function alphabetSortCity(x, y) {
    if (x.address.city < y.address.city) return -1;
    if (x.address.city > y.address.city) return 1;
    return 0;
  }

  function alphabetSortCompany(x, y) {
    if (x.company.name < y.company.name) return -1;
    if (x.company.name > y.company.name) return 1;
    return 0;
  }

  const sortByCity = () => {
    let _items = [...items];
    setItems(_items.sort(alphabetSortCity));
  };

  const sortByCompanyName = () => {
    let _items = [...items];
    setItems(_items.sort(alphabetSortCompany));
  };

  const returnPost = (id) => {
    console.log('sperm');
    let _items = [...items];
    let _post = _items.find((el) => el.id === id);
    setPost(_post);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else if (!post) {
    return (
      <div className="App">
        <div className="App-sort">
          <p>Сортировка</p>
          <button onClick={sortByCity}>По городу</button>
          <button onClick={sortByCompanyName}>По компании</button>
        </div>
        <div className="App-posts">
          <p className="App-posts-title">Список пользователей</p>
          {items.map((post) => (
            <div key={post.id}>
              <Post
                openDetails={returnPost}
                id={post.id}
                name={post.name}
                city={post.address.city}
                company={post.company.name}
              />
            </div>
          ))}
          <p className="App-found">Найдено {items.length} пользователей</p>
        </div>
      </div>
    );
  } else {
    return <User post={post} />;
  }
}

export default App;
